import { MainConfig } from "./config/MainConfig.js";
import express from "express";

const config = new MainConfig();
const app = express();

console.log(config);

app.listen(config.server.port, () => {
  console.log(`Server running on port ${config.server.port}`);
}); 