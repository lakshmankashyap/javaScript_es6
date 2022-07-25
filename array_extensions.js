//JavaScript Array.of() examples
    let numbers = Array.of(3);
    console.log(numbers.length); // 1
    console.log(numbers[0]); // 3

    let chars = Array.of('A', 'B', 'C');
    console.log(chars.length); // 3
    console.log(chars); // ['A','B','C']


//Array.from() method that creates a new array from an array-like or iterable object.
    function arrayFromArgs() {
        return Array.from(arguments);
    }

    console.log(arrayFromArgs(1, 'A'));

// find() method to search for the first element in an array, which satisfies a test.
    let number = [1, 2, 3, 4, 5];

    console.log(number.find(e => e % 2 == 0));

    let customers = [{
        name: 'ABC Inc',
        credit: 100
    }, {
        name: 'ACME Corp',
        credit: 200
    }, {
        name: 'IoT AG',
        credit: 300
    }];

    console.log(customers.find(c => c.credit > 100)); //{ name: 'ACME Corp', credit: 200 }

//findIndex() method to find the first element that satisfies a given test.
    let ranks = [1, 5, 7, 8, 10, 7];
    let index = ranks.findIndex(rank => rank === 7);
    console.log(index); //2


    let rank = [1, 5, 7, 8, 10, 7];

    let inde = rank.findIndex(
    (rank, index) => rank === 7 && index > 2
    );

    console.log(inde);//5

    //The following example uses the Array findIndex() method to find the index of the first product whose price is greater than 1000:

    const products = [
        { name: 'Phone', price: 999 },
        { name: 'Computer', price: 1999 },
        { name: 'Tablet', price: 995 },
    ];

    const ind = products.findIndex(product => product.price > 1000);

    console.log(ind); // 1