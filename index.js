const { Guardian, Student, Teacher } = require("./person");
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
// console.log(student.department.toString());

const credit = student.department.subjects.reduce((a, b) => {
  a = b.credit + a;
  return a;
}, 0);
// console.log(credit);

// create Teachers
// Teacher extends Person>UniPerson>Employee> = Teacher;
// console.log(department.subjects[1]);

const dean1 = new Teacher(1, "HE Ema", department.subjects[1]);
dean1.blood = "AB+";
dean1.department = department;
dean1.salary = 10000;
dean1.subject = "SWE";
dean1.employeeId = "EM0001";
dean1.contact = new Contact({
  id: 2,
  email: "he@gmail.com",
  phone: "0174444",
  address: new Address({
    id: 2,
    roadNo: "5A",
    city: "Rangpur",
    country: "Bangladesh",
    postalCode: 5700,
    region: "Town",
  }),
  alternativePhone: "015255251564",
});

// TODO dean's information

const teacher = new Teacher(2, "Md.mdj", department.subjects[0]);
const teacher1 = new Teacher(3, "Md.Hasa", department.subjects[2]);
teacher1.blood = "B+";
teacher1.department = department;
teacher1.salary = 20554;
teacher1.subject = "BBA";
teacher1.employeeId = "EM0002";
teacher1.contact = new Contact({
  id: 2,
  email: "hasan@gmail.com",
  phone: "0175050505",
  address: new Address({
    id: 2,
    roadNo: "5Ad5C",
    city: "Barishal",
    country: "Bangladesh",
    postalCode: 25800,
    region: "Town",
  }),
  alternativePhone: "01775455456",
});

department.addTeacher(dean1);
department.addTeacher(teacher1);
department.addTeacher(teacher);

// student.department.teachers.forEach((teacher, index) =>
//   console.log(`${index + 1}:${teacher.name} ${teacher.subject.name}`)
// );
console.log(dean1.department);
// console.log(department.teachers);
