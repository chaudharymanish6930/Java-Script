// object literals

const jsuser={
    "name": 'Manish',  // key: value
    age: 18,
    location: 'India',
    email: "manishch@gmail.com",
    isloggedin: true,
    lastlogin:["monday", "tuesday", "wednesday"],
    "user-id": 1234
}

// not accesed by the dots
console.log(jsuser["user-id"]);  // 1234  

console.log(jsuser["name"]);  // Manish