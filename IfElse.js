/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// Control Flow

// if-else

// Exercise 1
if (5 > 2) {
    console.log("Well done!");
}

//Exercise 2
if (10 > 5) {
    console.log("I did it!");
}

//Exercise 3
var firstName = "John";

if (firstName === "John") {
    console.log("Hello John!");
}

//Exercise 4
var firstName = "Greg";

if (firstName === "John") {
    console.log("Hello John!");
} else {
    console.log("You're not John!");
}

//Exercise 5
var age = 25;

if (age > 18) {
    console.log("Old enough!");
} else {
    console.log("Too young!");
}

// Exercise 6
var greeting;
var hour = new Date().getHours();

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);