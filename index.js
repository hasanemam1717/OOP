const person = {};
person.name = "Hasan Emam";
person.age = 15;

// console.log(person);

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  changeName(name) {
    this.name = name;
    console.log(name);
  }
  sendMail(msg) {
    console.log("Sending the message to consol.", msg);
  }

  print() {
    console.log(this);
  }
}

const P1 = new Person("Hasan Emam", "hasanimam@web.com");
const P2 = new Person("Kamal Hosian", "Kamaml@web.com");

// console.log(P1);

P1.sendMail("Hello i want to be a backend developer.");
P1.changeName("Hasan Emam Naim");
P2.changeName("Mushfiq all  Naim");

P1.print();
P2.print();
