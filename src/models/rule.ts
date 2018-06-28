import * as _ from 'lodash'
import * as BitSet from 'bitset'
import {
    BaseForLines,
    IGameCode,
    IGameNode
} from '../models/game'
import { IGameTile, GameSprite } from './tile'
import { RULE_MODIFIER, setDifference, setIntersection, nextRandom, RULE_DIRECTION_ABSOLUTE, RULE_DIRECTION_ABSOLUTE_SET, RULE_DIRECTION_ABSOLUTE_LIST, setEquals, DEBUG_FLAG, nextRandomFloat } from '../util'
import { Cell } from '../engine'
import { RULE_DIRECTION } from '../enums';
import UI from '../ui'
import { AbstractCommand } from './command';
import { CollisionLayer } from './collisionLayer';

const MAX_ITERATIONS_IN_LOOP = 350 // Set by the Random World Generation game

enum RULE_COMMAND {
    AGAIN = 'AGAIN'
}

export const SIMPLE_DIRECTION_DIRECTIONS = [
    RULE_DIRECTION.RIGHT,
    RULE_DIRECTION.DOWN,
    RULE_DIRECTION.LEFT,
    RULE_DIRECTION.UP
]

function opposite(dir: RULE_DIRECTION_ABSOLUTE) {
    switch (dir) {
        case RULE_DIRECTION_ABSOLUTE.UP:
            return RULE_DIRECTION_ABSOLUTE.DOWN
        case RULE_DIRECTION_ABSOLUTE.DOWN:
            return RULE_DIRECTION_ABSOLUTE.UP
        case RULE_DIRECTION_ABSOLUTE.LEFT:
            return RULE_DIRECTION_ABSOLUTE.RIGHT
        case RULE_DIRECTION_ABSOLUTE.RIGHT:
            return RULE_DIRECTION_ABSOLUTE.LEFT
        default:
            throw new Error(`BUG: Invalid direction: "${dir}"`)
    }
}

export class SimpleRuleGroup extends BaseForLines implements IRule {
    _rules: IRule[]
    _isRandom: boolean
    constructor(source: IGameCode, isRandom: boolean, rules: IRule[]) {
        super(source)
        this._isRandom = isRandom
        this._rules = rules
        // Clear the "Random" bit from individual rules if they are part of a Rule
        if (this.isRandom()) {
            for (const rule of this._rules) {
                rule.clearRandomFlag()
            }
        }
    }

    canEvaluate() {
        for (const rule of this._rules) {
            if (rule.canEvaluate()) {
                return true
            }
        }
        return false
    }
    evaluate() {
        let randomFloat
        if (this.isRandom()) {
            randomFloat = nextRandomFloat()
        }

        // Keep looping as long as one of the rules evaluated something
        const allMutations: IMutation[][] = []
        for (let iteration = 0; iteration < MAX_ITERATIONS_IN_LOOP; iteration++) {
            if (process.env['NODE_ENV'] !== 'production' && iteration === MAX_ITERATIONS_IN_LOOP - 10) {
                // Provide a breakpoint just before we run out of MAX_ITERATIONS_IN_LOOP
                // so that we can step through the evaluations.
                console.error(this.toString())
                console.error('BUG: Iterated too many times in startloop or + (rule group)')
                UI.debugRenderScreen(); debugger
            }
            if (iteration === MAX_ITERATIONS_IN_LOOP - 1) {
                console.error(this.toString())
                throw new Error(`BUG: Iterated too many times in startloop or + (rule group)`)
            }
            let rulesToEvaluate
            if (this.isRandom()) {
                // Randomly pick one of the rules. I wonder if it needs to be smart
                // It is important that it only be evaluated once (hence the returns)
                const evaluatableRules = this._rules.filter(r => r.canEvaluate())
                if (evaluatableRules.length === 0) {
                    return []
                } else if (evaluatableRules.length === 1) {
                    const ret = evaluatableRules[0].evaluate()
                    return ret
                } else {
                    const randomIndex = nextRandom(evaluatableRules.length)
                    const rule = evaluatableRules[randomIndex]
                    const ret = rule.evaluate()
                    return ret
                }
            } else {
                let evaluatedSomething = false
                for (const rule of this._rules) {
                    // Keep evaluating the rule until nothing changes
                    const ret = rule.evaluate()
                    if (ret.length > 0) {
                        // filter because a Rule may have caused only command mutations
                        if (ret.filter(m => m.hasCell()).length > 0) {
                            evaluatedSomething = true
                        }
                        allMutations.push(ret)
                    }
                }
                if (!evaluatedSomething) {
                    break
                }
            }

        }
        return _.flatten(allMutations)


        // let mutations = []
        // for (const rule of this._rules) {
        //     const ret = rule.evaluate()
        //     if (ret.length > 0) {
        //         mutations = mutations.concat(ret)
        //     }
        // }
        // return mutations
    }

    clearCaches() {
        for (const rule of this._rules) {
            rule.clearCaches()
        }
    }

    getChildRules() {
        return this._rules
    }

    isLate() {
        // All rules in a group should be parked as late if any is marked as late
        return this._rules[0].isLate()
    }
    isRigid() {
        return this._rules[0].isRigid()
    }
    isRandom() {
        return this._isRandom
    }

    clearRandomFlag() {
        this._isRandom = false
        for (const rule of this._rules) {
            rule.clearRandomFlag()
        }
    }
    addCellsToEmptyRules(cells: Iterable<Cell>) {
        for (const rule of this._rules) {
            rule.addCellsToEmptyRules(cells)
        }
    }
}

class SimpleRuleLoop extends SimpleRuleGroup {
    isRandom() {
        return false
    }
}

// This is a rule that has been expanded from `DOWN [ > player < cat RIGHT dog ] -> [ ^ crate ]` to:
// DOWN [ DOWN player UP cat RIGHT dog ] -> [ RIGHT crate ]
//
// And a more complicated example:
// DOWN [ > player LEFT cat HORIZONTAL dog < crate VERTICAL wall ] -> [ ^ crate  HORIZONTAL dog ]
//
// DOWN [ DOWN player LEFT cat LEFT dog UP crate UP wall ] -> [ right crate LEFT dog ]
// DOWN [ DOWN player LEFT cat LEFT dog UP crate DOWN wall ] -> [ right crate LEFT dog ]
// DOWN [ DOWN player LEFT cat RIGHT dog UP crate UP wall ] -> [ RIGHT crate RIGHT dog ]
// DOWN [ DOWN player LEFT cat RIGHT dog UP crate DOWN wall ] -> [ RIGHT crate RIGHT dog ]
export class SimpleRule extends BaseForLines implements ICacheable, IRule {
    _evaluationDirection: RULE_DIRECTION_ABSOLUTE
    _conditionBrackets: SimpleBracket[]
    _actionBrackets: SimpleBracket[]
    _commands: AbstractCommand[]
    _isLate: boolean
    _isRigid: boolean
    _isRandom: boolean
    _isSubscribedToCellChanges: boolean
    _debugFlag: DEBUG_FLAG
    _doesEvaluationOrderMatter: boolean
    _isOnlyEvaluatingFirstRandomMatch: boolean
    constructor(source: IGameCode, evaluationDirection: RULE_DIRECTION_ABSOLUTE, conditionBrackets: SimpleBracket[], actionBrackets: SimpleBracket[], commands: AbstractCommand[], isLate: boolean, isRigid: boolean, isRandom: boolean, debugFlag: DEBUG_FLAG, doesEvaluationOrderMatter: boolean) {
        super(source)
        this._evaluationDirection = evaluationDirection
        this._conditionBrackets = conditionBrackets
        this._actionBrackets = actionBrackets
        this._commands = commands
        this._isLate = isLate
        this._isRigid = isRigid
        this._isRandom = isRandom
        this._debugFlag = debugFlag
        this._doesEvaluationOrderMatter = doesEvaluationOrderMatter
        this._isOnlyEvaluatingFirstRandomMatch = isRandom && this._conditionBrackets[0]._neighbors[0]._tilesWithModifier.size === 0 // Special-case this to only be rules that have an empty condition (Garten de Medusen) // false //this._isRandom (sometimes turning it on causes )

        if (actionBrackets.length > 0) {
            for (let index = 0; index < conditionBrackets.length; index++) {
                conditionBrackets[index].prepareAction(actionBrackets[index])
            }
        }
    }
    toKey() {
        return `{Late?${this._isLate}}{Rigid?${this._isRigid}} ${this._evaluationDirection} ${this._conditionBrackets.map(x => x.toKey())} -> ${this._actionBrackets.map(x => x.toKey())} ${this._commands.join(' ')} {debugger?${this._debugFlag}}`
    }
    getChildRules() {
        return []
    }
    subscribeToCellChanges() {
        if (!this._isSubscribedToCellChanges) {
            // Subscribe the bracket and neighbors to cell Changes (only the condition side)
            for (const bracket of this._conditionBrackets) {
                bracket.subscribeToNeighborChanges()
                for (const neighbor of bracket._neighbors) {
                    neighbor.subscribeToTileChanges()
                    for (const t of neighbor._tilesWithModifier) {
                        t.subscribeToCellChanges()
                    }
                }
            }
            this._isSubscribedToCellChanges = true
        }
    }

    clearCaches() {
        for (const bracket of this._conditionBrackets) {
            bracket.clearCaches()
        }
    }

