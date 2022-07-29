//In JavaScript, a regular function is executed based on the run-to-completion model. It cannot pause midway and then continues from where it paused. For example:
    function foo() {
        console.log('I');
        console.log('cannot');
        console.log('pause');
    }
// foo();
// Output:
//     I
//     cannot
//     pause

//ES6 introduces a new kind of function that is different from a regular function: function generator or generator.
// A generator can pause midway and then continues from where it paused. For example:
    function* generate() {
        console.log('invoked 1st time');
        yield 1;
        console.log('invoked 2nd time');
        yield 2;
    }
    let gen = generate();
    let result = gen.next();
    console.log(result);
    // invoked 1st time
    { value: 1, done: false }
    
    result = gen.next();
    console.log(result);
    // invoked 2nd time
    { value: 2, done: false }
//

//Passing Arguments to Generator Functions
// generator function
function* generatorFunc() {

    // returns 'hello' at first next()
    let x = yield 'hello';
    
    // returns passed argument on the second next()
    console.log(x);
    console.log('some code');

    // returns 5 on second next()
    yield 5;
    
}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next(6));
console.log(generator.next());

output

// {value: 'hello', done: false}
// 6
// some code
// {value: 5, done: false}
// {value: undefined, done: true}


//Generators are Used for Implementing Iterables
// creating iterable object
const iterableObj = {

    // iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false};
                 }
                else if (step === 2) {
                    return { value: '2', done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                }
                return { value: '', done: true };
            }
        }
    }
}

for (const i of iterableObj) {
 console.log(i);
}


////
// generator function
function* generatorFunc() {
  
    yield 1;
    yield 2;
    yield 3;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
    console.log(value);
}