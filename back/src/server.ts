console.log("About to start a server...");

import express from "express";
import serveIndex from "serve-index";

import api from "./api";
import { Config } from "./interfaces/Config";

const config: Config = {
  port: 3000,
  publicDir: ".",
};

const setConfig = (options: Partial<Config>) => {
  Object.assign(config, options);
};

setConfig({ port: 5555 });

const app = express();

app.use((req, res, next) => {
  console.log("req: ", req.method, req.url);
  next();
});

app.use("/api", api);

app.use(express.static(config.publicDir));
app.use(serveIndex(config.publicDir, { icons: true }));

app.listen(config.port, () => {
  console.log(`Server started with success on port ${config.port}`);
});
