export type Optional<T> = T | null | undefined

export function opposite(dir: RULE_DIRECTION) {
    switch (dir) {
        case RULE_DIRECTION.UP:
            return RULE_DIRECTION.DOWN
        case RULE_DIRECTION.DOWN:
            return RULE_DIRECTION.UP
        case RULE_DIRECTION.LEFT:
            return RULE_DIRECTION.RIGHT
        case RULE_DIRECTION.RIGHT:
            return RULE_DIRECTION.LEFT
        default:
            throw new Error(`BUG: Invalid direction: "${dir}"`)
    }
}

export function setEquals<T>(set1: Set<T>, set2: Set<T>) {
    if (set1.size !== set2.size) return false
    for (const elem of set1) {
        if (!set2.has(elem)) return false
    }
    return true
}

export function setAddAll<T>(setA: Set<T>, iterable: Iterable<T>) {
    const newSet = new Set(setA)
    for (const elem of iterable) {
        newSet.add(elem)
    }
    return newSet
}

export function setIntersection<T>(setA: Set<T>, setB: Set<T>) {
    const intersection = new Set()
    for (const elem of setB) {
        if (setA.has(elem)) {
            intersection.add(elem)
        }
    }
    return intersection
}

export function setDifference<T>(setA: Set<T>, setB: Set<T>) {
    const difference = new Set(setA)
    for (const elem of setB) {
        difference.delete(elem)
    }
    return difference
}

// From https://stackoverflow.com/a/19303725
let seed = 1
let randomValuesForTesting: Optional<number[]> = null
export function nextRandom(maxNonInclusive: number) {
    if (randomValuesForTesting) {
        if (randomValuesForTesting.length <= seed - 1) {
            throw new Error(`BUG: the list of random values for testing was too short. See calls to setRandomValuesForTesting([...]). The list was [${randomValuesForTesting}]. Index being requested is ${seed - 1}`)
        }
        const ret = randomValuesForTesting[seed - 1]
        seed++
        // console.log(`Sending "random" value of "${ret}"`);

        return ret
    }
    let x = Math.sin(seed++) * 10000
    return Math.round((x - Math.floor(x)) * (maxNonInclusive - 1))
    // return Math.round(Math.random() * (maxNonInclusive - 1))
}
export function resetRandomSeed() {
    seed = 1
}
export function setRandomValuesForTesting(values: number[]) {
    randomValuesForTesting = values
    resetRandomSeed()
}
export function clearRandomValuesForTesting() {
    randomValuesForTesting = null
    resetRandomSeed()
}
export function getRandomSeed() {
    return seed
}

export enum RULE_DIRECTION {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    ACTION = 'ACTION',
    STATIONARY = 'STATIONARY',
    RANDOMDIR = 'RANDOMDIR'
}

/**
 * A `DEBUGGER` flag in the game source that causes the evaluation to pause.
 * It works like the [debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) keyword in JavaScript.
 *
 * **Note:** the game needs to run in debug mode (`node --inspect-brk path/to/puzzlescript.js` or `npm run play-debug`)
 * for this flag to have any effect.
 *
 * This string can be added to:
 *
 * - A Rule. Example: `DEBUGGER [ > player | cat ] -> [ > player | > cat ]`
 * - A bracket when the condition is updated: `[ > player | cat ] DEBUGGER -> [ > player | > cat ]`
 * - A bracket when it is evaluated: `[ > player | cat ] -> [ > player | > cat ] DEBUGGER`
 * - A neighbor when the condition is updated: `[ > player DEBUGGER | cat ] -> [ > player | > cat ]`
 * - A neighbor when it is evaluated: `[ > player | cat ] -> [ > player | > cat DEBUGGER ]`
 * - A tile when the condition is updated: `[ > player | DEBUGGER cat ] -> [ > player | > cat ]`
 * - A tile when it is matched: `[ > player | cat ] -> [ > player | DEBUGGER > cat ]`
 */
export enum DEBUG_FLAG {
    BREAKPOINT = 'DEBUGGER', // only when the rule matches elements
    /**
     * Pause when a Cell causes an entry to be removed from the set of matches for this rule/bracket/neighbor/tile
     */
    BREAKPOINT_REMOVE = 'DEBUGGER_REMOVE',
}

export interface ICacheable {
    toKey: () => string
}
