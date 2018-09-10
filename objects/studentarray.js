"use strict";

//https://docs.google.com/document/d/1vEBWhG-oC0BZGRI7nY2D1l9-SCyCTUEyBK8enCaRekg/edit

const names = [
  "Harry Potter",
  "Ron Weasley",
  "Hermione Granger",
  "Neville Longbottom",
  "Luna Lovegood",
  "Cho Chang",
  "Justin Finch-Fletchly",
  "Draco Malfoy",
  "Albus Dumbledore",
  "Severus Snape"
];

const houses = {
  Gryffindor: "Gryffindor",
  Hufflepuff: "Hufflepuff",
  Ravenclaw: "Ravenclaw",
  Slytherin: "Slytherin"
};

const students = []; //empty array used for the pushed information

const student = {
  firstName: "",
  lastName: "",
  randomHouse: "",
  toString() {
    return this.firstName + " " + this.lastName;
  },
  splitName(fullName) {
    const firstSpace = fullName.indexOf(" ");
    this.firstName = fullName.substring(0, firstSpace);
    this.lastName = fullName.substring(firstSpace + 1);
  }
};

function createStudents() {
  names.forEach(createStudent); //loops through names, and says that for each name, run the function createStudent

  function createStudent(fullName) {
    const aStudent = Object.create(student); //create an variable with the properties inside student object
    aStudent.splitName(fullName); //run the function splitName

    //put the student in a random house
    const randomHouse = Object.keys(houses)[
      Math.floor(Math.random() * Object.keys(houses).length)
    ];
    aStudent.houses = randomHouse;

    students.push(aStudent); //push the information into the empty Array students
  }
}

createStudents();

//students.sort(); //sort students alphabetically by firstname

function sortByLastName(a, b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
}

students.sort(sortByLastName);
console.table(students);
