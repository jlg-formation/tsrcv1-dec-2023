console.log("About to start a server...");

const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server started with success on port 3000");
});
