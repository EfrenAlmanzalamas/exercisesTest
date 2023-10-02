export class GradeSchool {
    private roster: Record<number, string[]> = {};
    // roster() {
    //    this.students = {};
    //
    // }

    add(name: string, grade: number) {
        if (!this.roster[grade]) {
            this.roster[grade] = [];
        }
        this.roster[grade].push(name);
        this.roster[grade].sort();
    }

    grade(grade: number) {
        return this.roster[grade] || [];
    }
}