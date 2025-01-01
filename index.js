const { Guardian, Student } = require("./person");
const { Contact, Address } = require("./contact");
const { Department, Subject, Exam } = require("./university");

// Guardian ID 1

const guardian = new Guardian(1, "Mr.Khaled ", "BSC teacher", 2500);
guardian.blood = "B+";
guardian.contact = new Contact({
  id: 1,
  email: "khaled@gmail.com",
  phone: "01717680772",
});
guardian.contact.address = new Address({
  id: 1,
  roadNo: "6B",
  city: "Dhaka city",
  region: "Dhaka",
  country: "Bangladesh",
  postalCode: "1200",
});
// console to to string
// console.log(guardian.toString());
// when "is" added to the clg it works to call the toString
// console.log(guardian.contact + "");
// how to access the nested class variable
// console.log(guardian.contact.address.country);

// Student ID:1
const student = new Student(1, "ST-01", "Rafiq Islam", guardian);
student.blood = "AB+";
student.contact = new Contact({
  id: 2,
  email: "rafiq@gmail.com",
  phone: "0170001146",
  alternativePhone: student.guardian.contact.phone,
  address: student.guardian.contact.address,
});

// Department ID:1
const department = new Department({
  id: 1,
  name: "SWE",
});
student.department = department;
department.subjects = [
  new Subject(1, "Computer Fundamental", 4),
  new Subject(2, "HTML_Hyper text markup language", 4),
  new Subject(3, "CSS", 4),
];
console.log(student.department.toString());

const credit = student.department.subjects.reduce((a, b) => {
  a = b.credit + a;
  return a;
}, 0);
console.log(credit);
