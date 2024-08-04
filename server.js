// const express = require('express');
// const bodyParser = require('body-parser');
// const fetch = require('node-fetch');

import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();

const TELEGRAM_API_TOKEN = "7498475358:AAGWblIimE71SNZT_e-PF9lSZc9kpv3AteU21";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}`;

app.use(bodyParser.json());

app.post("/webhook", async (req, res) => {
  const { message } = req.body;
  const chatId = message.chat.id;
  const userText = message.text;

  const response = await fetch("https://www.ndtv.com/rss");
  const text = await response.text();

  const match = text.match(/<title>(.*?)<\/title>/);
  const news = match ? match[1] : "No news found";

  const botMessage = `Latest News: ${news}`;
  await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: botMessage }),
  });

  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Server is running and webhook is set up");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
