export class Clock {
    private hours: number;
    private minutes: number;

    private normalize(): void {
        if (this.hours < 0) {
            this.hours += 24;
        }
        if (this.minutes < 0) {
            this.minutes += 60;
            this.hours--;
        }
        while (this.minutes >= 60) {
            this.minutes -= 60;
            this.hours++;
        }
        while (this.minutes < 0) {
            this.minutes += 60;
            this.hours--;
        }
        while (this.hours >= 24){
            this.hours -= 24;
        }
        while (this.hours < 0){
            this.hours += 24;
        }
        this.hours = (this.hours + 24) % 24;
    }
    constructor(hour: number, minute?: number) {

        this.hours = hour;
        this.minutes = minute || 0;
        this.normalize();
    }


    public toString(): string {
        return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`;
    }

    public plus(minutes: number): Clock {
        this.normalize();
        return new Clock(this.hours, this.minutes + minutes);
    }

    public minus(minutes: number): Clock {
        this.normalize();
        return new Clock(this.hours, this.minutes - minutes);
    }

    public equals(other: number): boolean {
        return this.toString() === other.toString();
    }
}