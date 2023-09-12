export class GradeSchool {

  constructor(
    private internalRoster: object = {}
  ) { }

  roster() {
    const localRoster = { ...this.internalRoster }
    return localRoster
  }

  add(name: string, grade: number) {

    let studentExists = false

    for (let key in this.internalRoster) {
      let gradeList = this.internalRoster[key as keyof typeof this.internalRoster] as string[]

      console.log(gradeList);


      if (gradeList.includes(name)) {
        studentExists = true
      }
    }

    console.log(studentExists);


    this.internalRoster = {
      ...this.internalRoster,
      [grade]: [
        ...this.internalRoster[grade as keyof typeof this.internalRoster] || [],
        name].sort()
    }
  }

  grade(grade: number) {
    // console.log(this.roster());

    return [...this.internalRoster[grade as keyof typeof this.internalRoster] || []]
  }

}

const school = new GradeSchool()
school.add('Juan', 2)
school.add('Juan', 1)

// console.log(school.grade(2))