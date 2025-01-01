const _id = Symbol("id");
const _name = Symbol("name");
const _contact = Symbol("contact");
const _blood = Symbol("blood");
class Person {
  // create constructor with private property use _ and declare variable Symbol
  constructor(id, name) {
    this[_id] = id;
    this[_name] = name;
    this[_contact] = null;
    this[_blood] = null;
  }
  //   create getter variable to get data from this class.
  get id() {
    return this[_id];
  }
  get name() {
    return this[_name];
  }
  get blood() {
    return this[_blood];
  }
  get contact() {
    return this[_contact];
  }

  // create setter variable to set data from this class.

  set name(value) {
    this[_name] = value;
  }
  set contact(value) {
    this[_contact] = value;
  }
  set blood(value) {
    this[_blood] = value;
  }
  //   create toString method to work when the task with string
  toString() {
    return `ID:${this[_id]} Name:${this[_name]}`;
  }
}

module.exports = Person;
