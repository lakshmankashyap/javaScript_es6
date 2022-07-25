// https://www.javascripttutorial.net/es6/javascript-let/
let variable_name;

// In JavaScript, blocks are denoted by curly braces {} , for example, the if else, for, do while, while, try catch and so on:
if(condition) {
    // inside a block
}


// See the following example:

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script

// JavaScript let and global object
var a = 10;
console.log(window.a); // 10

let b = 20;
console.log(window.b); // undefined



// JavaScript let and callback function in a for loop
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
output
5
5
5
5
5

// In ES5, you can fix this issue by creating another scope so that each callback function references a new variable. And to create a new scope, you need to create a function. Typically, you use the IIFE pattern as follows:

for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}


Output:

0
1
2
3
4

// In ES6, the let keyword declares a new variable in each loop iteration. Therefore, you just need to replace the var keyword with the let keyword to fix the issue:
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// To make the code completely ES6 style, you can use an arrow function as follows:

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
}

// Temporal death zone (TDZ)
{ // enter new scope, TDZ starts
    let log = function () {
        console.log(message); // messagedeclared later
    };

    // This is the TDZ and accessing log
    // would cause a ReferenceError

    let message= 'Hello'; // TDZ ends
    log(); // called outside TDZ
}

// =======================================   Const =======================================
// =======================================    =======================================

// ES6 provides a new way of declaring a constant by using the const keyword. The const keyword creates a read-only reference to a value.
const RATE = 0.1;
RATE = 0.2; // TypeError

// JavaScript const and Objects
    const person = { age: 20 };
    person.age = 30; // OK
    console.log(person.age); // 30
    // Even though the person variable is a constant, you can change the value of its property.
    // However, you cannot reassign a different value to the person constant like this:
    person = { age: 40 }; // TypeError

    const person = Object.freeze({age: 20});
    person.age = 30; // TypeError


    const company = Object.freeze({
        name: 'ABC corp',
        address: {
            street: 'North 1st street',
            city: 'San Jose',
            state: 'CA',
            zipcode: 95134
        }
    });
    company.address.country = 'USA'; // OK

// JavaScript const and Arrays
    const colors = ['red'];
    colors.push('green');
    console.log(colors); // ["red", "green"]

    colors.pop();
    colors.pop();
    console.log(colors); // []

    colors = []; // TypeError

// JavaScript const in a for loop
    for (const i = 0; i < scores.length; i++) { // TypeError
        console.log(scores[i]);
    }


    