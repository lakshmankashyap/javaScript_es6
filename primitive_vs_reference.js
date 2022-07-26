/* 
    Primitive values are atomic pieces of data while reference values are objects that might consist of multiple values.
    Stack and heap memory
    When you declare variables, the JavaScript engine allocates the memory for them on two memory locations: stack and heap.

    Static data is the data whose size is fixed at compile time. Static data includes:

    Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)
    Reference values that refer to objects.
    https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
*/

let name = 'John';
let age = 25;
// Because name and age are primitive values, the JavaScript engine stores these variables on the stack as shown in the following picture:

/* Unlike the stack, JavaScript stores objects (and functions) on the heap. The JavaScript engine doesn’t allocate a fixed amount of memory for these objects. Instead, it’ll allocate more space as needed. */
let name = 'John';
let age = 25;

let person = {
  name: 'John',
  age: 25,
};

// JavaScript allows you to add a property to a primitive value. However, it won’t take any effect. For example:
let name = 'John';
name.alias = 'Knight';

console.log(name.alias); // undefined
/* 
    Arguments are Passed by Value
    The parameters, in a function call, are the function's arguments.

    JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

    If a function changes an argument's value, it does not change the parameter's original value.

    Changes to arguments are not visible (reflected) outside the function.

 */
/* 
    Objects are Passed by Reference
    In JavaScript, object references are values.

    Because of this, objects will behave like they are passed by reference:

    If a function changes an object property, it changes the original value.

    Changes to object properties are visible (reflected) outside the function.
 */
    function callByValue(varOne, varTwo) { 
        console.log("Inside Call by Value Method"); 
        varOne = 100; 
        varTwo = 200; 
        console.log("varOne =" + varOne +"varTwo =" +varTwo); 
      } 
      let varOne = 10; 
      let varTwo = 20; 
      console.log("Before Call by Value Method"); 
      console.log("varOne =" + varOne +"varTwo =" +varTwo); 
      callByValue(varOne, varTwo) 
      console.log("After Call by Value Method"); 
      console.log("varOne =" + varOne +"varTwo =" +varTwo); 

//       output will be : 
//     --------------- 
//     Before Call by Value Method 
//     varOne =10 varTwo =20 
//     Inside Call by Value Method 
//     varOne =100 varTwo =200 
//     After Call by Value Method 
//     varOne =10 varTwo =20
// // However, when a variable refers to an object which includes array, the value is the reference to the object.

// Pass by Reference:
// In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affect the variable passed from outside the function. In Javascript objects and arrays follows pass by reference.

function callByReference(varObj) { 
  console.log("Inside Call by Reference Method"); 
  varObj.a = 100; 
  console.log(varObj); 
} 
let varObj = {a:1};
console.log("Before Call by Reference Method"); 
console.log(varObj);
callByReference(varObj) 
console.log("After Call by Reference Method"); 
console.log(varObj);
// output will be : 
// --------------- 
// Before Call by Reference Method 
// {a: 1} 
// Inside Call by Reference Method 
// {a: 100} 
// After Call by Reference Method 
// {a: 100}


// A reference value allows you to add, change, or delete properties at any time. For example:
/* 
    Summary
    Javascript has two types of values: primitive values and reference values.
    You can add, change, or delete properties to a reference value, whereas you cannot do it with a primitive value.
    Copying a primitive value from one variable to another creates a separate value copy. It means that changing the value in one variable does not affect the other.
    Copying a reference from one variable to another creates a reference so that two variables refer to the same object. This means that changing the object via one variable reflects in another variable. 
*/