// object literals -- not make singleton object
// in case constructor we can make singleton object 
// constructor -- Object.create() method

const jsuser={
    name: 'Manish',  // key as string by default
    age: 18,
    location: 'India',
    email: "manishch@gmail.com",
    isloggedin: true,
    lastlogin:["monday", "tuesday", "wednesday"]
}

// accessed by the dots   mostly ussed
console.log("User email:", jsuser.email);  // manishch@gmail.com
console.log(jsuser["email"])  // manishch@gmail.com
console.log(jsuser["location"])   // India
console.log(jsuser["lastlogin"])    //  [ 'monday', 'tuesday', 'wednesday' ]
console.log(jsuser.lastlogin);   //  [ 'monday', 'tuesday', 'wednesday' ]