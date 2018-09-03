"use strict";
/*
function myFunc() {
  console.log("function runs");
}

//myFunc(); run it immediatly
setTimeout(myFunc, 5000); //function runs after 5 seconds

function writeFullName(firstName, lastName) {
  console.log(`Full name is ${firstName} ${lastName}`);
}

const firstName = "Peter";
const lastName = "Lind";

writeFullName(lastName);
*/

//split a name

function splitName(fullName) {
  const space = fullName.indexOf(" ");
  const firstName = fullName.substring(0, space);
  const lastName = fullName.substring(space + 1);
  console.log(`First name: ${firstName}
last name: ${lastName}`);
}

splitName("Peter Lind");