    canEvaluate() {
        // Verify that each condition bracket has matches
        for (const condition of this._conditionBrackets) {
            if (condition.getFirstCells().size == 0) {
                return false
            }
        }
        return true
    }
    evaluate() {
        const allMutations: IMutation[][] = []
        // Keep evaluating the rule until nothing changes
        let innerEvaluatedSomething = false
        let innerIteration
        for (innerIteration = 0; innerIteration < MAX_ITERATIONS_IN_LOOP; innerIteration++) {
            if (process.env['NODE_ENV'] !== 'production' && innerIteration === MAX_ITERATIONS_IN_LOOP - 10) {
                // Provide a breakpoint just before we run out of MAX_ITERATIONS_IN_LOOP
                // so that we can step through the evaluations.
                UI.debugRenderScreen(); debugger
            }
            if (innerIteration === MAX_ITERATIONS_IN_LOOP - 1) {
                throw new Error(`BUG: Iterated too many times in rule or rule group\n${this.toString()}`)
            }
            const ret = this._evaluate()
            // Only evaluate once. This is a HACK since it always picks the 1st cell that matched rather than a RANDOM cell
            if (this._isOnlyEvaluatingFirstRandomMatch) {
                return ret
            }
            if (ret.length > 0) {
                allMutations.push(ret)
                // filter because a Rule may have caused only command mutations
                if (ret.filter(m => m.hasCell()).length > 0) {
                    innerEvaluatedSomething = true
                } else {
                    break
                }
            } else {
                break
            }
        }
        const flattenedMutations = _.flatten(allMutations)
        if (flattenedMutations.length > 0) {
            // Check if direction is important
            let isDirectionImportant = false
            for (const bracket of this._conditionBrackets) {
                if (bracket._neighbors.length > 1) {
                    isDirectionImportant = true
                }
            }
            if (process.env['LOG_LEVEL'] === 'debug') {
                console.error(`Rule ${this.__getSourceLineAndColumn().lineNum} ${isDirectionImportant ? this._evaluationDirection.toLowerCase() + ' ' : ''}applied.${innerIteration > 2 ? ` (x${innerIteration-1})` : ''}`)
            }
        }

        return flattenedMutations
    }
    _evaluate() {
        if (this._isRigid) {
            // TODO: Just commands are not supported yet
            return []
        }

        // Verify that each condition bracket has matches
        for (const condition of this._conditionBrackets) {
            if (condition.getFirstCells().size == 0) {
                if (process.env['NODE_ENV'] !== 'production' && this._debugFlag === DEBUG_FLAG.BREAKPOINT_REMOVE) {
                    // A "DEBUGGER_REMOVE" flag was set in the game so we are pausing here
                    UI.debugRenderScreen(); debugger
                }
                return [] // Rule did not match, so nothing ran
            }
        }

        // If a Rule cannot impact itself then the evaluation order does not matter.
        // We can vastly simplify the evaluation in that case
        let ret: IMutation[] = []
        // Some rules only contain commands.
        // If there are actionBrackets then evaluate them.
        if (this._actionBrackets.length > 0) {
            if (!this._doesEvaluationOrderMatter/*this._conditionBrackets.length === 1 && this._conditionBrackets[0]._neighbors.length === 1*/) {

                // Get ready to Evaluate
                if (process.env['NODE_ENV'] !== 'production' && this._debugFlag === DEBUG_FLAG.BREAKPOINT) {
                    // A "DEBUGGER" flag was set in the game so we are pausing here
                    UI.debugRenderScreen(); debugger
                }

                const allMutations: IMutation[][] = []
                for (let index = 0; index < this._conditionBrackets.length; index++) {
                    const condition = this._conditionBrackets[index]
                    const action = this._actionBrackets[index]
                    const magicOrTiles = new Map()
                    for (const cell of condition.getFirstCells()) {
                        allMutations.push(condition.evaluate(action, cell, magicOrTiles))

                        // Only evaluate once. This is a HACK since it always picks the 1st cell that matched rather than a RANDOM cell
                        if (this._isOnlyEvaluatingFirstRandomMatch) {
                            return _.flatten(allMutations)
                        }
                    }

                    if (process.env['NODE_ENV'] !== 'production') {
                        this.__coverageCount++
                    }

                }
                ret = _.flatten(allMutations)
            } else {
                const startTime = Date.now()
                ret = this.evaluateInOrder()
                // console.log('SLLLLLOOOOOOWWWWW EVALUATION.........');
                // console.log(this.toString())
                // console.log('Evaluation took', Date.now() - startTime)
            }
        }

        // Append any Commands that need to be evaluated
        for (const command of this._commands) {
            ret.push(new CommandMutation(command))
        }
        return ret
    }

    evaluateInOrder() {
        let allMutators: IMutation[][] = []

        // Remember which cells we apready processed
        // Entries are cell.toString() so we do not have to reprocess `[ > Player ] -> [ Player Color ]`
        // TODO: Needs to be an Array so we can reprocess a cell in a different bracket
        const alreadyProcessed: Set<string>[] = []
        for (let index = 0; index < this._conditionBrackets.length; index++) {
            alreadyProcessed[index] = new Set()
        }

        let somethingChanged
        do {
            somethingChanged = false

            // check that all the bracketCells have at least one match
            let bracketCellsDouble: Cell[][] = []
            for (let index = 0; index < this._conditionBrackets.length; index++) {
                function sortByPos(cells: Set<Cell>) {
                    return [...cells]
                        // Exclude cells we have already processed
                        // .filter(cell => !alreadyProcessed.has(cell.toString()))
                        .sort((a, b) => {
                            // if (a.rowIndex < b.rowIndex) {
                            //     return -1
                            // } else if (a.rowIndex > b.rowIndex) {
                            //     return 1
                            // } else {
                            //     if (a.colIndex < b.colIndex) {
                            //         return -1
                            //     } else if (a.colIndex > b.colIndex) {
                            //         return 1
                            //     } else {
                            //         throw new Error(`BUG: We seem to be comparing the same cell`)
                            //     }
                            // }
                            return a.rowIndex - b.rowIndex || a.colIndex - b.colIndex
                        })

                }
                const conditionCells = sortByPos(this._conditionBrackets[index].getFirstCells())
                if (conditionCells.length > 0) {
                    bracketCellsDouble.push(conditionCells)
                } else {
                    break
                }
            }

            // If every bracket matched, at least 1 cell then let's start evaluating
            if (bracketCellsDouble.length === this._conditionBrackets.length) {

                // Cull bracketCellsDouble to only contain cells we have not already processed
                for (let index = 0; index < bracketCellsDouble.length; index++) {
                    bracketCellsDouble[index] = bracketCellsDouble[index].filter(cell => !alreadyProcessed[index].has(cell.toString()))
                }

                // Get ready to Evaluate
                if (process.env['NODE_ENV'] !== 'production' && this._debugFlag === DEBUG_FLAG.BREAKPOINT) {
                    // A "DEBUGGER" flag was set in the game so we are pausing here
                    UI.debugRenderScreen(); debugger
                }

                let hasMoreCells
                do {
                    hasMoreCells = true

                    // Decide which cell from each bracket to evaluate.
                    // Some may have already been evaluated but we need to keep them
                    // Around so we know that something matches

                    // This will be used to store the sprites that are in an OR tile.
                    // Example: `[ Color ] [ Player ] -> [ ] [ Player Color ]`
                    const magicOrTiles = new Map<IGameTile, Set<GameSprite>>()
                    for (let index = 0; index < this._conditionBrackets.length; index++) {
                        const bracket = this._conditionBrackets[index]

                        // If the bracket no longer matches anything then we are done evaluating this rule
                        // e.g. `[ Color ] [ Player NO Color ] -> [ ] [ Player Color ]`
                        if (bracket.getFirstCells().size === 0) {
                            hasMoreCells = false
                            break
                        }

                        const cell = bracketCellsDouble[index]
                            .filter(cell => !alreadyProcessed[index].has(cell.toString()))
                            // Make sure the cell still matches (could have been updated. See BeamIslands background tiles that check right)
                            .filter(cell => bracket.getFirstCells().has(cell))[0]
                        // if (!cell || !bracket.getFirstCells().has(cell)) {
                        //     hasMoreCells = false
                        //     break
                        // }
                        if (cell) {
                            bracket.populateMagicOrTiles(cell, magicOrTiles)
                        } else {
                            hasMoreCells = false
                            break
                        }
                    }
                    // If not all brackets match a cell then break out
                    // TODO: Might need to test if the cell is still one of the firstCells in the bracket above
                    if (!hasMoreCells) {
                        break
                    }

                    // Evaluate!
                    // const cellsToMarkAsProcessed = []
                    let emptyCellsCount = 0
                    for (let index = 0; index < this._conditionBrackets.length; index++) {
                        const bracket = this._conditionBrackets[index]
                        const actionBracket = this._actionBrackets[index]
                        const cell = bracketCellsDouble[index]
                            .filter(cell => !alreadyProcessed[index].has(cell.toString()))
                            // Make sure the cell still matches (could have been updated. See BeamIslands background tiles that check right)
                            .filter(cell => bracket.getFirstCells().has(cell))[0]
                        if (!cell) {
                            emptyCellsCount++
                            continue
                        }
                        const mutations = bracket.evaluate(actionBracket, cell, magicOrTiles)

                        if (process.env['NODE_ENV'] !== 'production') {
                            this.__coverageCount++
                        }

                        // If at least one modifier changedSprites then somethingChanged = true
                        let someSpriteChanged = false
                        for (const mutation of mutations) {
                            somethingChanged = true // could have just been a direction
                            if (mutation.getDidSpritesChange()) {
                                someSpriteChanged = true
                            }
                        }
                        if (someSpriteChanged) {
                            somethingChanged = true
                            // } else if (!alreadyProcessed[index].has(cell)) {
                            // somethingChanged = true
                        } else {
                            // nothing changed... somethingChanged = false
                        }
                        alreadyProcessed[index].add(cell.toString())
                        allMutators.push(mutations)
                    }

                    // Only evaluate once. This is a HACK since it always picks the 1st cell that matched rather than a RANDOM cell
                    if (this._isOnlyEvaluatingFirstRandomMatch) {
                        return _.flatten(allMutators)
                    }


                    if (emptyCellsCount === this._conditionBrackets.length) {
                        hasMoreCells = false
                    }

                    // If at least one of the brackets changed, then keep going.
                    // For example: `[ > Player ] [ Island ] -> [ > Player ] [ > Island ]`
                } while (hasMoreCells)
            }

        } while (somethingChanged)

        return _.flatten(allMutators)
    }
    isLate() { return this._isLate }
    isRigid() { return this._isRigid }
    isRandom() { return this._isRandom }

    clearRandomFlag() {
        this._isRandom = false
    }

    addCellsToEmptyRules(cells: Iterable<Cell>) {
        for (const bracket of this._conditionBrackets) {
            if (bracket._neighbors.length === 1) {
                if (bracket._neighbors[0]._tilesWithModifier.size === 0) {
                    for (const cell of cells) {
                        bracket._addFirstCell(cell)
                    }
                }
            }
        }
    }

}

class SimpleBracket extends BaseForLines implements ICacheable {
    _direction: RULE_DIRECTION_ABSOLUTE
    _neighbors: SimpleNeighbor[]
    _firstCells: Set<Cell>
    _debugFlag: DEBUG_FLAG
    _actionDebugFlag: DEBUG_FLAG
    _hasEllipsis: boolean
    constructor(source: IGameCode, direction: RULE_DIRECTION_ABSOLUTE, neighbors: SimpleNeighbor[], hasEllipsis: boolean, debugFlag: DEBUG_FLAG) {
        super(source)
        this._direction = direction
        this._neighbors = neighbors
        this._firstCells = new Set()
        this._debugFlag = debugFlag
        this._hasEllipsis = hasEllipsis
    }
    toKey() {
        return `{${this._direction}[${this._neighbors.map(n => n.toKey()).join('|')}]{debugging?${this._debugFlag}}}`
    }

    subscribeToNeighborChanges() {
        this._neighbors.forEach((neighbor, index) => {
            neighbor.addBracket(this, index)
        })
    }

