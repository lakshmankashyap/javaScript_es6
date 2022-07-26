// https://www.javascripttutorial.net/es6/javascript-promises/

    //1.
    const promise = new Promise((resolve, reject) => {
        // contain an operation
        // ...
    
        // return the state
        if (success) {
        resolve(value);
        } else {
        reject(error);
        }
    });


    function getUsers() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([
              { username: 'john', email: 'john@test.com' },
              { username: 'jane', email: 'jane@test.com' },
            ]);
          }, 1000);
        });
      }
      
      function onFulfilled(users) {
        console.log(users);
      }
      
      const promisee = getUsers();
      promisee.then(onFulfilled);


    //In this example, the getUsers() function always succeeds. To simulate the error, we can use a success flag like the following:

        let success = true;

        function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            if (success) {
                resolve([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
                ]);
            } else {
                reject('Failed to the user list');
            }
            }, 1000);
        });
        }

        function onFulfilled(users) {
        console.log(users);
        }
        function onRejected(error) {
        console.log(error);
        }

        const promis = getUsers();
        promis.then(onFulfilled, onRejected);

//2. Promise Chaining

    //promise chaining pattern that chains the promises to execute asynchronous operations in sequence.

    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3 * 100);
    });
    
    p.then((result) => {
        console.log(result); // 10
        return result * 2;
    }).then((result) => {
        console.log(result); // 20
        return result * 3;
    }).then((result) => {
        console.log(result); // 60
        return result * 4;
    });
    
    Output:
        10
        20
        60


        // functions illustrate the three asynchronous operations:
        function getUser(userId) {
            return new Promise((resolve, reject) => {
                console.log('Get the user from the database.');
                setTimeout(() => {
                    resolve({
                        userId: userId,
                        username: 'admin'
                    });
                }, 1000);
            })
        }
        
        function getServices(user) {
            return new Promise((resolve, reject) => {
                console.log(`Get the services of ${user.username} from the API.`);
                setTimeout(() => {
                    resolve(['Email', 'VPN', 'CDN']);
                }, 3 * 1000);
            });
        }
        
        function getServiceCost(services) {
            return new Promise((resolve, reject) => {
                console.log(`Calculate the service cost of ${services}.`);
                setTimeout(() => {
                    resolve(services.length * 100);
                }, 2 * 1000);
            });
        }



        getUser(100)
            .then(getServices)
            .then(getServiceCost)
            .then(console.log);

            // Get the user from the database.
            // Get the services of admin from the API.
            // Calculate the service cost of Email,VPN,CDN.
            // 300

// Differences 👬
// Promise.all will reject as soon as one of the Promises in the array rejects.
// Promise.allSettled will never reject, it will resolve once all Promises in the array have either rejected or resolved.

//The Promise.all() method returns a single promise that resolves when all the input promises have been resolved. The returned promise resolves to an array of the results of the input
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
        }, 1 * 1000);
    });
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
        }, 2 * 1000);
    });
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
        }, 3 * 1000);
    });
    
    Promise.all([p1, p2, p3]).then((results) => {
        const total = results.reduce((p, c) => p + c);
    
        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
    });

    // Output

    // The first promise has resolved
    // The second promise has resolved
    // The third promise has resolved
    // Results: 10,20,30
    // Total: 60
  
    //Rejected promises example
    const p11 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The first promise has resolved');
            resolve(10);
        }, 1 * 1000);
    
    });
    const p12 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The second promise has rejected');
            reject('Failed');
        }, 2 * 1000);
    });
    const p13 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The third promise has resolved');
            resolve(30);
        }, 3 * 1000);
    });
    
    
    Promise.all([p11, p12, p13])
    .then(value => console.log(`Resolved: ${value}`))// never execute
    .catch(reason => console.log(`Rejected: ${reason}`));
    
    // Output
    //     The first promise has resolved
    //     The second promise has rejected
    //     Rejected: Failed
    //     The third promise has resolved

// The Promise.race() static method accepts a list of promises as an iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise.

// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

    const p111 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The first promise has resolved');
            resolve(10);
        }, 1 * 1000);

    });

    const p112 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The second promise has resolved');
            resolve(20);
        }, 2 * 1000);
    });


    Promise.race([p111, p112])
        .then(value => console.log(`Resolved: ${value}`))
        .catch(reason => console.log(`Rejected: ${reason}`));

        // Output:

        //     The first promise has resolved
        //     Resolved: 10
        //     The second promise has resolved

        const p121 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The first promise has resolved');
                resolve(10);
            }, 1 * 1000);
        
        });
        
        const p232 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The second promise has rejected');
                reject(20);
            }, 2 * 1000);
        });
        
        
        Promise.race([p121, p232])
            .then(value => console.log(`Resolved: ${value}`))
            .catch(reason => console.log(`Rejected: ${reason}`));
        
            // Output
            //     The first promise has resolved
            //     Resolved: 10
            //     The second promise has rejected
    
// If one of the promises in the iterable object is fulfilled, the Promise.any() returns a single promise that resolves to a value which is the result of the fulfilled promise:

// Promise.any() takes an iterable of Promise objects. It returns a single promise that fulfills as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

    // All promises fulfilled example
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log('Promise 1 fulfilled');
            resolve(1);
            }, 1000);
        });
        
        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log('Promise 2 fulfilled');
            resolve(2);
            }, 2000);
        });
        
        const p = Promise.any([p1, p2]);
        p.then((value) => {
            console.log('Returned Promise');
            console.log(value);
        });
        
        //   Output:
        //     Promise 1 fulfilled
        //     Returned Promise
        //     1
        //     Promise 2 fulfilled

    //One promise rejected example

        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log('Promise 1 rejected');
            reject('error');
            }, 1000);
        });
        
        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log('Promise 2 fulfilled');
            resolve(2);
            }, 2000);
        });
        
        const p = Promise.any([p1, p2]);
        p.then((value) => {
            console.log('Returned Promise');
            console.log(value);
        });
        
        
        //   Output:
        //     Promise 1 rejected
        //     Promise 2 fulfilled
        //     Returned Promise
        //     2

    //All promises rejected example
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log('Promise 1 rejected');
            reject('error1');
            }, 1000);
        });
        
        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log('Promise 2 rejected');
            reject('error2');
            }, 2000);
        });
        
        const p = Promise.any([p1, p2]);
        p.catch((e) => {
            console.log('Returned Promise');
            console.log(e, e.errors);
        });

        
        //   Output:
        //     Promise 1 rejected
        //     Promise 2 rejected
        //     Returned Promise
        //     [AggregateError: All promises were rejected] [ 'error1', 'error2' ]
//ES2020 introduced the Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The first promise has resolved');
            resolve(10);
        }, 1 * 1000);

    });

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The second promise has rejected');
            reject(20);
        }, 2 * 1000);
    });

    Promise.allSettled([p1, p2])
        .then((result) => {
            console.log(result);
        });


