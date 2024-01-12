// A JavaScript Proxy is an object that wraps another object (target) and intercepts the fundamental operations of the target object.

// The fundamental operations can be the property lookup, assignment, enumeration, and function invocations, etc.

// Proxy allows you to add custom behavior to an object or a function.

let proxy = new Proxy(target, handler);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
}


const handler = {
    get(target, property) {
        console.log(`Property ${property} has been read.`);
        return target[property];
    }
}

const proxyUser = new Proxy(user, handler);


console.log(proxyUser.firstName);
console.log(proxyUser.lastName);

Output:

// Property firstName has been read.
John
// Property lastName has been read.
Doe