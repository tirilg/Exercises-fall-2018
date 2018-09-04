const weasleys = [
  "Arthur",
  "Molly",
  "Bill",
  "Percy",
  "Charlie",
  "Fred",
  "George",
  "Ron",
  "Ginny"
];

function display(arr) {
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
  }
}

display(weasleys);

function indexOf(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Ginny") {
      //console.log(i);
    }
  }
}

indexOf(weasleys);

function replace(arr, search, replace) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Ron") {
      arr[i] = "Harry";
    }
    //console.log(arr[i]);
  }
}

replace(weasleys);

function remove(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Ginny") {
      arr.splice(i, 1);
    }
    console.log(arr[i]);
  }
}

remove(weasleys);
