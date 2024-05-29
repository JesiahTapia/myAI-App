// index.js
const SimpleAI = require('./AIFirstLife')
const readline = require('readline')

const ai = new SimpleAI()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Simple AI Module. Type 'exit' to quit.")
rl.setPrompt('You: ')
rl.prompt()

rl.on('line', (line) => {
    if (line.trim().toLowerCase() === 'exit') {
        rl.close()
        return
    }
    const response = ai.getResponse(line.trim())
    console.log(`AI: ${response}`)
    rl.prompt()
})

rl.on('close', () => {
    console.log('Goodbye!')
    process.exit(0)
})
