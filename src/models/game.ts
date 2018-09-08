import { GameMetadata } from './metadata'
import { GameSprite, GameLegendTileSimple, IGameTile } from './tile'
import { IRule } from './rule'
import { GameSound } from './sound'
import { LevelMap } from './level'
import { CollisionLayer } from './collisionLayer'
import { WinConditionSimple } from './winCondition'
import { ASTRule } from '../parser/astRule';
import { Optional } from '../util';
import { getLetterSprites } from '../letters';
import { IGameCode } from './BaseForLines';

export type IGameNode = {
    __getSourceLineAndColumn: () => { lineNum: number, colNum: number }
    __getLineAndColumnRange: () => { start: { line: number, col: number }, end: { line: number, col: number } }
    __coverageCount: Optional<number>
    toString: () => string
    toSourceString: () => string
}

export class GameData {
    readonly title: string
    readonly metadata: GameMetadata
    readonly objects: GameSprite[]
    readonly legends: GameLegendTileSimple[]
    readonly sounds: GameSound[]
    readonly collisionLayers: CollisionLayer[]
    readonly rules: IRule[]
    readonly winConditions: WinConditionSimple[]
    readonly levels: LevelMap[]
    private readonly cacheSpriteSize: {spriteHeight: number, spriteWidth: number}
    private readonly letterSprites: Map<string, GameSprite>

    constructor(
        source: IGameCode,
        title: string,
        metadata: GameMetadata,
        objects: GameSprite[],
        legends: GameLegendTileSimple[],
        sounds: GameSound[],
        collisionLayers: CollisionLayer[],
        rules: ASTRule[],
        winConditions: WinConditionSimple[],
        levels: LevelMap[]
    ) {
        this.title = title
        this.metadata = metadata
        this.objects = objects
        this.legends = legends
        this.sounds = sounds
        this.collisionLayers = collisionLayers
        this.winConditions = winConditions
        this.levels = levels

        // assign an index to each GameSprite
        this.objects.forEach((sprite, index) => {
            sprite.allSpritesBitSetIndex = index
        })

        const ruleCache = new Map()
        const bracketCache = new Map()
        const neighborCache = new Map()
        const tileCache = new Map()
        this.rules = rules.map(rule => rule.simplify(ruleCache, bracketCache, neighborCache, tileCache))

        const firstSpriteWithPixels = this.objects.filter(sprite => sprite.hasPixels())[0]
        if (firstSpriteWithPixels) {
            const firstSpritePixels = firstSpriteWithPixels.getPixels(1, 1) // We don't care about these args
            this.cacheSpriteSize = {
                spriteHeight: firstSpritePixels.length,
                spriteWidth: firstSpritePixels[0].length
            }
        } else {
            // All the sprites are just a single color, so set the size to be 5x5
            this.cacheSpriteSize = {
                spriteHeight: 1,
                spriteWidth: 1
            }
        }

        // Create a collisionlayer for the letter sprites
        this.letterSprites = getLetterSprites(source)
        const letterCollisionLayer = new CollisionLayer(source, [...this.letterSprites.values()], () => {
            throw new Error(`BUG: Letter collision layers should not have a problem`)
        })
        this.collisionLayers.push(letterCollisionLayer)
    }

    _getSpriteByName(name: string) {
        return this.objects.find(sprite => sprite.getName().toLowerCase() === name.toLowerCase())
    }
    _getTileByName(name: string) {
        return this.legends.find(tile => tile.getName().toLowerCase() === name.toLowerCase())
    }

    getMagicBackgroundSprite() {
        let background: Optional<GameSprite> = this._getSpriteByName('background')
        if (!background) {
            const legendBackground = this.legends.find(tile => tile.spriteNameOrLevelChar.toLocaleLowerCase() === 'background')
            if (legendBackground) {
                if (legendBackground.isOr()) {
                    return null
                } else {
                    return legendBackground.getSprites()[0]
                }
            }
        }
        if (!background) {
            throw new Error(`ERROR: Game does not have a Background Sprite or Tile`)
        }
        return background
    }
    getPlayer(): IGameTile {
        const player = this._getSpriteByName('player') || this.legends.find(tile => tile.spriteNameOrLevelChar.toLocaleLowerCase() === 'player')
        if (!player) {
            throw new Error(`BUG: Could not find the Player sprite or tile in the game`)
        }
        return player
    }

    clearCaches() {
        for (const rule of this.rules) {
            rule.clearCaches()
        }
        for (const sprite of this.objects) {
            sprite.clearCaches()
        }
    }

    getSpriteSize() {
        return this.cacheSpriteSize
    }

    getLetterSprite(char: string) {
        const sprite = this.letterSprites.get(char)
        if (!sprite) {
            throw new Error(`BUG: Cannot find sprite for letter "${char}"`)
        }
        return sprite
    }
}
