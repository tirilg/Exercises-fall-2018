//Given a name string, e.g. “Peter Heronimous Lind” - split the string into three variables: firstName, middleName and lastName.
//Hint: use indexOf and substring (avoid substr, it is being deprecated).Expect the name to be a const - you can’t modify it.

"use strict";

const fullName = "Peter Heronimous Lind";

const firstSpace = fullName.indexOf(" ");
const firstName = fullName.substring(0, firstSpace);

const secondSpace = fullName.indexOf(" ", firstSpace + 1);
const middleName = fullName.substring(6, secondSpace);

const lastName = fullName.substring(16 + 1);

console.log(`firstspace at ${firstSpace}`);
console.log(`secondspace at ${secondSpace}`);

console.log(firstName);
console.log(middleName);
console.log(lastName);
