console.log("About to start a server...");

const express = require("express");

const app = express();

app.get("/toto", (req, res) => {
  res.json({ toto: 123 });
});

app.listen(3000, () => {
  console.log("Server started with success on port 3000");
});
