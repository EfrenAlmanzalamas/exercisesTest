export class Clock {
  hour: number
  minute: number

  constructor(hour: unknown, minute?: unknown) {
    this.hour = Number(hour)
    this.minute = Number(minute || 0)
  }

  public toString(): string {

    let hours = ''
    let minutes = ''

    let totalMinutes = this.minute % 60
    let totalHours = this.hour + Math.floor(this.minute / 60)

    if (totalMinutes > 59) {
      totalHours += Math.floor(totalMinutes / 60);
    }

    hours = totalHours > 23 ? (totalHours > 24 ? `0${totalHours % 24}` : "00") : (totalHours < 10 ? `0${totalHours}` : `${totalHours}`);
    minutes = totalMinutes < 10 ? `0${totalMinutes}` : `${totalMinutes}`;
    return `${hours}:${minutes}`

  }

  public plus(minutes: unknown): Clock {
    //throw new Error('Remove this statement and implement this function')
    return this
  }

  public minus(minutes: unknown): Clock {
    //throw new Error('Remove this statement and implement this function')
    return this
  }

  public equals(other: unknown): unknown {
    //throw new Error('Remove this statement and implement this function')
    return false
  }
}



console.log(new Clock(201, 3001).toString())