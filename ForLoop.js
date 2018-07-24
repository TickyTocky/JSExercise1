/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// Control Flow
// For Loop

// Exercise 1
var i;
for (i = 0; i < 10; i++) {
    console.log(i);
}

// Exercise 2
var i;
for (i = 5; i < 10; i++) {
    console.log(i);
}

// Exercise 3
var i;
for (i = 5; i <= 50; i = i + 5) {
    console.log(i);
}

// Exercise 4
var i;
for (i = 10; i > 0; i--) {
    console.log(i);
}

// Exercise 5
var text = "";
var food = ["Pizza", "Beans", "Tacos", "Fish", "Chicken"];
var i;

for (i = 0; i < food.length; i++) {
    text += "I love " + food[i] +". ";
}

console.log(text);

// Exercise 6
var text = "";
var i;

for (i = 1; i < 10; i = i + 2) {
    text += i + " ";
}

console.log(text);
