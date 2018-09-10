"use strict";

//object literal
/*const student1 = {
  firstName: "Harry",
  lastName: "Potter"
};*/

//dot notation
//console.log(student1.firstName);

//you can also create the method when you create the object

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
  toString: function() {
    return this.firstName + " " + this.lastName;
  }
};

const student2 = {
  firstName: "Ron",
  lastName: "Weasley"
};

//has to be uppercase O. The order is because it makes sure student 2 has the same prototype as student 1
Object.setPrototypeOf(student2, student1);

student1.sayHi = function() {
  return "Hi, " + this.firstName;
};

console.log(student1);
console.log("student is: " + student1);
console.log(`student is: ${student1}`);

console.log(student2);
console.log("student is: " + student2);
console.log(`student is: ${student2}`);

/*function ourToString() {
  //return student1.firstName + " " + student1.lastName;
  //using this instead of student1 returns both objects
  return this.firstName + " " + this.lastName;
}

//you can remove this after adding the method directly to the object, on line 22
//student1.toString = ourToString;

console.log(student1);
console.log("student is: " + student1);
console.log(`student is: ${student1}`);

student2.toString = ourToString;

console.log(student2);
console.log("student is: " + student2);
console.log(`student is: ${student2}`);

//sort students
function sortIntoHouse(student, house) {
  student.house = house;
}

sortIntoHouse(student1, "Gryffindor");
sortIntoHouse(student2, "Gryffindor");
*/
