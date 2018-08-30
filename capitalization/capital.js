//Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string with the same name, where the first letter is uppercase, and the rest is lowercase. I.e. “Peter”.
//Hint: use substring, toUpper, toLower and simple string concatenation

"use strict";

const name = "peter";
const capitalLetter = name.substring(0, 1).toUpperCase();
const capitalName = capitalLetter + name.substring(1);

console.log(capitalLetter);
console.log(capitalName);
