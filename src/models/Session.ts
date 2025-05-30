export class Session {
  constructor(
    public id: number,
    public userId: number,
    public token: string,
    public createdAt: Date,
    public expiresAt: Date
  ) {}

  public toJSON(): Record<string, unknown> {
    return {
      id: this.id,
      userId: this.userId,
      token: this.token,
      createdAt: this.createdAt,
      expiresAt: this.expiresAt,
    };
  }

  public isExpired(): boolean {
    return this.expiresAt < new Date();
  }

  public extendSession(hours: number): void {
    const newExpiresAt = new Date();
    newExpiresAt.setHours(newExpiresAt.getHours() + hours);
    this.expiresAt = newExpiresAt;
  }

  public revoke(): void {
    this.expiresAt = new Date(0);
  }
}