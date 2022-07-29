/* 
What is currying in JavaScript? Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.
 */

// Noncurried version//
const add = (a, b, c)=>{
    return a+ b + c
}
console.log(add(2, 3, 5)) // 10

// Curried version//
const addCurry =(a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10


function sendRequest(greet){
    return function(name){
        return function(message){
            return `${greet} ${name}, ${message}`
        }
    }
}
sendRequest('Hello')('John')('Please can you add me to your Linkedin network?')

// when we only pass some of the args, we get a partial application
const partialApplication = curried(1)(2);
// we can finish our curried function by passing remaining args
const finalResult = partialApplication(3);
// this is also the equivalent of
const alsoFinalResult = curried(1)(2)(3);


// why should i use curring function

const createURL = (baseURL, path) => {
    const protocol = "https";
    return `${protocol}://${baseURL}/${path}`;
  };
  
// create URLs for our main site
const homeURL = createURL("mysite.com", "");
const loginURL = createURL("mysite.com", "login");
const productsURL = createURL("mysite.com", "products");
const contactURL = createURL("mysite.com", "contact-us");

// create URLs for our careers site
const careersHomeURL = createURL("mysite-careers.com", "");
const careersLoginURL = createURL("mysite-careers.com", "login");

//There are some opportunities to improve the code above by using currying! Notice how we are constantly repeating the baseURL argument. Let’s fix that.

const createURL = baseURL => {
    const protocol = "https";
  
    // we now return a function, that accepts a 'path' as an argument
    return path => {
      return `${protocol}://${baseURL}/${path}`;
    };
  };
  
  // we create a new functions with the baseURL value in it's closure scope
  const createSiteURL = createURL("mysite.com");
  const createCareersURL = createURL("mysite-careers.com");
  
  // create URLs for our main site
  const homeURL = createSiteURL("");
  const loginURL = createSiteURL("login");
  const productsURL = createSiteURL("products");
  const contactURL = createSiteURL("contact-us");
  
  // create URLs for our career site
  const careersHomeURL = createCareersURL("");
  const careersLoginURL = createCareersURL("login");


  //Isolate expensive processes
    // given a database of global parcels like this...
const allGlobalParcels = [
    {
      created: 576424800000,
      location: "aus",
      properties: { ... },
    },
    {
      created: 1558163267311,
      location: "us",
      properties: { ... },
    },
    ...2701201201 more items
  ];
  
  const sortParcelsByCountry = (parcels, country, order) => {
    // 1. Filter our list to only include parcels from 'country;
    const countryParcels = parcels.filter(parcel => parcel.location === country);
  
    // 2. Sort the list of parcels by date created
    const sortedResult = [...countryParcels].sort((a, b) => {
      if (order === "ascending") return a.created - b.created;
      // by default return packages by descending order
      return b.created - a.created;
    });
  
    return sortedResult;
  };
  
  const ausParcelsAsc = sortParcelsByCountry(allGlobalParcels, "aus", "ascending");
  const ausParcelsDsc = sortParcelsByCountry(allGlobalParcels, "aus", "descending");

/* 
  The above code has the same issues as before of repeating parameters. Also notice how each time we call ausParcelsAsc or asuParcelsDsc we will always filter the large array of global parcel data. This could cause an unnecessary performance bottleneck in our software. For example if we needed to re-sort the list multiple times. Let’s use currying to fix this issue.
   */

  // given a database of global parcels like this...
const allGlobalParcels = [
    {
      created: 576424800000,
      location: "aus",
      properties: { ... },
    },
    {
      created: 1558163267311,
      location: "us",
      properties: { ... },
    },
    ...2701201201 more items
  ];
  
  const sortParcelsByCountry = parcels => country => {
    // 1. Filter our list to only include parcels from 'country;
    const countryParcels = parcels.filter(parcel => parcel.location === country);
  
    // we now return a function that sorts the parcels by date created
    return order => {
      // 2. Sort the list of packages by date
      const sortedResult = [...countryParcels].sort((a, b) => {
        if (order === "ascending") return a.created - b.created;
  
        // by default return packages by descending order
        return b.created - a.created;
      });
  
      return sortedResult;
    };
  };
  
  // we create a new function with the filtered list of parcels by country in it's closure scope
  const sortAusParcelsBy = sortParcelsByCountry(allGlobalParcels)("aus");
  
  const ausParcelsAsc = sortAusParcelsBy("ascending");
  const ausParcelsDsc = sortAusParcelsBy("descending");