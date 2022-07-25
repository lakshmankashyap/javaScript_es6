//The following shows the syntax of the startsWith() method:
    // String.startsWith(searchString [,position])
    const title = 'Jack and Jill Went Up the Hill';
    console.log(title.startsWith('Jack'));
    // Output:
    //     true

    const titl = 'Jack and Jill Went Up the Hill';
    console.log(titl.startsWith('Jack'));
    console.log(titl.startsWith('jack'));
    console.log(titl.startsWith('Jill', 9));
    Output:
        true
        false
        true

// Here is the syntax of the endsWith() method:
    const tit = 'Jack and Jill Went Up the Hill';

    console.log(tit.endsWith('Hill'));
    console.log(tit.endsWith('hill'));
    console.log(tit.endsWith('Up', 21));
    
    Output:
        true
        false
        true
// The includes() method determines whether a string contains another string:

    let email = 'admin@example.com';
    console.log(email.includes('@'));//true

    let str = 'JavaScript String';
    console.log(str.includes('Script')); //true

    let strr = 'JavaScript String';
    console.log(strr.includes('script'));//false
    
    let strrrr = 'JavaScript String';
    console.log(strrrr.includes('Script', 5)); //false


