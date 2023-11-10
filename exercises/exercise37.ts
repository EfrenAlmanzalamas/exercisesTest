export class Allergies {
    private allergies: { [key: string]: number } = {
        eggs: 1,
        peanuts: 2,
        shellfish: 4,
        strawberries: 8,
        tomatoes: 16,
        chocolate: 32,
        pollen: 64,
        cats: 128,
    };
    private score: number;

    constructor(allergenIndex: number) {
        this.score = allergenIndex & 255;
    }

    public list(): string[] {
        const allergicTo: string[] = [];
        for (const [item, value] of Object.entries(this.allergies)) {
            if (this.score & value) {
                allergicTo.push(item);
            }
        }
        return allergicTo;
    }

    public allergicTo(allergen: string): boolean {
        return allergen in this.allergies && (this.score & this.allergies[allergen]) !== 0;
    }
}
