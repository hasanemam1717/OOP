const Person = require("./Person");
const Teacher = require("./Teacher");
const Student = require("./Student");

const p = new Person("Hasan Emam", "hasan@web.com");
const t = new Teacher(
  "Sgufa Taranum",
  "segufa@gmail.com",
  "Computer fundamental",
  25000
);
const s = new Student(
  "Nifad Joy",
  "joy@gmail.com",
  "Computer,Maths,Etc",
  40000
);
console.log(p);
console.log(s);
console.log(t);
