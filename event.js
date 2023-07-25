console.log(1)
setTimeout(() => {
    queueMicrotask(() => {
       console.log(2)
     });
  console.log(3)
});
Promise.resolve().then(() => console.log(4))
queueMicrotask(() => {
    console.log(5)
    queueMicrotask(() => {
        console.log(6)
    });
});
console.log(7)


// ..........
console.log(1);
setTimeout(function foo() {
    console.log("foo");
}, 6500);
setTimeout(function boo() {
    console.log("boo");
}, 2500);
setTimeout(function baz() {
    console.log("baz");
}, 0);
for (const value of ["A", "B"]) {
    console.log(value);
}
function two() {
    console.log(2);
}
Promise.resolve().then(() => console.log('Promise'))

two();
// Output:
// 1
// 'A'
// 'B'
// 2
// 'baz'
// 'boo'
// 'foo'