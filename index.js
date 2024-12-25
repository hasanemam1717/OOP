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
  // that is a getter function and it works like a property not methods but it look like a methods.
  get name() {
    return this._name;
  }

  //   that is setter function it work to set a new value;
  set name(value) {
    if (value === "H") {
      console.log("Ei nam dis na bhai eta boss er nam.");
      return;
    }
    this._name = value;
  }

  get email() {
    return this._email;
  }

  print() {
    console.log("Class name Person" + this + "");
  }

  //   we can use toString to avoid consol.log and string concat to string like p1 + " "

  toString() {
    return `Name:${this._name} and Email:${this._email}`;
  }
}

const P1 = new Person("Hasan Emam", "hasanimam@web.com");
const P2 = new Person("Kamal Hosian", "Kamaml@web.com");
P2.name = "Kamal Hoasain";
// console.log(P2.name);
P2.print();
