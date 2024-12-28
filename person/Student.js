const UniPerson = require("./UniPerson");

const _studentId = Symbol("studentId");
const _guardian = Symbol("guardian");
const _exams = Symbol("exams");
const _fee = Symbol("fee");

class Student extends UniPerson {
  constructor(id, studentId, name, guardian, exams, fee) {
    super(id, name);
    this[_studentId] = studentId;
    this[_guardian] = guardian;
    this[_exams] = exams;
    this[_fee] = fee;
  }

  get studentId() {
    return this[_studentId];
  }
  get guardian() {
    return this[_guardian];
  }
  get exams() {
    return this[_exams];
  }
  get fee() {
    return this[_fee];
  }

  set guardian(value) {
    this[_guardian] = value;
  }
  set exams(value) {
    this[_exams] = value;
  }
  set fee(value) {
    this[_fee] = value;
  }

  addExam(exam) {
    this[_exams].push(exam);
  }
  toString() {
    return `${super.toString()} StudentID ${this[_studentId]}`;
  }
}
module.exports = Student;
