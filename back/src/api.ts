import express from "express";

const articles = [
  { id: "a1", name: "Truc", price: 2.99, qty: 123 },
  { id: "a2", name: "Marteau", price: 5.99, qty: 34 },
];

const app = express.Router();

const articleGetMw = (req: express.Request, res: express.Response) => {
  res.json(articles);
};

app.get("/articles", articleGetMw);

export default app;
