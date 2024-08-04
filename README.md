**Project Brief: Telegram News Bot
Overview
This project is a Telegram bot that provides users with the latest news from NDTV's RSS feed. When a user sends a message to the bot, it fetches the most recent headline from NDTV and responds with it.

Technologies Used
Node.js: A JavaScript runtime used to build the server-side application.
Express.js: A web framework for Node.js used to set up the server and handle HTTP requests.
node-fetch: A module used to make HTTP requests to the NDTV RSS feed.
Telegram Bot API: Used to interact with Telegram users through a bot.
Project Structure
server.js: The main file that sets up the Express server and defines the route for the Telegram webhook.
Features
Webhook Setup:

The bot uses a webhook to receive updates from Telegram. The webhook URL is set to point to the server's endpoint.
Fetch News:

When a user sends a message, the bot fetches the latest news from the NDTV RSS feed.
Respond to Users:

The bot extracts the headline from the RSS feed and sends it back to the user via Telegram.
