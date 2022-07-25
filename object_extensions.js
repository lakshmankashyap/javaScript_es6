// The following shows the syntax of the Object.assign() method:
    Object.assign(target, ...sources)
    
    let widget = {
        color: 'red'
    };
    
    let clonedWidget = Object.assign({}, widget);
    
    console.log(clonedWidget); //{ color: 'red' }

    
    let box = {
        height: 10,
        width: 20
    };
    
    let style = {
        color: 'Red',
        borderStyle: 'solid'
    };
    
    let styleBox = Object.assign({}, box, style);
    
    console.log(styleBox);
    
    // {
    //     height: 10,
    //     width: 20,
    //     color: 'Red',
    //     borderStyle: 'solid'
    // }
    
    // If the source objects have the same property, the property of the later object overwrites the earlier one:
    let bo = {
        height: 10,
        width: 20,
        color: 'Red'
    };
    
    let styl = {
        color: 'Blue',
        borderStyle: 'solid'
    };
    
    let stylBox = Object.assign({}, bo, styl);
    
    console.log(styleBox);
    // {
    //     height: 10,
    //     width: 20,
    //     color: 'Blue',
    //     borderStyle: 'solid'
    // }
    

    // The following illustrates how to copy an object using three methods above:
    const person = {
        firstName: 'John',
        lastName: 'Doe'
    };
    
    
    // using spread ...
    let p1 = {
        ...person
    };
    
    // using  Object.assign() method
    let p2 = Object.assign({}, person);
    
    // using JSON
    let p3 = JSON.parse(JSON.stringify(person));
    
//you will learn about the JavaScript Object.is() to check if two values are the same.
    let amount = +0,
    volume = -0;
    console.log(Object.is(amount, volume));//false