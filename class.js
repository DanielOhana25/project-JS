export class Class {
  constructor(ageClass, day, time) {
    this.ageClass = ageClass;
    this.day = day;
    this.time = time;
    this.teacher = {};
    this.students = [];
  }
  setTeacher(teacher) {
    this.teacher = teacher;
  }
  setStudent(student) {
    this.students.push(student);
  }
}
