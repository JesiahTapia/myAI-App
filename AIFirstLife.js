// aiModule.js
class SimpleAI {
    constructor() {
        this.responses = [
            { pattern: /hello/i, response: "Hi there!" },
            { pattern: /how are you/i, response: "A little underdeveloped but doing okay!" },
            { pattern: /what is your name/i, response: "I am myAI created for your assistance." },
            { pattern: /who is the greatest basketball player/i, response: "LeBron James" },
            { pattern: /who runs 501database/i, response: "The Arnell Milhouse" },
            { pattern: /how much do you know/i, response: "As much as I have been told." },
            { pattern: /who is your creator/i, response: "DevAccelerators own Jesiah Tapia" }
        ]
        this.defaultResponse = "I'm not sure how to respond to that."
    }

    getResponse(input) {
        for (let { pattern, response } of this.responses) {
            if (pattern.test(input)) {
                return response
            }
        }
        return this.defaultResponse
    }
}

module.exports = SimpleAI
