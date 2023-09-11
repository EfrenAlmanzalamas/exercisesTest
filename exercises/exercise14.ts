export class Robot {
    constructor(
        private name: string = Robot.releaseNames()
    ) {}


    public getName(): string {
        return this.name;
    }

    public resetName(): void {
        this.name = Robot.releaseNames();
    }

    public static releaseNames(): string {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        let name = '';
        for (let i = 0; i < 2; i++) {
            name += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        for (let i = 0; i < 3; i++) {
            name += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return name;
    }

}