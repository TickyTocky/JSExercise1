/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// Control Flow
// Break and Continue

// Exercise 1
var text = "";
var i;
for (i = 1; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// Exercise 2
var text = "";
var i;
for (i = 1; i < 10; i++) {
    if (i === 5) continue;
    console.log(i);
}

// Exercise 3
var text = "";
var i;
for (i = 1; i < 10; i++) {
    if (i === 5 || i === 7) continue;
    console.log(i);
}

// Exercise 4
var text;
  var favCar = "BMW";

  switch(favCar) {
    case "BMW":
      text = "German car";
      break;      
    case "Ford":
      text = "American car";
      break;      
    case "Peugeot":
      text = "French car";
      break;
    default:
      text = "Unknown car name";
  }
  console.log(text);

// Exercise 5
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = ""
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + " ";
}
console.log(text);