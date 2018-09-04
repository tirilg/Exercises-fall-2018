"use strict";

window.addEventListener("DOMContentLoaded", init);

let bar;
let barsArray;
let dataArray = [];
let counter;
let bars;

function init() {
  console.log("init");

  // Get bars
  bar = document.querySelectorAll(".bar");

  // Convert bars to array
  //barsArray = Array.from(bars);
  //console.log(barsArray);

  // Start the loop
  setTimeout(loop, 100);

  // Make a for loop

  for (counter = 0; counter < 40; counter++) {
    dataArray.push(Math.random() * 100);
  }
  // run the display function
  displayAllBars();

  function displayAllBars() {
    document.querySelectorAll(".bar").forEach(displayOneBar);
  }

  function displayOneBar(div, index, nodeList) {
    div.style.height = dataArray[index] + "px";
  }
}

function loop() {
  //add  array in the end
  //barsArray.push(barsArray[0]);

  bar = document.querySelectorAll(".bar");
  bars = document.querySelector(".myBars");
  bars.appendChild(bar[0]);

  console.log(barsArray);

  //take one piece of the array
  //barsArray = barsArray.slice(1);

  // Start the loop
  setTimeout(loop, 220);
}
