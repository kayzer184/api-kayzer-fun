export enum UserStatus {
  Active = "active",
  Pending = "pending",
  Banned = "banned",
}

export enum UserRole {
  User = "user",
  Moderator = "moderator",
  Admin = "admin",
  SuperAdmin = "superadmin",
  Owner = "owner",
}

export class User {
  private _passwordHash: string;

  constructor(
    public id: number,
    public name: string,
    public email: string,
    public role: UserRole,
    public status: UserStatus,
    passwordHash: string,
    public lastLogin: Date | null,
    public createdAt: Date
  ) {
    this._passwordHash = passwordHash;
    this.validate();
  }

  public getPasswordHash(): string {
    return this._passwordHash;
  }

  public setPasswordHash(newHash: string): void {
    if (!newHash) {
      throw new Error("Password hash cannot be empty");
    }
    this._passwordHash = newHash;
  }

  public toJSON(): Record<string, unknown> {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role,
      status: this.status,
      lastLogin: this.lastLogin,
      createdAt: this.createdAt,
    };
  }

  private validate(): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      throw new Error("Invalid email format");
    }
    if (!Object.values(UserStatus).includes(this.status)) {
      throw new Error("Invalid status");
    }
    if (!Object.values(UserRole).includes(this.role)) {
      throw new Error("Invalid status");
    }
  }

  public updateStatus(newStatus: UserStatus): void {
    if (!Object.values(UserStatus).includes(newStatus)) {
      throw new Error("Invalid status");
    }
    this.status = newStatus;
  }

  public updateLastLogin(): void {
    this.lastLogin = new Date();
  }

  public updateName(newName: string): void {
    this.name = newName;
  }

  public updateEmail(newEmail: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      throw new Error("Invalid email format");
    }
    this.email = newEmail;
  }

  public updateRole(newRole: UserRole): void {
    if (!Object.values(UserRole).includes(newRole)) {
      throw new Error("Invalid role");
    }
    this.role = newRole;
  }
}