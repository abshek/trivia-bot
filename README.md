# Trivia bot
Server for a Telegram chat bot that responds with trivia related to a number it receives.

# Environment variables
Create a file ".env" at root level, and define the following environment variables:
- token - Received from BotFather
- port - For server to listen on

# Ready to go
- Start the server using "node server.js" command.
- Expose the port via a HTTPS URL
- Set Telegram webhook for this URL
- You should now be able to receive messages sent to your bot, on your server