    clearCaches() {
        this._firstCells.clear()
        for (const neighbor of this._neighbors) {
            neighbor.clearCaches()
        }
    }

    getFirstCells() {
        return this._firstCells
    }

    prepareAction(actionBracket: SimpleBracket) {
        this._actionDebugFlag = actionBracket._debugFlag
        for (let index = 0; index < this._neighbors.length; index++) {
            const condition = this._neighbors[index]
            const action = actionBracket._neighbors[index]
            condition.prepareAction(action)
        }
    }

    evaluate(actionBracket: SimpleBracket, cell: Cell, magicOrTiles: Map<IGameTile, Set<GameSprite>>) {
        if (process.env['NODE_ENV'] !== 'production' && this._actionDebugFlag === DEBUG_FLAG.BREAKPOINT) {
            UI.debugRenderScreen(); debugger // pausing here because it is in the code
        }
        if (this._hasEllipsis) {
            return []
        }
        const ret: IMutation[] = []
        let curCell = cell
        let index = 0
        for (const neighbor of this._neighbors) {
            const actionNeighbor = actionBracket._neighbors[index]
            const mutation = neighbor.evaluate(actionNeighbor, curCell, magicOrTiles)
            if (mutation) {
                ret.push(mutation)
            }
            curCell = curCell.getNeighbor(this._direction)
            index++
        }
        return ret
    }

    populateMagicOrTiles(cell: Cell, magicOrTiles: Map<IGameTile, Set<GameSprite>>) {
        let curCell = cell
        for (const neighbor of this._neighbors) {
            neighbor.populateMagicOrTiles(curCell, magicOrTiles)
            curCell = curCell.getNeighbor(this._direction)
        }
    }

    _addFirstCell(firstCell: Cell) {
        if (process.env['NODE_ENV'] !== 'production' && this._debugFlag === DEBUG_FLAG.BREAKPOINT) {
            // Pausing here because it was marked in the code
            UI.debugRenderScreen(); debugger
        }
        this._firstCells.add(firstCell)
    }

    _removeFirstCell(firstCell: Cell) {
        if (this._firstCells.has(firstCell)) {
            if (process.env['NODE_ENV'] !== 'production' && this._debugFlag === DEBUG_FLAG.BREAKPOINT_REMOVE) {
                // Pausing here because it was marked in the code
                UI.debugRenderScreen(); debugger
            }
            this._firstCells.delete(firstCell)
        }
    }

    addCell(index: number, neighbor: SimpleNeighbor, t: SimpleTileWithModifier, sprite: GameSprite, cell: Cell, wantsToMove: RULE_DIRECTION_ABSOLUTE) {
        // check if downstream neighbors match
        if (!this.matchesDownstream(cell, index)) {
            // Try to remove the match if there is one
            const firstCell = this.getUpstream(cell, index)
            if (firstCell) {
                this._removeFirstCell(cell)
            }
            return
        }
        // Loop Upstream
        // check the neighbors upstream of curCell
        const firstCell = this.matchesUpstream(cell, index)
        if (!firstCell) {
            // Try to remove the match if there is one
            const firstCell = this.getUpstream(cell, index)
            if (firstCell) {
                this._removeFirstCell(firstCell)
            }
            return
        }

        // Add to the set of firstNeighbors
        // We have a match. Add to the firstCells set.
        this._addFirstCell(firstCell)
    }
    // updateCell(neighbor: SimpleNeighbor, t: SimpleTileWithModifier, sprite: GameSprite, cell: Cell, wantsToMove: RULE_DIRECTION_ABSOLUTE) {
    //     this.updateCellOld(cell, sprite, t, neighbor, wantsToMove, true)
    // }
    removeCell(index: number, neighbor: SimpleNeighbor, t: SimpleTileWithModifier, sprite: GameSprite, cell: Cell) {
        // cell was removed
        // Loop Upstream
        const firstCell = this.getFirstCellToRemove(cell, index)
        // Bracket might not match for all directions (likely not), so we might not find a firstCell to remove
        // But that's OK.
        if (firstCell && this._firstCells.has(firstCell)) {
            this._removeFirstCell(firstCell)
        }
    }

    matchesDownstream(cell: Cell, index: number) {
        // Check all the neighbors and add the firstNeighbor to the set of matches for this direction
        let matched = true
        let curCell = cell
        // Loop Downstream
        // check the neighbors downstream of curCell
        for (let x = index + 1; x < this._neighbors.length; x++) {
            curCell = curCell.getNeighbor(this._direction)
            // TODO: Convert the neighbor check into a method
            if (curCell && (this._neighbors[x]._tilesWithModifier.size === 0 || this._neighbors[x].matchesCellSimple(curCell))) {
                // keep going
            } else {
                matched = false
                break
            }
        }
        return matched
    }

    getUpstream(cell: Cell, index: number) {
        let curCell = cell
        for (let x = index - 1; x >= 0; x--) {
            curCell = curCell.getNeighbor(opposite(this._direction))
            if (curCell) {
                // keep going
            } else {
                return null
            }
        }
        return curCell
    }

    matchesUpstream(cell: Cell, index: number) {
        let matched = true
        let curCell = cell
        // check the neighbors upstream of curCell
        for (let x = index - 1; x >= 0; x--) {
            curCell = curCell.getNeighbor(opposite(this._direction))
            if (curCell && (this._neighbors[x]._tilesWithModifier.size === 0 || this._neighbors[x].matchesCellSimple(curCell))) {
                // keep going
            } else {
                matched = false
                break
            }
        }
        return matched ? curCell : null
    }

    getFirstCellToRemove(cell: Cell, index: number) {
        // Loop Upstream
        // check the neighbors upstream of curCell
        let matched = true
        let curCell = cell
        // check the neighbors upstream of curCell
        for (let x = index - 1; x >= 0; x--) {
            curCell = curCell.getNeighbor(opposite(this._direction))
            if (curCell) {
                // keep going
            } else {
                matched = false
                break
            }
        }
        return matched ? curCell : null
    }
}

class SimpleBracketConditionOnly extends SimpleBracket {
    evaluate() {
        return []
    }
}

class ReplaceTile {
    collisionLayer: CollisionLayer
    actionTileWithModifier: SimpleTileWithModifier
    mightNotFindConditionButThatIsOk: boolean
    conditionSpritesToRemove: SimpleTileWithModifier
    constructor(collisionLayer: CollisionLayer, actionTileWithModifier: SimpleTileWithModifier, mightNotFindConditionButThatIsOk: boolean, conditionSpritesToRemove?: SimpleTileWithModifier) {
        if (!collisionLayer) {
            throw new Error('BUG: collisionLayer is not set')
        }
        this.collisionLayer = collisionLayer
        this.actionTileWithModifier = actionTileWithModifier
        this.mightNotFindConditionButThatIsOk = mightNotFindConditionButThatIsOk
        this.conditionSpritesToRemove = conditionSpritesToRemove
    }
    replace(cell: Cell, magicOrTiles: Map<IGameTile, Set<GameSprite>>) {
        let oldSprite
        let didActuallyChange = false
        // Check if we are adding or removing....
        if (this.actionTileWithModifier) {
            // adding

            let sprites: Iterable<GameSprite> = null
            // if RANDOM is set then pick a random sprite to add
            if (this.actionTileWithModifier.isRandom()) {
                const spritesToChoose = this.actionTileWithModifier._tile.getSprites()
                const rnd = nextRandom(spritesToChoose.length)
                sprites = [spritesToChoose[rnd]]
            } else if (this.actionTileWithModifier._tile.isOr()) {
                // There is no sprite of this type already in the cell. It's in the magicOrTiles
                if (!magicOrTiles.has(this.actionTileWithModifier._tile)) {
                    debugger
                    console.log(this.actionTileWithModifier.toString())
                    throw new Error(`BUG: Magic OR tile not found`)
                }
                sprites = magicOrTiles.get(this.actionTileWithModifier._tile)
            } else {
                sprites = this.actionTileWithModifier._tile.getSprites()
            }
            for (const sprite of sprites) {
                const c = sprite.getCollisionLayer()
                const added = cell.addSprite(sprite, cell.getWantsToMoveByCollisionLayer(c)) // preserve the wantsToMove if the sprite is in the same collision layer
                didActuallyChange = didActuallyChange || added
            }
        } else {
            // removing
            const tile = cell.getSpriteByCollisionLayer(this.collisionLayer)
            if (!tile && this.mightNotFindConditionButThatIsOk) {
                // this occurs when there is just a -> [ NO Color ] on the action side (remove color if it exists)
                return {actuallyDidChange: false}
            }
            if (!tile) {
                debugger
            }
            if (this.conditionSpritesToRemove) {
                // only remove the sprites in the cell that match the condition... not all the sprites in a collisionLayer
                const conditionSpritesToRemove = new Set(this.conditionSpritesToRemove._tile.getSprites())
                for (const sprite of tile.getSprites()) {
                    if (conditionSpritesToRemove.has(sprite)) {
                        const removed = cell.removeSprite(sprite)
                        didActuallyChange = didActuallyChange || removed
                    }
                }

            } else {
                // remove all sprites
                for (const sprite of tile.getSprites()) {
                    const removed = cell.removeSprite(sprite)
                    didActuallyChange = didActuallyChange || removed
                }
            }
        }
        // return the oldSprite for UNDO
        return {
            didActuallyChange
        }
    }
}

class ReplaceDirection {
    collisionLayer: CollisionLayer
    direction: RULE_DIRECTION_ABSOLUTE
    mightNotFindConditionButThatIsOk: boolean
    constructor(collisionLayer: CollisionLayer, direction: RULE_DIRECTION_ABSOLUTE, mightNotFindConditionButThatIsOk: boolean) {
        if (!collisionLayer) {
            throw new Error('BUG: collisionLayer is not set')
        }
        this.collisionLayer = collisionLayer
        this.direction = direction
        this.mightNotFindConditionButThatIsOk = mightNotFindConditionButThatIsOk
    }
    replace(cell: Cell) {
        let direction = this.direction
        // It's OK if this sprite is not in the condition. This happens when an OR action tile has sprites that are in multiple collision layers
        if (this.mightNotFindConditionButThatIsOk && !cell.getSpriteByCollisionLayer(this.collisionLayer)) {
            return false
        }

        // Pick a random direction
        if (this.direction === RULE_DIRECTION_ABSOLUTE.RANDOMDIR) {
            // only set the direction if one has not already been set
            if (cell.getWantsToMoveByCollisionLayer(this.collisionLayer) === RULE_DIRECTION_ABSOLUTE.STATIONARY) {
                switch (nextRandom(4)) {
                    case 0:
                        direction = RULE_DIRECTION_ABSOLUTE.UP
                        break
                    case 1:
                        direction = RULE_DIRECTION_ABSOLUTE.DOWN
                        break
                    case 2:
                        direction = RULE_DIRECTION_ABSOLUTE.LEFT
                        break
                    case 3:
                        direction = RULE_DIRECTION_ABSOLUTE.RIGHT
                        break
                    default:
                        throw new Error(`BUG: invalid random number chosen`)
                }
            } else {
                // a direction was already set
                return false
            }
        }
        if (direction) {
            return cell.setWantsToMoveCollisionLayer(this.collisionLayer, direction)
        } else {
            return false
        }
    }
}


