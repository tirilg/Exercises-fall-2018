"use strict";

const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

/*
console.log(n1 + n2);
console.log(s1 + s2);
console.log(n1 + s2);
console.log(n1 + Number(s2)); //converts string to number
console.log(s1 + n2);

console.log(n2 * 2);
console.log(s2 * 2);
*/

//exercise, guess what answer will be
console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //-1
console.log(true + false); //1 because true is 1 and false is 0
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); //2
console.log("4px" - 2); //NaN
console.log(7 / 0); //Infinity (doesnt make sense)
console.log("  -9\n" + 5); //-9 5 (creates a new line with \n)
console.log("  -9\n" - 5); // -14 (ignored \n)
console.log(null + 1); // 1
console.log(undefined + 1); //NaN

// == vs ===
const m1 = 12;
const e1 = "12";

if (m1 == e1) {
  // == they are the same number (automatic type conversion)
  console.log("They are equal");
}

if (m1 === e1) {
  // === will only be true if they are the same type, one is a number, one is a string (no type conversion)
  console.log("They are REALLY equal");
}

// ALWAYS use === to be sure
