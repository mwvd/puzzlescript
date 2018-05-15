const {readFileSync} = require('fs')
const glob = require('glob')
const pify = require('pify')

const Parser = require('./src/parser')
const UI = require('./src/ui')
const Engine = require('./src/engine')

let totalRenderTime = 0


async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function run() {

  const files = await pify(glob)('./gists/*/script.txt')
  console.log(`Looping over ${files.length} games...`)

  for (let filename of files) {
    console.log(`Parsing and rendering ${filename}`);
    const code = readFileSync(filename, 'utf-8')
    const {data, error, trace} = Parser.parse(code)

    if (error) {
      console.log(trace.toString())
      console.log(error.message)
      throw new Error(filename)
    } else {
      // console.log(data.title)
      // return

      const startTime = Date.now()

      // Draw the "last" level (after the messages)
      const level = data.levels.reverse().filter(level => level.isMap())[0]
      if (level) {
        const engine = new Engine(data)
        engine.setLevel(data.levels.indexOf(level))
        engine.on('cell:updated', cell => {
          UI.drawCellAt(data, cell, cell.rowIndex, cell.colIndex)
        })

        UI.renderScreen(data, engine.currentLevel)

        for (var i = 0; i < 100; i++) {
          await sleep(100)
          const changes = engine.tick()
          if (changes.length === 0) {
            break
          }
        }
      }

      UI.clearScreen()
      totalRenderTime += Date.now() - startTime
    }
  }

  console.log('-----------------------')
  console.log('Renderings took:', totalRenderTime)
  console.log('-----------------------')

}

run()