class SimpleNeighbor extends BaseForLines implements ICacheable {
    _tilesWithModifier: Set<SimpleTileWithModifier>
    _brackets: Map<SimpleBracket, Set<number>>
    // _localCellCache: Map<Cell, Set<GameSprite>>
    _debugFlag: DEBUG_FLAG

    _staticCache: Map<SimpleNeighbor, {replaceTiles: Set<ReplaceTile>, replaceDirections: Set<ReplaceDirection>}>
    _cacheYesBitSets: Map<CollisionLayer, BitSet>
    _cacheNoBitSets: Map<CollisionLayer, BitSet>
    _cacheDirections: Map<CollisionLayer, RULE_DIRECTION_ABSOLUTE>
    _cacheMultiCollisionLayerTiles: Set<SimpleTileWithModifier>

    constructor(source: IGameCode, tilesWithModifier: Set<SimpleTileWithModifier>, debugFlag: DEBUG_FLAG) {
        super(source)
        this._tilesWithModifier = tilesWithModifier
        this._brackets = new Map()
        // this._localCellCache = new Map()
        this._debugFlag = debugFlag

        this._staticCache = new Map()

        // Build up the cache BitSet for each collisionLayer
        this._cacheYesBitSets = new Map()
        this._cacheNoBitSets = new Map()
        this._cacheDirections = new Map()
        this._cacheMultiCollisionLayerTiles = new Set()
        const allTiles = [...tilesWithModifier]
        const noTiles = allTiles.filter(t => t.isNo())
        const yesTiles = allTiles.filter(t => !t.isNo())

        for (const t of yesTiles) {
            if (!t._tile) {
                continue // ellipsis
            } else if (t._tile.hasSingleCollisionLayer()) {
                for (const sprite of t._tile.getSprites()) {
                    const c = sprite.getCollisionLayer()
                    if (t._direction) {
                        this._cacheDirections.set(c, t._direction)
                    }
                    if (!this._cacheYesBitSets.has(c)) {
                        this._cacheYesBitSets.set(c, new BitSet())
                    }
                    this._cacheYesBitSets.get(c).set(c.getBitSetIndexOf(sprite))
                }
            } else {
                this._cacheMultiCollisionLayerTiles.add(t)
            }
        }

        for (const t of noTiles) {
            if (t._tile.hasSingleCollisionLayer()) {
                for (const sprite of t._tile.getSprites()) {
                    const c = sprite.getCollisionLayer()
                    if (t._direction) {
                        this._cacheDirections.set(c, t._direction)
                    }
                    if (!this._cacheNoBitSets.has(c)) {
                        this._cacheNoBitSets.set(c, new BitSet())
                    }
                    this._cacheNoBitSets.get(c).set(c.getBitSetIndexOf(sprite))
                }
            } else {
                this._cacheMultiCollisionLayerTiles.add(t)
            }
        }

        // NOTE: BitSets can be empty. Especially when checking that a Cell does NOT contain a sprite
        // for (const [collisionLayer, bitSet] of this._cacheBitSets) {
        //     if (bitSet.isEmpty()) {
        //         throw new Error(`BUG: BitSets should never be empty. "${bitSet.toString()}"`)
        //     }
        // }

    }
    toKey() {
        return `{${[...this._tilesWithModifier].map(t => t.toKey()).sort().join(' ')} debugging?${this._debugFlag}}`
    }

    prepareAction(actionNeighbor: SimpleNeighbor) {
        if (process.env['NODE_ENV'] !== 'production' && actionNeighbor._debugFlag === DEBUG_FLAG.BREAKPOINT) {
            // Pausing here because this breakpoint was marked in the game code
            debugger
        }

        if (this._staticCache.has(actionNeighbor)) {
            return
        }

        // Compute the Mutators on-the-fly for now....
        const pairsByCollisionLayer = new Map<CollisionLayer, ExtraPair<SimpleTileWithModifier>>()
        const orTiles = new Map<IGameTile, SimpleTileWithModifier>()
        for (const t of this._tilesWithModifier) {
            if (t._tile.isOr() && !t._tile.hasSingleCollisionLayer()) {
                if (!t.isNo()) {
                    orTiles.set(t._tile, t)
                }
            } else {
                // AND Tiles can have multiple collisionLayers too...
                if (t._tile.hasSingleCollisionLayer()) {
                    const c = t._tile.getCollisionLayer()
                    if (!c) {
                        console.log(t._tile.toString())
                        throw new Error(`BUG: Tile is not assigned to a collision layer`)
                    }
                    // If we have something like `[Player NO PlayerHold] -> ...` then keep the Player, not the PlayerHold
                    if (pairsByCollisionLayer.has(c)) {
                        // Determine whether to keep the 1st match or the current one.
                        // If the current one is a NO tile then definitely do not replace it.
                        // Maybe the correct thing to do is to always keep the 1st thing put in
                        // if (!t.isNo()) {
                        //     pairsByCollisionLayer.set(c, new ExtraPair<SimpleTileWithModifier>(t, null/*filled in later if there is an action*/, false/*okToIgnoreNonMatches*/))
                        // }
                    } else {
                        pairsByCollisionLayer.set(c, new ExtraPair<SimpleTileWithModifier>(t, null/*filled in later if there is an action*/, false/*okToIgnoreNonMatches*/))
                    }
                } else {
                    // loop over each collisionLayer
                    for (const sprite of t._tile.getSprites()) {
                        const c = sprite.getCollisionLayer()
                        if (!pairsByCollisionLayer.has(c)) {
                            // TODO: Should we ues the whole tileWithModifier or create a new one out of the sprite?
                            pairsByCollisionLayer.set(c, new ExtraPair<SimpleTileWithModifier>(t, null/*filled in later if there is an action*/, false/*okToIgnoreNonMatches*/))
                        }
                    }
                }
            }
        }

        // First just pair up all the conditions and actions (keep the negations)
        // Then, remove all negations
        // Then, build the ReplaceTile and ReplaceDirections
        const unmatchedOrTiles = new Map(orTiles.entries())
        for (const t of actionNeighbor._tilesWithModifier) {
            if (t._tile.isOr() && !t._tile.hasSingleCollisionLayer()) {
                // OR tiles may belong to different collisionlayers so... it's complicated
                if (orTiles.has(t._tile)) {
                    unmatchedOrTiles.delete(t._tile)
                    // simple case. at most we just change direction
                    const conditionT = orTiles.get(t._tile)
                    if (conditionT._direction !== t._direction) {
                        for (const sprite of t._tile.getSprites()) {
                            const c =  sprite.getCollisionLayer()
                            if (!pairsByCollisionLayer.has(c)) {
                                pairsByCollisionLayer.set(c, new ExtraPair<SimpleTileWithModifier>(
                                    new SimpleTileWithModifier(conditionT.__source, conditionT._isNegated /*since the action side is a NO */, conditionT._isRandom/*isRandom*/, conditionT._direction, sprite, conditionT._debugFlag),
                                    new SimpleTileWithModifier(t.__source, t._isNegated /*since the action side is a NO */, t._isRandom/*isRandom*/, t._direction, sprite, t._debugFlag),
                                    true/*okToIgnoreNonMatches*/))
                            }
                        }
                    }
                } else {
                    if (t.isNo()) {
                        for (const sprite of t._tile.getSprites()) {
                            const c =  sprite.getCollisionLayer()
                            if (pairsByCollisionLayer.has(c)) {
                            } else {
                                pairsByCollisionLayer.set(c, new ExtraPair<SimpleTileWithModifier>(new SimpleTileWithModifier(t.__source, false /*since the action side is a NO */, t._isRandom/*isRandom*/, t._direction, t._tile, t._debugFlag), null, true/*okToIgnoreNonMatches*/))
                            }
                        }
                    } else {
                        for (const sprite of t._tile.getSprites()) {
                            const c =  sprite.getCollisionLayer()
                            if (pairsByCollisionLayer.has(c)) {
                            } else {
                                pairsByCollisionLayer.set(c, new ExtraPair<SimpleTileWithModifier>(null, new SimpleTileWithModifier(t.__source, false /*since the action side is NOT? NO */, t._isRandom/*isRandom*/, t._direction, t._tile, t._debugFlag), true/*okToIgnoreNonMatches*/))
                            }
                        }
                    }
                }
            } else {
                for (const c of t.getCollisionLayers()) {
                    if (!c) {
                        console.log(t._tile.toString())
                        throw new Error(`BUG: Tile is not assigned to a collision layer`)
                    }
                    // if the condition is the same as the action then it's a no-op and we can remove the code
                    const conditionVersion = (pairsByCollisionLayer.has(c) && pairsByCollisionLayer.get(c).condition) || null
                    if (conditionVersion && conditionVersion.equals(t)) {
                        // condition and action are the same. No need to add a Pair
                        pairsByCollisionLayer.delete(c)
                    } else {
                        if (t.isNo()) {
                            // set it to be null (removed)
                            if (pairsByCollisionLayer.has(c)) {
                                // just leave the action side as null (so it's removed)
                                if (pairsByCollisionLayer.get(c).condition === t) {
                                    // remove if both the condition and action are the same
                                    pairsByCollisionLayer.delete(c)
                                }
                            } else {
                                // we need to set the condition side to be the tile so that it is removed
                                // (it might not exist in the cell though but that's an optimization for later)
                                pairsByCollisionLayer.set(c, new ExtraPair<SimpleTileWithModifier>(new SimpleTileWithModifier(t.__source, false /*since the action side is a NO */, false/*isRandom*/, t._direction, t._tile, t._debugFlag), null, true/*okToIgnoreNonMatches*/))
                            }
                        } else {
                            if (pairsByCollisionLayer.has(c)) {
                                pairsByCollisionLayer.get(c).action = t
                            } else {
                                pairsByCollisionLayer.set(c, new ExtraPair<SimpleTileWithModifier>(null, t, false/*okToIgnoreNonMatches*/))
                            }
                        }
                    }

                }
            }
        }

        // Any unmatched OR tiles need to be removed from the Cell
        if (unmatchedOrTiles.size > 0) {
            for (const [_, t] of unmatchedOrTiles) {
                for (const sprite of t._tile.getSprites()) {
                    const c = sprite.getCollisionLayer()
                    if (!pairsByCollisionLayer.has(c)) {
                        pairsByCollisionLayer.set(c, new ExtraPair<SimpleTileWithModifier>(new SimpleTileWithModifier(t.__source, false /*since the action side is a NO */, false/*isRandom*/, t._direction, t._tile, t._debugFlag), null, true/*okToIgnoreNonMatches*/))
                    }
                }
            }
        }

        const replaceTiles = new Set<ReplaceTile>()
        const replaceDirections = new Set<ReplaceDirection>()

        for (const [collisionLayer, {condition, action, extra}] of pairsByCollisionLayer.entries()) {
            if (condition && action) {
                if (condition !== action) { // Could be `[ TrolleyFull no CleanDishes] -> [TrolleyEmpty no CleanDishes ]`
                    if (!condition._tile.equals(action._tile) || condition.isNo()) {
                        replaceTiles.add(new ReplaceTile(collisionLayer, action, extra))
                    }
                    if (condition._direction !== action._direction) {
                        replaceDirections.add(new ReplaceDirection(collisionLayer, action._direction || RULE_DIRECTION_ABSOLUTE.STATIONARY, extra))
                    } else if (condition.isNo()) {
                        replaceDirections.add(new ReplaceDirection(collisionLayer, action._direction || RULE_DIRECTION_ABSOLUTE.STATIONARY, extra))
                    }
                }
            } else if (condition) {
                if (!condition.isNo()) {
                    replaceTiles.add(new ReplaceTile(collisionLayer, null, extra, condition))
                    replaceDirections.add(new ReplaceDirection(collisionLayer, null, extra))
                }
            } else if (action) {
                if (!action.isNo()) {
                    replaceTiles.add(new ReplaceTile(collisionLayer, action, extra))
                    replaceDirections.add(new ReplaceDirection(collisionLayer, action._direction || RULE_DIRECTION_ABSOLUTE.STATIONARY, extra))
                }
            }
        }

        this._staticCache.set(actionNeighbor, {replaceTiles, replaceDirections})
    }

