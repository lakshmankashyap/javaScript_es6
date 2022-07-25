// Classes prior to ES6 revisited
    function Person(name) {
        this.name = name;
    }

    Person.prototype.getName = function () {
        return this.name;
    };

    var john = new Person("John Doe");
    console.log(john.getName());

    console.log(john instanceof Person); // true
    console.log(john instanceof Object); // true

//ES6 class declaration
    class Person {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }

    let john = new Person("John Doe");
    let name = john.getName();
    console.log(name); // "John Doe"

    //Introduction to the JavaScript getters and setters

    class Person {
        constructor(name) {
            this.setName(name);
        }
        getName() {
            return this.name;
        }
        setName(newName) {
            newName = newName.trim();
            if (newName === '') {
                throw 'The name cannot be empty';
            }
            this.name = newName;
        }
    }
    
    let person = new Person('Jane Doe');
    console.log(person); // Jane Doe
    
    person.setName('Jane Smith');
    console.log(person.getName()); // Jane Smith