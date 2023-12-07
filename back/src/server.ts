console.log("About to start a server...");

import express from "express";
import serveIndex from "serve-index";

import api from "./api";

const app = express();

app.use((req, res, next) => {
  console.log("req: ", req.method, req.url);
  next();
});

app.use("/api", api);

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(3000, () => {
  console.log("Server started with success on port 3000");
});
