interface FromTwelveHourTime {
  hour: number
  minute: number
  pm: boolean
}

export class Time {

  public static fromTwelveHourTime({ hour, minute, pm}: FromTwelveHourTime): Time {
    if (pm && hour !== 12) {
      hour += 12;
    }

    return new Time(`${hour}:${minute}`);
  }

  constructor(public twentyFourHourTime: string) { }

  get hour(): number {
    return this.hourAndMinute[0];
  }

  get twelveHour(): number {
    let hour = this.hour;

    if (hour > 12) {
      hour -= 12;
    }

    return hour;
  }

  get minute(): number {
    return this.hourAndMinute[1];
  }

  get meridiem(): string {
    return this.hour < 12 ? 'am' : 'pm';
  }

  prettyPrint(): string {
    return `${this.zeroPad(this.twelveHour)}:${this.zeroPad(this.minute)} ${this.meridiem}`;
  }

  private get hourAndMinute(): number[] {
    return this.twentyFourHourTime.split(':').map(n => parseInt(n, 0));
  }

  private zeroPad(num: number): string {
    return (num < 10 ? '0' : '') + num;
  }

}
