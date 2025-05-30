export class ServerMetric {
  constructor(
    public cpuUsage: number,
    public ramUsage: number,
    public diskUsage: number,
    public timestamp: Date,
    public totalRam?: number,
    public totalDisk?: number
  ) {
    this.validate();
  }

  public toJSON(): Record<string, unknown> {
    return {
      cpuUsage: this.cpuUsage,
      ramUsage: this.ramUsage,
      diskUsage: this.diskUsage,
      timestamp: this.timestamp,
      totalRam: this.totalRam,
      totalDisk: this.totalDisk,
    };
  }

  private validate(): void {
    if (this.cpuUsage < 0 || this.cpuUsage > 1) {
      throw new Error("CPU usage must be between 0 and 1");
    }
    if (this.ramUsage < 0 || this.ramUsage > 1) {
      throw new Error("RAM usage must be between 0 and 1");
    }
    if (this.diskUsage < 0 || this.diskUsage > 1) {
      throw new Error("Disk usage must be between 0 and 1");
    }
    if (this.totalRam && this.totalRam <= 0) {
      throw new Error("Total RAM must be positive");
    }
    if (this.totalDisk && this.totalDisk <= 0) {
      throw new Error("Total disk must be positive");
    }
  }
}