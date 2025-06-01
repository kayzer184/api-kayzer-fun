import { z, ZodSchema } from "zod";
import { Config } from "./core/Config.js";
import { EnvValidationError } from "./errors/EnvValidationError.js";

export type EnvSchema = {
  NODE_ENV: "development" | "production";
  PORT: number;
  DATABASE_URL: string;
  JWT_SECRET: string;
  CORS_ORIGIN: string;
};

export class EnvConfig extends Config<EnvSchema> {
  private static schema = z.object({
    NODE_ENV: z.enum(["development", "production"])
      .default("development")
      .transform(val => val as "development" | "production"),
    
    PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string().min(32),
    CORS_ORIGIN: z.string().default("*")
  }) as z.ZodType<EnvSchema>;

  protected validate(config: unknown): EnvSchema {
    const result = EnvConfig.schema.safeParse(config);
    if (!result.success) {
      throw new EnvValidationError(result.error);
    }
    return result.data;
  }
}