    evaluate(actionNeighbor: SimpleNeighbor, cell: Cell, magicOrTiles: Map<IGameTile, Set<GameSprite>>) {
        if (process.env['NODE_ENV'] !== 'production' && actionNeighbor._debugFlag === DEBUG_FLAG.BREAKPOINT) {
            // Pausing here because this breakpoint was marked in the game code
            UI.debugRenderScreen(); debugger
        }

        if (!this._staticCache.has(actionNeighbor)) {
            throw new Error('BUG: Missing actionNeighbor. Should have been prepared before')
        }
        const {replaceTiles, replaceDirections} = this._staticCache.get(actionNeighbor)

        let didChangeSprites = false
        let didChangeDirection = false
        for (const replaceTile of replaceTiles) {
            const {didActuallyChange} = replaceTile.replace(cell, magicOrTiles)
            didChangeSprites = didChangeSprites || didActuallyChange
        }
        for (const replaceDirection of replaceDirections) {
            const didActuallyChange = replaceDirection.replace(cell)
            didChangeDirection = didChangeDirection || didActuallyChange
        }

        // TODO: Be better about recording when the cell actually updated
        if (didChangeSprites || didChangeDirection) {
            return new CellMutation(cell, didChangeSprites)
        } else {
            return null
        }

    }

    clearCaches() {
        // this._localCellCache.clear()
        for (const t of this._tilesWithModifier) {
            t.clearCaches()
        }
    }

    // set this ahead of time becuase order does not matter when populating the magicOrTiles `[ > Player | Pill ] -> [ Pill OldPos | Player ]`
    populateMagicOrTiles(cell: Cell, magicOrTiles: Map<IGameTile, Set<GameSprite>>) {
        for (const t of this._tilesWithModifier) {
            if (!t.isNo() && t._tile.isOr()) {
                const sprites = setIntersection(new Set(t._tile.getSprites()), cell.getSpritesAsSet())
                magicOrTiles.set(t._tile, sprites)
            }
        }
    }

    addBracket(bracket: SimpleBracket, index: number) {
        if (!this._brackets.has(bracket)) {
            this._brackets.set(bracket, new Set())
        }
        this._brackets.get(bracket).add(index)
    }

    subscribeToTileChanges() {
        this._tilesWithModifier.forEach(t => {
            t.addRuleBracketNeighbor(this)
        })
    }

    matchesCellSimple(cell: Cell) {
        return this.matchesCell(cell, null, null)
    }
    matchesCell(cell: Cell, tileWithModifier: SimpleTileWithModifier, wantsToMove: RULE_DIRECTION_ABSOLUTE) {
        let doesMatch = false
        // Prepare the bit vectors (does not count against us in the timing)
        const collisionLayersToCheck = new Set<CollisionLayer>()
        // Compare using bit vectors
        const cellVectors = cell._cacheBitSets

        doesMatch = true

        for (const t of this._cacheMultiCollisionLayerTiles) {
            if (!t.matchesCellWithoutDirection(cell)) {
                doesMatch = false
                break
            }
            // check the direction as well
            let matchesDirection = false
            if (t.isNo()) {
                // no games have "NO" and a Direction. Let's make sure
                if (t._direction) {
                    throw new Error(`BUG: Invariant vfailed. Assumed NO tiles should never have a direction associated with them`)
                }
                matchesDirection = true

            } else {
                for (const sprite of t._tile.getSprites()) {
                    const c = sprite.getCollisionLayer()
                    let cellDirection = cell.getWantsToMoveByCollisionLayer(c) || RULE_DIRECTION_ABSOLUTE.STATIONARY
                    if (cell.hasSprite(sprite)) {
                        if (!t._direction || cellDirection === t._direction) {
                            matchesDirection = true
                            break
                        }
                    }
                }
            }
            if (!matchesDirection) {
                doesMatch = false
                break
            }
        }

        if (doesMatch) {
            for (const [collisionLayer, tileBitSet] of this._cacheYesBitSets) {
                if (cellVectors.has(collisionLayer)) {
                    const cellBitSet = cellVectors.get(collisionLayer)
                    if (cellBitSet && !cellBitSet.and(tileBitSet).isEmpty()) {
                    } else {
                        doesMatch = false
                        break
                    }
                } else {
                    doesMatch = false
                    break
                }
                collisionLayersToCheck.add(collisionLayer)
            }
        }

        if (doesMatch) {
            for (const [collisionLayer, tileBitSet] of this._cacheNoBitSets) {
                if (cellVectors.has(collisionLayer)) {
                    const cellBitSet = cellVectors.get(collisionLayer)
                    if (cellBitSet.and(tileBitSet).isEmpty()) {
                    } else {
                        doesMatch = false
                        break
                    }
                } else {
                    // Still ok, nothing to change since the Cell clearly does not have the NO tile
                }
                collisionLayersToCheck.add(collisionLayer)
            }
        }

        if (doesMatch) {
            const ary = [...this._cacheDirections.keys()]
            for (let index = 0; index < ary.length; index++) {
                const collisionLayer = ary[index]
                // Check directions too (only if the rule has one set)
                const ruleDirection = this._cacheDirections.get(collisionLayer)
                const cellDirection = cell.getWantsToMoveByCollisionLayer(collisionLayer)
                if (ruleDirection === RULE_DIRECTION_ABSOLUTE.STATIONARY && !cellDirection) {
                    // This is OK
                } else if (ruleDirection !== cellDirection) {
                    doesMatch = false
                    break
                }
            }
        }
        return doesMatch
    }
    matchesCellWithout(cell: Cell, sprite: GameSprite) {
        // Temporarily remove the sprite from the cell
        if (cell.hasSprite(sprite)) {
            const wantsToMove = cell.getWantsToMove(sprite)
            cell._deleteWantsToMove(sprite)
            const matches = this.matchesCellSimple(cell)
            cell._setWantsToMove(sprite, wantsToMove)
            return matches
        } else {
            return this.matchesCellSimple(cell)
        }
    }

    addCells(t: SimpleTileWithModifier, sprite: GameSprite, cells: Iterable<Cell>, wantsToMove: RULE_DIRECTION_ABSOLUTE) {
        if (process.env['NODE_ENV'] !== 'production' && this._debugFlag === DEBUG_FLAG.BREAKPOINT) {
            // Pausing here because it was marked in the code
            UI.debugRenderScreen(); debugger
        }
        for (const cell of cells) {
            const matchesTiles = this.matchesCell(cell, t, wantsToMove)
            if (matchesTiles) {
                for (const [bracket, indexes] of this._brackets.entries()) {
                    for (const index of indexes) {
                        bracket.addCell(index, this, t, sprite, cell, wantsToMove)
                    }
                }
            } else {
                // adding the Cell causes the set of Tiles to no longer match.
                // If it previously matched, notify the bracket that it no longer matches
                // (and delete it from our cache)
                for (const [bracket, indexes] of this._brackets.entries()) {
                    for (const index of indexes) {
                        bracket.removeCell(index, this, t, sprite, cell)
                    }
                }
            }
        }
    }
    updateCells(t: SimpleTileWithModifier, sprite: GameSprite, cells: Iterable<Cell>, wantsToMove: RULE_DIRECTION_ABSOLUTE) {
        this.addCells(t, sprite, cells, wantsToMove)
    }
    removeCells(t: SimpleTileWithModifier, sprite: GameSprite, cells: Iterable<Cell>) {
        if (process.env['NODE_ENV'] !== 'production' && this._debugFlag === DEBUG_FLAG.BREAKPOINT_REMOVE) {
            // Pausing here because it was marked in the code
            UI.debugRenderScreen(); debugger
        }
        for (const cell of cells) {
            // Check if the cell still matches. If not, remove it from upstream
            // It's a little funky if we have a NO tile. I _think_ we need to negate the
            // result of matchesCellWithout in that case but not completely sure
            if (t.isNo() === this.matchesCellWithout(cell, sprite)) {
                // remove it from upstream
                for (const [bracket, indexes] of this._brackets.entries()) {
                    for (const index of indexes) {
                        bracket.removeCell(index, this, t, sprite, cell)
                    }
                }
            }
        }
    }

}

class SimpleEllipsisNeighbor extends SimpleNeighbor {
    constructor(source: IGameCode, tilesWithModifier: Set<SimpleTileWithModifier>, debugFlag: DEBUG_FLAG) {
        super(source, tilesWithModifier, debugFlag)
    }
    toKey() {
        return `{...ellipsishack...}`
    }
    subscribeToTileChanges() {
        // don't subscribe to changes since we do not handle ellipses
    }
    // Define a stub because SimpleBracket calls this
    matchesCellSimple() {
        return false
    }
    prepareAction(actionNeighbor: SimpleNeighbor) {
        // do nothing since this is not implemented
    }
}

