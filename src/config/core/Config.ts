export abstract class Config<T> {
  protected readonly config: T;

  constructor(protected readonly rawConfig: unknown) {
    this.config = this.validate(rawConfig);
  }

  public get(): Readonly<T> {
    return Object.freeze({ ...this.config });
  }

  protected abstract validate(config: unknown): T;
}