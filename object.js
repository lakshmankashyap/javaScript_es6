//Object property initializer shorthand

    function createMachine(name, status) {
        return {
            name: name,
            status: status
        };
    }

// For example, you can rewrite the createMachine() function in ES6 as follows:
    function createMachine(name, status) {
        return {
            name,
            status
        };
    }

//Similarly, you can construct an object literal from local variables as shown in the following example:

    let name = 'Computer',
        status = 'On';

    let machine = {
        name,
        status
    };
//Computed property name
    let nam = 'machine name';
    let machin = {
        [nam]: 'server',
        'machine hours': 10000
    };

    console.log(machin[nam]); // server
    console.log(machin['machine hours']); // 10000
//When a property name is placed inside the square brackets, the JavaScript engine evaluates it as a string. It means that you can use an expression as a property name. For example:
    let prefix = 'machine';
    let machi= {
        [prefix + ' name']: 'server',
        [prefix + ' hours']: 10000
    };

    console.log(machi['machine name']); // server
    console.log(machi['machine hours']); // 10000

//Concise method syntax
    let server = {
        name: "Server",
        restart: function () {
            console.log("The" + this.name + " is restarting...");
        }
    };

    // The following example rewrites the server object above using the ES6 syntax.
    let serve = {
        name: 'Server',
        restart() {
            console.log("The" + this.name + " is restarting...");
        }
    };