export class SimpleTileWithModifier extends BaseForLines implements ICacheable {
    _isNegated: boolean
    _isRandom: boolean
    _direction: RULE_DIRECTION_ABSOLUTE
    _tile: IGameTile
    _neighbors: Set<SimpleNeighbor>
    _debugFlag: DEBUG_FLAG
    // _localCache: Map<Cell, Set<GameSprite>>
    constructor(source: IGameCode, isNegated: boolean, isRandom: boolean, direction: RULE_DIRECTION_ABSOLUTE, tile: IGameTile, debugFlag: DEBUG_FLAG) {
        super(source)
        this._isNegated = isNegated
        this._isRandom = isRandom
        this._direction = direction
        this._tile = tile
        this._neighbors = new Set()
        this._debugFlag = debugFlag
        // this._localCache = new Map()
    }

    toKey() {
        return `{-?${this._isNegated}} {#?${this._isRandom}} dir="${this._direction}" [${this._tile.getSprites().map(sprite => sprite.getName()).sort().join(' ')}]{debugging?${this._debugFlag}}`
    }

    equals(t: SimpleEllipsisTileWithModifier) {
        return this._isNegated === t._isNegated && this._tile.equals(t._tile) && this._direction === t._direction && this._isRandom === t._isRandom
    }

    clearCaches() {
        // this._localCache.clear()
    }

    isNo() {
        return this._isNegated
    }
    isRandom() {
        return this._isRandom
    }

    getCollisionLayers() {
        const collisionLayers = new Set<CollisionLayer>()
        for (const sprite of this._tile.getSprites()) {
            collisionLayers.add(sprite.getCollisionLayer())
        }
        return collisionLayers
    }

    addRuleBracketNeighbor(neighbor: SimpleNeighbor) {
        this._neighbors.add(neighbor)
    }

    // This should only be called on Condition Brackets
    subscribeToCellChanges() {
        // subscribe this to be notified of all Sprite changes of Cells
        if (this._tile) { // grr, ellipsis hack....
            for (const sprite of this._tile.getSprites()) {
                sprite.addTileWithModifier(this)
            }
        }
    }

    matchesCellWithoutDirection(cell: Cell) {
        const hasTile = this._tile && this._tile.matchesCell(cell)
        return this._isNegated != hasTile
    }

    matchesCellWantsToMove(cell: Cell, wantsToMove: RULE_DIRECTION_ABSOLUTE) {
        const hasTile = this._tile && this._tile.matchesCell(cell)
        return this._isNegated != (hasTile && (this._direction === wantsToMove || this._direction === null))
    }

    matchesFirstCell(cells: Iterable<Cell>, wantsToMove: RULE_DIRECTION_ABSOLUTE) {
        return this.matchesCellWantsToMove(cells[0], wantsToMove)
    }

    addCells(sprite: GameSprite, cells: Iterable<Cell>, wantsToMove: RULE_DIRECTION_ABSOLUTE) {
        if (process.env['NODE_ENV'] !== 'production' && this._debugFlag === DEBUG_FLAG.BREAKPOINT) {
            // Pause here because it was marked in the code
            UI.debugRenderScreen(); debugger
        }
        // Cells all have the same sprites, so if the 1st matches, they all do
        if (this.matchesFirstCell(cells, wantsToMove)) {
            // const cellsNotInCache = setDifference(new Set(cells), new Set(this._localCache.keys()))
            for (const neighbor of this._neighbors) {
                // neighbor.addCells(this, sprite, cellsNotInCache, wantsToMove)
                neighbor.addCells(this, sprite, cells, wantsToMove)
            }
            // this._addCellsToCache(cellsNotInCache, wantsToMove)
        } else {
            // const cellsInCache = setIntersection(new Set(cells), new Set(this._localCache.keys()))
            for (const neighbor of this._neighbors) {
                // neighbor.removeCells(this, sprite, cellsInCache)
                neighbor.removeCells(this, sprite, cells)
            }
            // this._removeCellsFromCache(cellsInCache)
        }
    }
    updateCells(sprite: GameSprite, cells: Iterable<Cell>, wantsToMove: RULE_DIRECTION_ABSOLUTE) {
        if (process.env['NODE_ENV'] !== 'production' && this._debugFlag === DEBUG_FLAG.BREAKPOINT) {
            // Pause here because it was marked in the code
            UI.debugRenderScreen(); debugger
        }
        // Cells all have the same sprites, so if the 1st matches, they all do
        if (this.matchesFirstCell(cells, wantsToMove)) {
            for (const neighbor of this._neighbors) {
                neighbor.updateCells(this, sprite, cells, wantsToMove)
            }
        }
    }
    removeCells(sprite: GameSprite, cells: Iterable<Cell>) {
        if (process.env['NODE_ENV'] !== 'production' && this._debugFlag === DEBUG_FLAG.BREAKPOINT_REMOVE) {
            // Pause here because it was marked in the code
            UI.debugRenderScreen(); debugger
        }
        // Cells all have the same sprites, so if the 1st matches, they all do
        if (this.matchesFirstCell(cells, null/*STATIONARY*/)) {
            // const cellsNotInCache = setDifference(new Set(cells), new Set(this._localCache.keys()))
            for (const neighbor of this._neighbors) {
                // neighbor.addCells(this, sprite, cellsNotInCache, RULE_DIRECTION_ABSOLUTE.STATIONARY)
                neighbor.addCells(this, sprite, cells, RULE_DIRECTION_ABSOLUTE.STATIONARY)
            }
            // this._addCellsToCache(cellsNotInCache, RULE_DIRECTION_ABSOLUTE.STATIONARY)
        } else {
            // const cellsInCache = setIntersection(new Set(cells), new Set(this._localCache.keys()))
            for (const neighbor of this._neighbors) {
                // neighbor.removeCells(this, sprite, cellsInCache)
                neighbor.removeCells(this, sprite, cells)
            }
            // this._removeCellsFromCache(cellsInCache)
        }
    }

}

class SimpleEllipsisTileWithModifier extends SimpleTileWithModifier {
    constructor(source: IGameCode, isNegated: boolean, isRandom: boolean, direction: RULE_DIRECTION_ABSOLUTE, tile: IGameTile, debugFlag: DEBUG_FLAG) {
        super(source, isNegated, isRandom, direction, tile, debugFlag)
    }
    toKey() {
        return `HACK_SIMPLE_ELLIPSIS_TILEWITHMODIFIER`
    }
    subscribeToCellChanges() {
        // Don't actually subscribe
    }
}

class Pair<A> {
    condition: A
    action: A
    constructor(condition: A, action: A) {
        this.condition = condition
        this.action = action
    }
}

class ExtraPair<A> extends Pair<A> {
    extra: boolean
    constructor(condition, action, extra) {
        super(condition, action)
        this.extra = extra
    }
}


interface ICacheable {
    toKey: () => string
}

function cacheSetAndGet<A extends ICacheable>(cache: Map<string, A>, obj: A) {
    const key = obj.toKey()
    if (!cache.has(key)) {
        cache.set(key, obj)
    }
    return cache.get(key)
}

// Note: Directions inside a Bracket are relative to other dorections inside a bracket
// Example:
//
// Interpret `[ > player > cat | < dog ] -> [ < player | cat < dog ]` to:
// Interpret `[ ^ player v cat | v dog ] -> [ v player | cat v dog ]` to:
// UP    [ UP    player UP    cat | DOWN  dog ] -> [ DOWN  player | cat DOWN  dog ]
// DOWN  [ DOWN  player DOWN  cat | UP    dog ] -> [ UP    player | cat UP    dog ]
// LEFT  [ LEFT  player LEFT  cat | RIGHT dog ] -> [ RIGHT player | cat RIGHT dog ]
// RIGHT [ RIGHT player RIGHT cat | LEFT  dog ] -> [ LEFT  player | cat LEFT  dog ]
//
// Interpret `HORIZONTAL [ > player ] -> [ < crate ] to:
// LEFT  [ LEFT  player ] -> [ RIGHT crate ]
// RIGHT [ RIGHT player ] -> [ LEFT  crate ]
//
// Interpret `VERTICAL [ ^ player PARALLEL cat | PERPENDICULAR dog ] -> [ < crate |  dog ] to:
// UP    [ LEFT   player HORIZONTAL cat ] -> [ DOWN  crate | VERTICAL   dog ]
// DOWN  [ RIGHT  player HORIZONTAL cat ] -> [ UP    crate | VERTICAL   dog ]
// LEFT  [ DOWN   player VERTICAL   cat ] -> [ RIGHT crate | HORIZONTAL dog ]
// DOWN  [ RIGHT  player HORIZONTAL cat ] -> [ UP    crate | HORIZONTAL dog ]
//
// See https://www.puzzlescript.net/Documentation/executionorder.html
export class GameRule extends BaseForLines implements ICacheable {
    _modifiers: RULE_MODIFIER[]
    _commands: AbstractCommand[]
    _hasEllipsis: boolean
    _brackets: RuleBracket[]
    _actionBrackets: RuleBracket[]
    _debugFlag: DEBUG_FLAG // Used for setting a breakpoint when evaluating the rule
    // _conditionCommandPair: RuleConditionCommandPair[]

    toKey() {
        return `${this._modifiers.join(' ')} ${this._brackets.map(x => x.toKey())} -> ${this._actionBrackets.map(x => x.toKey())} ${this._commands.join(' ')} {debugger?${this._debugFlag}}`
    }

    simplify(ruleCache: Map<string, SimpleRule>, bracketCache: Map<string, SimpleBracket>, neighborCache: Map<string, SimpleNeighbor>, tileCache: Map<string, SimpleTileWithModifier>) {
        const simpleRules = this.convertToMultiple().map(r => r.toSimple(ruleCache, bracketCache, neighborCache, tileCache))
        // Register listeners to Cell changes
        for (const rule of simpleRules) {
            rule.subscribeToCellChanges()
        }
        return new SimpleRuleGroup(this.__source, this.isRandom(), simpleRules)
    }

