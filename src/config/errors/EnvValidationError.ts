export class EnvValidationError extends Error {
  constructor(public readonly zodError: unknown) {
    super("Environment validation failed");
    Object.setPrototypeOf(this, EnvValidationError.prototype);
  }

  public formatErrors(): string {
    return JSON.stringify(this.zodError, null, 2);
  }
}