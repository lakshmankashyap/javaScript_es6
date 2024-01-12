/* 
https://www.youtube.com/playlist?list=PLjpp5kBQLNTSvHo6Rp4Ky0X8x_MabmKye

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, 
variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.
 */
/* 
Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase, before the actual code execution. This means that you can use variables and functions before they are declared in your code.

 */
// The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared:

carName1 = "Volvo";
let carName1;
// This will result in a ReferenceError:

// Using a const variable before it is declared, is a syntax error, so the code will simply not run.
// carName2 = "Volvo";
// const carName2;

// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.

// Example 1 does not give the same result as Example 2:

var x = 5; // Initialize x
var y = 7; // Initialize y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y; // Display x and y

var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y; // Display x and y

var y = 7; // Initialize y

// Hoisting
function codeHoist() {
  a = 10;
  let b = 50;
}
codeHoist();

console.log(a); // 10
console.log(b); // ReferenceError : b is not defined

fun(); // Calling before declaration

function fun() {
  // Declaring
  console.log("Function is hoisted");
}
// Function is hoisted

fun(); // Calling the expression

let fun = () => {
  // Declaring
  let name = "Mukul Latiyan";
  console.log(name);
};
// ReferenceError: Cannot access 'fun' before initialization

function fun() {
  let name;
  console.log(name);
  name = "Mukul Latiyan";
}
fun(); // undefined

console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10

// Behind the scenes, it's interpreted somewhat like this during execution:
var myVar; // Declaration is hoisted
console.log(myVar); // undefined
myVar = 10; // Initialization happens at the original position
console.log(myVar); // 10

sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}

// However, function expressions don’t behave the same way:
sayHi(); // Throws an error

var sayHi = function () {
  console.log("Hi!");
};

// So exactly how are var/let/const and functions hoisted.

console.log(a); // undefined
console.log(b); // ReferenceError
console.log(c); // ReferenceError

var a = 10;
let b = 20;
const c = 30;

greet1();
greet2();
greet3();
greet4();

// function declaration is fully hoisted
function greet1() {
  console.log("HELLO");
}

// TypeError: greet2 is not a function
var greet2 = function () {
  console.log("HELLO");
};

// ReferenceError: Cannot access 'greet3' before initialization
let greet3 = function () {
  console.log("HELLO");
};

// ReferenceError: Cannot access 'greet4' before initialization
const greet4 = function () {
  console.log("HELLO");
};

// Function declaration is fully hoisted
function greet11() {
  console.log("HELLO");
}

// Function declaration is also hoisted, and you can call it before the declaration
greet11();

// Function expressions (var, let, const) are not fully hoisted, so you need to move the declarations above the calls
var greet22 = function () {
  console.log("HELLO");
};
greet22();

let greet33 = function () {
  console.log("HELLO");
};
greet33();

const greet44 = function () {
  console.log("HELLO");
};
greet44();