    toSimple(ruleCache: Map<string, SimpleRule>, bracketCache: Map<string, SimpleBracket>, neighborCache: Map<string, SimpleNeighbor>, tileCache: Map<string, SimpleTileWithModifier>) {
        const directions = this.getDirectionModifiers()
        if (directions.length !== 1) {
            throw new Error(`BUG: should have exactly 1 direction by now but found the following: "${directions}"`)
        }

        // Check if the condition matches the action. If so, we can simplify evaluation.
        const conditionBrackets = this._brackets.map(x => x.toSimple(directions[0], ruleCache, bracketCache, neighborCache, tileCache))
        const actionBrackets = this._actionBrackets.map(x => x.toSimple(directions[0], ruleCache, bracketCache, neighborCache, tileCache))

        // Below (in the loop) we check to see if evaluation order matters
        let doesEvaluationOrderMatter = false

        for (let index = 0; index < conditionBrackets.length; index++) {
            const condition = conditionBrackets[index]
            const action = actionBrackets[index]
            // Skip rules with no action bracket `[ > Player ] -> CHECKPOINT`
            if (!action) {
                continue
            }

            // Optimization. Brackets that are only used for testing conditions
            // can be optimized out so they do not need to be evaluated.
            if (condition === action) {
                conditionBrackets[index] = new SimpleBracketConditionOnly(condition.__source, condition._direction, condition._neighbors, condition._hasEllipsis, condition._debugFlag)
                // actionBrackets[index] = null
            }

            // If there is only 1 bracket with only 1 neighbor then order does not matter
            // So we can skip the introspection loops below
            if (conditionBrackets.length === 1 && conditionBrackets[0]._neighbors.length === 1) {
                continue
            }
            // Brackets that only involve adding/removing Tiles (or directions) that are not on the condition side can be evaluated easier
            // since they do not need to run in-order
            const conditionTilesWithModifiers = new Set()
            const conditionTilesMap = new Map()
            const actionTilesWithModifiers = new Set()
            for (let index = 0; index < condition._neighbors.length; index++) {
                const neighbor = condition._neighbors[index]
                for (const t of neighbor._tilesWithModifier) {
                    conditionTilesWithModifiers.add(t)
                    conditionTilesMap.set(t._tile, { direction: t._direction, neighborIndex: index })
                }
            }
            for (let index = 0; index < action._neighbors.length; index++) {
                const neighbor = action._neighbors[index]
                for (const t of neighbor._tilesWithModifier) {
                    actionTilesWithModifiers.add(t)
                    if (t._tile /* because of ellipsis*/ && t._tile.isOr()) {
                        // check if the condition contains the OR tile and maybe is more specific
                        let orTileOnConditionSide
                        for (const conditionTile of condition._neighbors[index]._tilesWithModifier) {
                            if (t._tile === conditionTile._tile && !conditionTile.isNo()) {
                                orTileOnConditionSide = conditionTile
                            }
                        }
                        if (orTileOnConditionSide) {

                        } else {
                            // console.log('Marking as slow because the action side has an OR tile')
                            // console.log(this.toString())
                            doesEvaluationOrderMatter = true // not strictly true, but it means we need to use the magicOrTiles
                        }
                    }
                }
            }
            const uniqueActionTiles = setDifference(actionTilesWithModifiers, conditionTilesWithModifiers)
            for (const t of uniqueActionTiles) {
                if (conditionTilesMap.has(t._tile)) { //use .get instead of HAS because if we are setting a direction then we should be ok
                    // Determine the neighbor index of the tile
                    for (let index = 0; index < action._neighbors.length; index++) {
                        const neighbor = action._neighbors[index]
                        if (neighbor._tilesWithModifier.has(t)) {
                            if (index !== conditionTilesMap.get(t._tile).neighborIndex) {
                                // console.log('Marking as slow because the action side has a Tile that may modify the condition and need to re-run')
                                // console.log(this.toString())
                                // console.log(t.toString())
                                // console.log(t._tile.toString())
                                // console.log('------------------------------------');

                                doesEvaluationOrderMatter = true
                            }
                        }
                    }
                }
            }
        }

        return cacheSetAndGet(ruleCache, new SimpleRule(this.__source, directions[0], conditionBrackets, actionBrackets, this._commands, this.isLate(), this.isRigid(), this.isRandom(), this._debugFlag, doesEvaluationOrderMatter))
    }

    convertToMultiple() {
        let rulesToConvert = []
        let convertedRules = []

        for (const direction of this.getDirectionModifiers()) {
            const expandedDirection = this.clone(direction, null, null)
            rulesToConvert.push(expandedDirection)
        }

        const expandModifiers = new Map()
        expandModifiers.set(RULE_MODIFIER.HORIZONTAL, [RULE_DIRECTION.LEFT, RULE_DIRECTION.RIGHT])
        expandModifiers.set(RULE_MODIFIER.VERTICAL, [RULE_DIRECTION.UP, RULE_DIRECTION.DOWN])
        expandModifiers.set(RULE_MODIFIER.MOVING, [RULE_DIRECTION.UP, RULE_DIRECTION.DOWN, RULE_DIRECTION.LEFT, RULE_DIRECTION.RIGHT, RULE_DIRECTION.ACTION])

        let didExpand
        do {
            didExpand = false
            for (const rule of rulesToConvert) {
                const direction = rule.getDirectionModifiers()[0]
                if (rule.getDirectionModifiers().length !== 1) {
                    throw new Error(`BUG: should have already expanded the rule to only contian one direction`)
                }
                for (const [nameToExpand, variations] of expandModifiers) {
                    if (rule.hasModifier(nameToExpand)) {
                        for (const variation of variations) {
                            convertedRules.push(rule.clone(direction, nameToExpand, variation))
                            didExpand = true
                        }
                    }
                }
                // If nothing was expanded and this is the current rule
                // then just keep it
                if (!didExpand) {
                    convertedRules.push(rule)
                }
            }
            rulesToConvert = convertedRules
            convertedRules = []
        } while (didExpand)

        return rulesToConvert
    }

    clone(direction: RULE_DIRECTION_ABSOLUTE, nameToExpand: RULE_MODIFIER, newName: RULE_DIRECTION) {
        const conditionBrackets = this._brackets.map(bracket => bracket.clone(direction, nameToExpand, newName))
        const actionBrackets = this._actionBrackets.map(bracket => bracket.clone(direction, nameToExpand, newName))
        // retain LATE and RIGID but discard the rest of the modifiers
        const modifiers = _.intersection(this._modifiers, [RULE_MODIFIER.LATE, RULE_MODIFIER.RIGID, RULE_MODIFIER.RANDOM]).concat([RULE_MODIFIER[direction]])
        return new GameRule(this.__source, modifiers, conditionBrackets, actionBrackets, this._commands, this._debugFlag)
    }

    hasModifier(modifier: RULE_MODIFIER) {
        for (const bracket of this._brackets) {
            for (const neighbor of bracket._neighbors) {
                for (const t of neighbor._tilesWithModifier) {
                    if (t._modifier === modifier) {
                        return true
                    }
                }
            }
        }
        return false
    }

    getDirectionModifiers() {
        // Convert HORIZONTAL and VERTICAL to 2:
        if (this._modifiers.indexOf(RULE_MODIFIER.HORIZONTAL) >= 0) {
            return [RULE_DIRECTION_ABSOLUTE.LEFT, RULE_DIRECTION_ABSOLUTE.RIGHT]
        }
        if (this._modifiers.indexOf(RULE_MODIFIER.VERTICAL) >= 0) {
            return [RULE_DIRECTION_ABSOLUTE.UP, RULE_DIRECTION_ABSOLUTE.DOWN]
        }
        const directions = this._modifiers.filter(m => RULE_DIRECTION_ABSOLUTE_SET.has(m)).map(d => {
            switch (d) {
                case RULE_MODIFIER.UP:
                    return RULE_DIRECTION_ABSOLUTE.UP
                case RULE_MODIFIER.DOWN:
                    return RULE_DIRECTION_ABSOLUTE.DOWN
                case RULE_MODIFIER.LEFT:
                    return RULE_DIRECTION_ABSOLUTE.LEFT
                case RULE_MODIFIER.RIGHT:
                    return RULE_DIRECTION_ABSOLUTE.RIGHT
                default:
                    throw new Error(`BUG: Invalid rule direction "${d}"`)
            }
        })
        if (directions.length === 0) {
            return RULE_DIRECTION_ABSOLUTE_LIST
        } else {
            return directions
        }
    }

    constructor(source: IGameCode, modifiers: RULE_MODIFIER[], conditions: RuleBracket[], actions: RuleBracket[], commands: AbstractCommand[], debugFlag: DEBUG_FLAG) {
        super(source)
        this._modifiers = modifiers
        this._commands = commands
        this._hasEllipsis = false
        this._brackets = conditions
        this._actionBrackets = actions
        this._debugFlag = debugFlag

        // Set _hasEllipsis value
        for (let i = 0; i < conditions.length; i++) {
            const condition = conditions[i]
            if (condition.hasEllipsis()) {
                this._hasEllipsis = true
                break
            }
        }

        // Check if valid
        if (conditions.length !== actions.length && actions.length !== 0) {
            throw new Error(`Left side has "${conditions.length}" conditions and right side has "${actions.length}" actions!`)
        }

        if (conditions.length === actions.length) {
        } else if (actions.length !== 0) {
            throw new Error(`Invalid Rule. The number of brackets on the right must match the structure of the left hand side or be 0`)
        }
    }


    isLate() {
        return this._modifiers.indexOf(RULE_MODIFIER.LATE) >= 0
    }
    isRigid() {
        return this._modifiers.indexOf(RULE_MODIFIER.RIGID) >= 0
    }
    isRandom() {
        return this._modifiers.indexOf(RULE_MODIFIER.RANDOM) >= 0
    }

}

export class RuleBracket extends BaseForLines implements ICacheable {
    _neighbors: RuleBracketNeighbor[]
    _hasEllipsis: boolean
    _firstCellsInEachDirection: Map<RULE_DIRECTION, Set<Cell>>
    _debugFlag: DEBUG_FLAG

    constructor(source: IGameCode, neighbors: RuleBracketNeighbor[], hack: string, debugFlag: DEBUG_FLAG) {
        super(source)
        this._neighbors = neighbors
        this._hasEllipsis = false
        this._debugFlag = debugFlag

        // populate the cache
        this._firstCellsInEachDirection = new Map()
        for (const direction of SIMPLE_DIRECTION_DIRECTIONS) {
            this._firstCellsInEachDirection.set(direction, new Set())
        }
        this._firstCellsInEachDirection.set(RULE_DIRECTION.ACTION, new Set())

        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i]
            if (neighbor.isEllipsis()) {
                this._hasEllipsis = true
                break
            }
        }
    }

    toKey() {
        return this._neighbors.map(n => n.toKey()).join('|')
    }

    clone(direction: RULE_DIRECTION_ABSOLUTE, nameToExpand: RULE_MODIFIER, newName: RULE_DIRECTION) {
        return new RuleBracket(this.__source, this._neighbors.map(n => n.clone(direction, nameToExpand, newName)), null, this._debugFlag)
    }

    toSimple(direction: RULE_DIRECTION_ABSOLUTE, ruleCache: Map<string, SimpleRule>, bracketCache: Map<string, SimpleBracket>, neighborCache: Map<string, SimpleNeighbor>, tileCache: Map<string, SimpleTileWithModifier>) {
        return cacheSetAndGet(bracketCache, new SimpleBracket(this.__source, direction, this._neighbors.map(x => x.toSimple(ruleCache, bracketCache, neighborCache, tileCache)), this._hasEllipsis, this._debugFlag))
    }

    hasEllipsis() {
        return this._hasEllipsis
    }

}

