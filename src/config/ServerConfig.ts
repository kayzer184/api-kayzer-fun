import { EnvConfig } from "./EnvConfig.js";

export class ServerConfig {
  constructor(private readonly envConfig: EnvConfig) {}

  public get port(): number {
    return this.envConfig.get().PORT;
  }

  public get corsOptions() {
    return {
      origin: this.envConfig.get().CORS_ORIGIN,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    };
  }
}