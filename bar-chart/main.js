"use strict";

window.addEventListener("DOMContentLoaded", init);

let bars;
let barsArray;
let dataArray = [];

function init() {
  console.log("init");

  // Get bars
  bars = document.querySelectorAll(".bar");

  // Convert bars to array
  barsArray = Array.from(bars);
  console.log(barsArray);

  // Start the loop
  setTimeout(loop, 100);

  // Make a for loop

  for () {
    
  }
}

function loop() {
  //add  array in the end
  barsArray.push(barsArray[0]);

  console.log(barsArray);

  //take one piece of the array
  barsArray = barsArray.slice(1);

  // Start the loop
  setTimeout(loop, 300);
}

function displayAllBars() {
  document.querySelectorAll(".bar").forEach(displayOneBar);
}

function displayOneBar(div, index, nodeList) {
  div.style.height = "120px";
}
//create data ? Math().random * 100;

//we have to use .forEach

//function for displaying and function for running

//loop through the bars and set the height accoring to the data