export class RuleBracketNeighbor extends BaseForLines implements ICacheable {
    _brackets: RuleBracket[]
    _tilesWithModifier: TileWithModifier[]
    _isEllipsis: boolean
    _localCellCache: Set<Cell>
    _debugFlag: DEBUG_FLAG

    constructor(source: IGameCode, tilesWithModifier: TileWithModifier[], isEllipsis: boolean, debugFlag: DEBUG_FLAG) {
        super(source)
        // See below: this._tilesWithModifier = tilesWithModifier
        this._isEllipsis = isEllipsis

        this._localCellCache = new Set()
        this._brackets = []
        this._debugFlag = debugFlag

        // Collapse duplicate tiles into one.
        // e.g. Cyber-Lasso has the following rule:
        // ... -> [ ElectricFloor Powered no ElectricFloor Claimed ]
        //
        // ElectricFloor occurs twice (one is negated)
        // We keep the first and remove the rest
        const tilesMap = new Map()
        for (const t of tilesWithModifier) {
            if (!tilesMap.has(t._tile)) {
                tilesMap.set(t._tile, t)
            }
        }
        this._tilesWithModifier = [...tilesMap.values()]
    }

    toKey() {
        return `{isEllipsis?${this._isEllipsis} ${this._tilesWithModifier.map(t => t.toKey()).sort().join(' ')} debugging?${this._debugFlag}}`
    }

    clone(direction: RULE_DIRECTION_ABSOLUTE, nameToExpand: RULE_MODIFIER, newName: RULE_DIRECTION) {
        return new RuleBracketNeighbor(this.__source, this._tilesWithModifier.map(t => t.clone(direction, nameToExpand, newName)), this._isEllipsis, this._debugFlag)
    }

    toSimple(ruleCache: Map<string, SimpleRule>, bracketCache: Map<string, SimpleBracket>, neighborCache: Map<string, SimpleNeighbor>, tileCache: Map<string, SimpleTileWithModifier>) {
        if (this.isEllipsis()) {
            return new SimpleEllipsisNeighbor(this.__source, new Set(this._tilesWithModifier.map(x => x.toSimple(ruleCache, bracketCache, neighborCache, tileCache))), this._debugFlag)
        }
        return cacheSetAndGet(neighborCache, new SimpleNeighbor(this.__source, new Set(this._tilesWithModifier.map(x => x.toSimple(ruleCache, bracketCache, neighborCache, tileCache))), this._debugFlag))
    }

    isEllipsis() {
        return this._isEllipsis
    }

}

export class TileWithModifier extends BaseForLines implements ICacheable {
    _neighbors: RuleBracketNeighbor[]
    _modifier?: string
    _tile: IGameTile
    _debugFlag: DEBUG_FLAG

    constructor(source: IGameCode, modifier: string, tile: IGameTile, debugFlag: DEBUG_FLAG) {
        super(source)
        this._modifier = modifier
        this._tile = tile
        this._neighbors = []
        this._debugFlag = debugFlag

        if (!this._tile) {
            console.warn('TODO: Do something about ellipses')
        }

    }

    toKey() {
        return `${this._modifier || ''} ${this._tile ? this._tile.getSprites().map(sprite => sprite.getName()) : '|||(notile)|||'}{debugging?${this._debugFlag}}`
    }

    clone(direction: RULE_DIRECTION_ABSOLUTE, nameToExpand: RULE_MODIFIER, newName: RULE_DIRECTION) {
        switch (this._modifier) {
            case '>':
            case '<':
            case '^':
            case 'v':
                let modifier = relativeDirectionToAbsolute(direction, this._modifier)
                return new TileWithModifier(this.__source, modifier, this._tile, this._debugFlag)
            case nameToExpand:
                return new TileWithModifier(this.__source, newName, this._tile, this._debugFlag)
            default:
                return this
        }
    }

    toSimple(ruleCache: Map<string, SimpleRule>, bracketCache: Map<string, SimpleBracket>, neighborCache: Map<string, SimpleNeighbor>, tileCache: Map<string, SimpleTileWithModifier>) {
        if (!this._tile) {
            return new SimpleEllipsisTileWithModifier(this.__source, this.isNo(), this.isRandom(), RULE_DIRECTION_ABSOLUTE.STATIONARY, this._tile, this._debugFlag)
        }
        let direction
        switch (this._modifier) {
            case 'UP':
            case 'DOWN':
            case 'LEFT':
            case 'RIGHT':
                direction = RULE_DIRECTION_ABSOLUTE[this._modifier]
                break
            case 'STATIONARY':
                direction = RULE_DIRECTION_ABSOLUTE.STATIONARY
                break
            case 'ACTION':
                direction = RULE_DIRECTION_ABSOLUTE.ACTION
                break
            case 'RANDOMDIR':
                direction = RULE_DIRECTION_ABSOLUTE.RANDOMDIR
                break
            default:
                direction = null
        }
        return cacheSetAndGet(tileCache, new SimpleTileWithModifier(this.__source, this.isNo(), this.isRandom(), direction, this._tile, this._debugFlag))
    }

    isNo() {
        return this._modifier === M_NO
    }
    isRandom() {
        return this._modifier === RULE_DIRECTION.RANDOM
    }
    isRandomDir() {
        return this._modifier === RULE_DIRECTION.RANDOMDIR
    }
}

// Extend RuleBracketNeighbor so that NeighborPair doesn't break
export class HackNode extends RuleBracketNeighbor {
    fields: object

    // These should be addressed as we write the interpreter
    constructor(source: IGameCode, fields: object, debugFlag: DEBUG_FLAG) {
        super(source, [], false, debugFlag)
        this.fields = fields
    }

    isEllipsis() {
        return false
    }
}

export interface IRule extends IGameNode {
    evaluate: () => IMutation[]
    getChildRules: () => IRule[]
    isLate: () => boolean
    isRigid: () => boolean
    isRandom: () => boolean
    clearCaches: () => void
    clearRandomFlag: () => void
    canEvaluate: () => boolean
    addCellsToEmptyRules: (cells: Iterable<Cell>) => void
}

export class GameRuleLoop extends BaseForLines {
    _rules: GameRule[]
    _debugFlag: DEBUG_FLAG

    constructor(source: IGameCode, rules: GameRule[], debugFlag: DEBUG_FLAG) {
        super(source)
        this._rules = rules
        this._debugFlag = debugFlag
    }

    simplify(ruleCache: Map<string, SimpleRule>, bracketCache: Map<string, SimpleBracket>, neighborCache: Map<string, SimpleNeighbor>, tileCache: Map<string, SimpleTileWithModifier>) {
        return new SimpleRuleLoop(this.__source, this.isRandom(), this._rules.map(rule => rule.simplify(ruleCache, bracketCache, neighborCache, tileCache)))
    }
    isRandom() {
        return !!this._rules.filter(r => r.isRandom())[0]
    }
}

export class GameRuleGroup extends GameRuleLoop {
    // Yes. One propagates isRandom while the other does not
    simplify(ruleCache: Map<string, SimpleRule>, bracketCache: Map<string, SimpleBracket>, neighborCache: Map<string, SimpleNeighbor>, tileCache: Map<string, SimpleTileWithModifier>) {
        return new SimpleRuleGroup(this.__source, this.isRandom(), this._rules.map(rule => rule.simplify(ruleCache, bracketCache, neighborCache, tileCache)))
    }

}

const M_STATIONARY = 'STATIONARY'
const M_NO = 'NO'
const SUPPORTED_CELL_MODIFIERS = new Set([M_STATIONARY, M_NO])
const SUPPORTED_RULE_MODIFIERS = new Set([
    RULE_MODIFIER.UP,
    RULE_MODIFIER.DOWN,
    RULE_MODIFIER.LEFT,
    RULE_MODIFIER.RIGHT,
    RULE_MODIFIER.HORIZONTAL,
    RULE_MODIFIER.VERTICAL,
    RULE_MODIFIER.ORTHOGONAL
])

export function relativeDirectionToAbsolute(currentDirection: RULE_DIRECTION_ABSOLUTE, relativeModifier: string) {
    let currentDir
    switch (currentDirection) {
        case RULE_DIRECTION_ABSOLUTE.RIGHT:
            currentDir = 0
            break
        case RULE_DIRECTION_ABSOLUTE.UP:
            currentDir = 1
            break
        case RULE_DIRECTION_ABSOLUTE.LEFT:
            currentDir = 2
            break
        case RULE_DIRECTION_ABSOLUTE.DOWN:
            currentDir = 3
            break
        default:
            throw new Error(`BUG! Invalid rule direction "${currentDirection}`)
    }

    switch (relativeModifier) {
        case '>':
            currentDir += 0
            break
        case '^':
            currentDir += 1
            break
        case '<':
            currentDir += 2
            break
        case 'v':
            currentDir += 3
            break
        default:
            throw new Error(`BUG! invalid relative direction "${relativeModifier}"`)
    }
    switch (currentDir % 4) {
        case 0:
            return RULE_DIRECTION_ABSOLUTE.RIGHT
        case 1:
            return RULE_DIRECTION_ABSOLUTE.UP
        case 2:
            return RULE_DIRECTION_ABSOLUTE.LEFT
        case 3:
            return RULE_DIRECTION_ABSOLUTE.DOWN
        default:
            throw new Error(`BUG! Incorrectly computed rule direction "${currentDirection}" "${relativeModifier}"`)
    }
}


export interface IMutation {
    hasCell: () => boolean
    getCell: () => Cell
    hasCommand: () => boolean
    getCommand: () => AbstractCommand
    getDidSpritesChange: () => boolean
}

export class CellMutation implements IMutation {
    cell: Cell
    didSpritesChange: boolean
    constructor(cell: Cell, didSpritesChange: boolean) {
        this.cell = cell
        this.didSpritesChange = didSpritesChange
    }
    hasCell() { return true }
    getCell() { return this.cell }
    getDidSpritesChange() { return this.didSpritesChange }
    hasCommand() { return false }
    getCommand() {
        if (!!true) {
            throw new Error(`BUG: check hasCommand first`)
        }
        return null
    }
}

export class CommandMutation implements IMutation {
    command: AbstractCommand
    constructor(command: AbstractCommand) {
        this.command = command
    }
    hasCommand() { return true }
    getCommand() { return this.command }
    getDidSpritesChange() { return false }
    hasCell() { return false }
    getCell() {
        if (!!true) {
            throw new Error(`BUG: check hasCell first`)
        }
        return null
    }
}
