const express = require("express");

const articles = [
  { id: "a1", name: "Truc", price: 2.99, qty: 123 },
  { id: "a2", name: "Marteau", price: 5.99, qty: 34 },
];

const app = express.Router();

app.get("/articles", (req, res) => {
  res.json(articles);
});

module.exports = app;
