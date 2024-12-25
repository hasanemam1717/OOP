const person = {};
person.name = "Hasan Emam";
person.age = 15;

// console.log(person);

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const P1 = new Person("Hasan Emam", "hasanimam@web.com");
const P2 = new Person("Hasan Emam1", "hasanimam1@web.com");
const p3 = new Person("Sakib All hasan", "sakib@web.com");

console.log(P1);
console.log(P2);
console.log(p3);
