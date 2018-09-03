"use strict";

window.addEventListener("DOMContentLoaded", init);

let bars;
let barsArray;

function init() {
  console.log("init");

  // Get bars
  bars = document.querySelectorAll("div");

  // Convert bars to array
  barsArray = Array.from(bars);
  console.log(barsArray);

  loop();
}

function loop() {}
