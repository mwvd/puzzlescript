// Maybe call this file `matchers.ts`?

import * as _ from 'lodash'
import {
  GameRule,
  RuleBracket,
  RuleBracketNeighbor,
  TileWithModifier
} from './models/rule'
import { Cell } from './engine'
import { RULE_MODIFIER, setIntersection, setDifference } from './util'

export class Pair<A, B> {
  a: A
  b: B
  constructor(a: A, b: B) {
    this.a = a
    this.b = b
  }
}

export enum RULE_DIRECTION {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

export interface IMutator {
  mutate: () => Cell[]
}

export interface IMatcher {
  getMatchedMutatorsOrNull: (cell: Cell, direction?: RULE_DIRECTION) => IMutator[] | null
}

export function getMatchedMutatorsHelper(pairs: IMatcher[], cell: Cell, direction?: RULE_DIRECTION) {
  let ret: IMutator[] = []
  for (const pair of pairs) {
    const retChild = pair.getMatchedMutatorsOrNull(cell, direction)
    if (!retChild) return null
    ret = ret.concat(retChild)
  }
  return ret
}

const SIMPLE_DIRECTIONS = new Set([
  RULE_MODIFIER.UP,
  RULE_MODIFIER.DOWN,
  RULE_MODIFIER.LEFT,
  RULE_MODIFIER.RIGHT
])

export class RuleBracketPair implements IMatcher {
  _modifiers: Set<RULE_MODIFIER>
  _neighborPairs: NeighborPair[]

  // boilerplate constructor
  constructor(modifiers: Set<RULE_MODIFIER>, condition: RuleBracket, action: RuleBracket) {
    this._modifiers = modifiers
    this._neighborPairs = _.zip(condition._neighbors, action._neighbors).map(([conditionTileWithModifier, actionTileWithModifier]) => {
      return new NeighborPair(conditionTileWithModifier, actionTileWithModifier)
    })
  }

  getMatchedMutatorsOrNull(cell: Cell) {
    if (this._modifiers.has(RULE_MODIFIER.RANDOM) || this._modifiers.has(RULE_MODIFIER.LATE) || this._modifiers.has(RULE_MODIFIER.RIGID)) {
      // These are not implemented yet so ignore them
      return null
    }

    // Determine which directions to loop over
    // Include any simple UP, DOWN, LEFT, RIGHT ones
    let directionsToCheck = setIntersection(this._modifiers, SIMPLE_DIRECTIONS)
    // Include LEFT and RIGHT if HORIZONTAL
    if (this._modifiers.has(RULE_MODIFIER.HORIZONTAL)) {
      return null // not supported properly
      // directionsToCheck.add(RULE_MODIFIER.LEFT)
      // directionsToCheck.add(RULE_MODIFIER.RIGHT)
    }
    // Include UP and DOWN if VERTICAL
    if (this._modifiers.has(RULE_MODIFIER.VERTICAL)) {
      return null // not supported properly
      // directionsToCheck.add(RULE_MODIFIER.UP)
      // directionsToCheck.add(RULE_MODIFIER.DOWN)
    }
    // If no direction was specified then check UP, DOWN, LEFT, RIGHT
    if (directionsToCheck.size === 0) {
      directionsToCheck = new Set(SIMPLE_DIRECTIONS)
    }

    // Walk through each neighbor, checking if the adjacent cell matches.
    // If any do not match, return null (the pattern did not match)
    let ret: IMutator[] = []
    let curCell = cell
    for (const direction of directionsToCheck) {
      let neighborRet: IMutator[] = []
      for (const neighbor of this._neighborPairs) {
        if (!curCell) break // If we hit the end of the level then this does not match
        // Check if the individual tiles match
        const mutators = neighbor.getMatchedMutatorsOrNull(curCell, direction)
        if (!mutators) break
        neighborRet = neighborRet.concat(mutators)

        // Move to the next neighboring cell
        curCell = curCell.getNeighbor(direction)
      }

      // If all the neighbors were matched then return the mutators
      if (neighborRet.length === this._neighborPairs.length) {
        ret = ret.concat(neighborRet)
      }
    }

    if (ret.length > 0) {
      return ret
    } else {
      return null
    }
  }
}

class NeighborPair implements IMatcher {
  _condition: TileWithModifier[]
  _action: TileWithModifier[]

  constructor(condition: RuleBracketNeighbor, action: RuleBracketNeighbor) {
    this._condition = condition._tilesWithModifier
    this._action = action._tilesWithModifier
  }

  getMatchedMutatorsOrNull(cell: Cell, direction: RULE_DIRECTION) {
    for (const tileWithModifier of this._condition) {
      if (!tileWithModifier.matchesCell(cell, direction)) {
        return null
      }
    }
    return [new CellMutator(this._condition, this._action, cell, direction)]
  }
}


class CellMutator implements IMutator {
  _condition: TileWithModifier[]
  _action: TileWithModifier[]
  _cell: Cell
  _direction: RULE_DIRECTION
  constructor(condition: TileWithModifier[], action: TileWithModifier[], cell: Cell, direction: RULE_DIRECTION) {
    this._condition = condition
    this._action = action
    this._cell = cell
    this._direction = direction
  }
  mutate() {
    // Just remove all tiles for now and then add all of them back
    // TODO: only remove tiles that are matching the collisionLayer but wait, they already need to be exclusive
    const newSprites = [...this._cell.getSpriteAndWantsToMoves()]

    function removeSprite(sprite) {
      const sRemove = newSprites.filter(({a}) => a === sprite)[0]
      if (sRemove) {
        newSprites.splice(newSprites.indexOf(sRemove), 1)
      }
    }

    // remove sprites that are listed on the condition side
    this._condition.forEach(tileWithModifier => {
      tileWithModifier._tile.getSprites().forEach(sprite => {
        removeSprite(sprite)
      })
    })
    this._action.forEach(tileWithModifier => {
      tileWithModifier._tile.getSprites().forEach(sprite => {
        removeSprite(sprite)
        if (tileWithModifier.isNo()) {
        } else {
          newSprites.push(new Pair(sprite, tileWithModifier._modifier))
        }
      })
    })

    if (this._cell.updateSprites(new Set(newSprites))) {
      return [this._cell]
    } else {
      return []
    }
  }
}