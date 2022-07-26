// Basic rules worth remembering:
//     “this” always refers to an object.
//     “this” refers to an object which calls the function it contains.
//     In the global context “this” refers to either window object or is undefined if the ‘strict mode’ is used.

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

car.displayDetails(); // GA12345 Toyota

//But what if we want to borrow a method?
var myCarDetails =  car.displayDetails;
myCarDetails();//Well, this won’t work as the “this” will be now assigned to the global context which doesn’t have neither the registrationNumber nor the brand property.

// The bind() Method
    var myCarDetails = car.displayDetails.bind(car); 
    myCarDetails(); // GA12345 Toyota

    var car = { 
        registrationNumber: "GA12345",
        brand: "Toyota",
    
        displayDetails: function(ownerName){
            console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
        }
    }

    var myCarDetails = car.displayDetails.bind(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota
    myCarDetails()


    var pokemon = {
        firstname: 'Pika',
        lastname: 'Chu ',
        getPokeName: function() {
            var fullname = this.firstname + ' ' + this.lastname;
            return fullname;
        }
    };
    
    var pokemonName = function() {
        console.log(this.getPokeName() + 'I choose you!');
    };
    
    var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
    
    logPokemon(); // 'Pika Chu I choose you!'

    ////////////
    var pokemon = {
        firstname: 'Pika',
        lastname: 'Chu ',
        getPokeName: function() {
            var fullname = this.firstname + ' ' + this.lastname;
            return fullname;
        }
    };
    
    var pokemonName = function(snack, hobby) {
        console.log(this.getPokeName() + 'I choose you!');
        console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
    };
    
    var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
    
    logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms

    
//call() and apply() methods
// Similar but slightly different usage provide the call() and apply() methods which also belong to the Function.prototype property.
    var car = { 
        registrationNumber: "GA12345",
        brand: "Toyota"
    }

    function displayDetails(ownerName) {
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }

    displayDetails.apply(car, ["Vivian"]); // Vivian, this is your car: GA12345 Toyota
    displayDetails.call(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota


    var pokemon = {
        firstname: 'Pika',
        lastname: 'Chu ',
        getPokeName: function() {
            var fullname = this.firstname + ' ' + this.lastname;
            return fullname;
        }
    };
    
    var pokemonName = function(snack, hobby) {
        console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
    };
    
    pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
    pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms
    

    const person = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      const person2 = {
        firstName:"Mary",
        lastName: "Doe"
      }
      
      // This will return "Mary Doe"
      person.fullName.call(person2);
      // This will return "John Doe":
     person.fullName.call(person1);


    //The Difference Between call() and apply()
        // The difference is:
        //     The call() method takes arguments separately.
        //     The apply() method takes arguments as an array.

     const person = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
      }
      
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      
      person.fullName.call(person1, "Oslo", "Norway");
      person.fullName.apply(person1, ["Oslo", "Norway"]);
//Learning Exercise !!!
    var func = function() {
        console.log(this)
    }.bind(1);

    func();
    
    function checkFun(a, b, c){
        console.log(this);
        console.log(a);
        console.log(b);
        console.log(c);
    }
    checkFun.call(1,2,3,4);

//A Quick Guide to Call, Apply and Bind Methods
https://javascript.plainenglish.io/quick-guide-to-call-apply-and-bind-methods-in-javascript-5c00cd856cfa

    var obj = {num:2}

    var add =  function(a,b){
        return this.num+a+b
    }

    add.call(obj,3,1)
    add.apply(obj,[3,1])
    var bound = add.bind(obj);
    bound(3,1)

    add(3,1)