import dotenv from "dotenv";
import { EnvConfig } from "./EnvConfig.js";

export class ConfigFactory {
  public static createEnvConfig(): EnvConfig {
    dotenv.config();
    return new EnvConfig(process.env);
  }
}