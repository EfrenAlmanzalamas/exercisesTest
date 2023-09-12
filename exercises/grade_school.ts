export class GradeSchool {

  constructor(
    private internalRoster: object = {}
  ) { }

  roster() {

    let roster = {}

    for (let key in this.internalRoster) {
      roster = {
        ...roster,
        [key]: [...this.internalRoster[key as keyof typeof this.internalRoster]]
      }
    }

    return roster
  }

  add(name: string, grade: number) {
    for (let key in this.internalRoster) {
      let gradeList = this.internalRoster[key as keyof typeof this.internalRoster] as string[]
      if (gradeList.includes(name)) {
        gradeList.splice(gradeList.indexOf(name), 1)
        this.internalRoster = {
          ...this.internalRoster,
          [key]: gradeList
        }
      }
    }

    this.internalRoster = {
      ...this.internalRoster,
      [grade]: [
        ...this.internalRoster[grade as keyof typeof this.internalRoster] || [],
        name].sort()
    }
  }

  grade(grade: number) {
    return [...this.internalRoster[grade as keyof typeof this.internalRoster] || []]
  }

}

const school = new GradeSchool()
school.add('Juan', 2)
school.add('Juan', 1)

// console.log(school.grade(2))