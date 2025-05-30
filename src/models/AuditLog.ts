export class AuditLog {
  constructor(
    public id: number,
    public userId: number,
    public action: string,
    public details: string | null,
    public ipAddress: string | undefined,
    public timestamp: Date
  ) {
    this.validate();
  }

  public toJSON(): Record<string, unknown> {
    return {
      id: this.id,
      userId: this.userId,
      action: this.action,
      details: this.details,
      ipAddress: this.ipAddress,
      timestamp: this.timestamp,
    };
  }

  private validate(): void {
    if (this.userId <= 0) {
      throw new Error("Invalid user ID");
    }
    if (!this.action || this.action.trim().length < 1) {
      throw new Error("Action must be non-empty");
    }
  }

  public formatDetails(): string {
    return this.details ? JSON.stringify(this.details) : "No details provided";
  }
}