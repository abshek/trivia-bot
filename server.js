const app = require("express")()
require("dotenv").config()
const bodyParser = require("body-parser")
const TelegramBotService = require("node-telegram-bot-api")
const { port, token } = process.env
const TriviaService = require("./trivia.service")

app.use(bodyParser.json())

app.post("/message", async (req, res) => {
    // Handle messages
    
        // Create bot instance
        const { bot } = global

        // Check if we have received a number
        const { message } = req.body
        const { text, chat } = message
        console.log(`Received: ${text}`)
        if(!text || isNaN(text)) {
            bot.sendMessage(chat.id, "Please provide a valid number!")
            return res.status(200).send("Invalid number")
        }

        // Pass the number to Trivia Service & expect a response
        try {
            const trivia = await TriviaService.getTrivia(text)
            bot.sendMessage(chat.id, trivia)
            return res.status(200).send("Trivia sent successfully")
        } catch(e) {
            return res.status(500).send("Error encountered!")
        }

})

app.listen(port, () => {
    console.log(`Listening at ${port}...`)
    global["bot"] = new TelegramBotService(token)
})