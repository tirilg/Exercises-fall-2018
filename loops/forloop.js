//use debugger to jump over each step to see the loop happening
let counter;

for (counter = 0; counter < 10; counter++) {
  //console.log(counter); //loops through 0-9
}

//loops through and logs all numbers up to 9. then stops.

console.log(`after the loop, counter is ${counter}`);

//must put counter = 0; outside the for, otherwise it will not react outside

for (counter = 0; counter <= 10; counter++) {
  // console.log(counter); //loops through 1-10
}

for (counter = 10; counter >= 0; counter--) {
  //console.log(counter); //counts from 10 down to 0
}
//console.log("liftoff"); //run after the countdown is finished

for (counter = 1; counter <= 19; counter += 2) {
  //console.log(counter); //logs all the odd numbers from 1-19
}

for (counter = 1; counter <= 16777216; counter *= 2) {
  //console.log(counter); //logs numbers from 1-1577216, doubling each time
}

for (counter = 111; counter <= 138; counter += 3) {
  //console.log(counter); //logs all the numbers between 111-138 in steps of three
}

for (counter = 100; counter >= 0; counter -= 10) {
  //console.log(counter); //logs all numbers from 100 to 0 in 10 steps
}
