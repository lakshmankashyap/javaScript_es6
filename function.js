//Introduction to JavaScript anonymous functions
(function () {
    //...
 });
 
 let show = function() {
    console.log('Anonymous function');
};

show();

//Immediately invoked function execution
(function() {
    console.log('IIFE');
})();

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName} + ' ' + person.lastName);
})(person);


// Default Parameters
    function say(message='Hi') {
        console.log(message);
    }

    say(); // 'Hi'
    say('Hello') // 'Hello'

//Arguments vs. Parameters
    function add(x, y) {
        return x + y;
    }
    
    add(100,200);
    //In this example, the x and y are the parameters of the add() function, and the values passed to the add() function 100 and 200 are the arguments.
    function say(message='Hi') {
        console.log(message);
    }
    
    say(); // 'Hi'
    say(undefined); // 'Hi'
    say('Hello'); // 'Hello'
/*recursive functions
    Summary
        A recursive function is a function that calls itself until it doesn’t
        A recursive function always has a condition that stops the function from calling itself.
*/
    function recurse() {
        if(condition) {
            // stop calling itself
            //...
        } else {
            recurse();
        }
    }

    function countDown(fromNumber) {
        console.log(fromNumber);
    
        let nextNumber = fromNumber - 1;
    
        if (nextNumber > 0) {
            countDown(nextNumber);
        }
    }
    countDown(3);
    // Output:
    //     3
    //     2
    //     1

    function sum(n) {
        if (n <= 1) {
          return n;
        }
        return n + sum(n - 1);
      }
      