import { EnvConfig } from "./EnvConfig.js";

export class DatabaseConfig {
  constructor(private readonly envConfig: EnvConfig) {}

  public get connectionUrl(): string {
    return this.envConfig.get().DATABASE_URL;
  }
}