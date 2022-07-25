//Suppose that you have a function that returns a user object:
    function getUser(id) {

        if(id <= 0) {
            return null;
        }

        // get the user from database
        // and return null if id does not exist
        // ...
        
        // if user was found, return the user
        return {
            id: id,
            username: 'admin',
            profile: {
                avatar: '/avatar.png',
                language: 'English'
            }
        }
    }
    //The following uses the getUser() function to access the user profile:
    let user = getUser(1);
    let profile = user.profile;

    //Therefore, before accessing the avatar property, you need to check if the user is not null using the logical operator AND:
    let use = getUser(2);
    let profil = user && user.profile;
    
    //ES2020 introduced the optional chaining operator denoted by the question mark followed by a dot:
    let us = getUser(2);
    let profi = user ?. profile;
        //Technically, it is equivalent to the following:
        let u = getUser(2);
        let p = (user !== null || user !== undefined)
            ? user.profile
            : undefined;
//Stacking the optional chaining operator
let userr = getUser(-1);
let avatar = user ?. profile ?. avatar;

//Combining with the nullish coalescing operator
    let defaultProfile =  { default: '/default.png', language: 'English'};

    let userrr = getUser(2);
    let profilerr = user ?. profile ?? defaultProfile;

//Using optional chaining operator with function calls
    let file = {
        read() {
            return 'file content';
        },
        write(content) {
            console.log(`Writing ${content} to file...`);
            return true;
        }
    };
    let compressedData = file.compress();
    // Error:
    //     Uncaught TypeError: file.compress is not a function
    let compressedata = file.compress?.();


    function getUser(id, callback) {
        // get user
        // ...
    
        let user = {
            id: id,
            username: 'admin'
        };
    
        // test if the callback exists
        if ( callback ) {
            callback(user);
        }
    
        return user;
    }
    
    // By using the optional chaining operator, you can skip the test if the callback exists:
    function getUser(id, callback) {
        // get user
        // ...
    
        let user = {
            id: id,
            username: 'admin'
        };
    
        // test if the callback exists
        callback ?. (user);
    
    
        return user;
    }
    