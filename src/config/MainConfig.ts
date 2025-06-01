import { EnvConfig } from "./EnvConfig.js";
import { ServerConfig } from "./ServerConfig.js";
import { DatabaseConfig } from "./DatabaseConfig.js";
import { ConfigFactory } from "./ConfigFactory.js";

export class MainConfig {
  public readonly env: EnvConfig;
  public readonly server: ServerConfig;
  public readonly database: DatabaseConfig;

  constructor() {
    this.env = ConfigFactory.createEnvConfig();
    this.server = new ServerConfig(this.env);
    this.database = new DatabaseConfig(this.env);
  }
}