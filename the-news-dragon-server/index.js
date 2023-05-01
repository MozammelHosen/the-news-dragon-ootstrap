const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Load Data
const catagories = require("./data/catagories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Server In Running");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});
app.get("news", (req, res) => {
  res.send(news);
});
app.listen(port, () => {
  console.log(`Hello Port ${port}`);
});
