const person = {};
person.name = "Hasan Emam";
person.age = 15;

// console.log(person);

class Person {
  constructor(name, email) {
    // How to private in js developer in class // use _
    this._name = name;
    this._email = email;
  }

  setName(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
  setEmail(email) {
    this._email = email;
  }
  getEmail() {
    return this._email;
  }

  print() {
    console.log(this);
  }
}

const P1 = new Person("Hasan Emam", "hasanimam@web.com");
const P2 = new Person("Kamal Hosian", "Kamaml@web.com");

P1.setName("Mokshudar Rahman");
P1.setEmail("mokshudarrahman@web.com");

console.log(P1.getEmail(), P1.getName());
