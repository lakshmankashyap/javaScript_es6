/* 
  A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
 */

/* 
  Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function.
*/
var a = 10; // variable a assigned to 10

var func = function () {
  // outermost function
  var b = 20;
  console.log("a and b is accessible (outer):", a, b);
  var innerFunc = function () {
    // innermost function
    var c = 30;
    console.log("a and b and c is accessible (innner):", a, b, c);
  };
  innerFunc();
  return;
};
func(); // invoke function func
console.log("only a is accessible (global):", a);
/* Output
  0.92s
  a and b is accessible (outer): 10 20
  a and b and c is accessible (innner): 10 20 30
  only a is accessible (global): 10 
*/

/* 
  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
  In other words, a closure gives you access to an outer function's scope from an inner function.
 */
//Closure
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

//Here's a slightly more interesting example—a makeAdder function:
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
