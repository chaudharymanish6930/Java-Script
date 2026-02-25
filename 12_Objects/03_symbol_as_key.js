// object literals

const mysym=Symbol('mysymbol');  // symbol

const jsuser={
    name: 'Manish',  // keys as a string
    age: 18,
    location: 'India',
    mysym: 'my symbol',
    lastlogin:["monday", "tuesday", "wednesday"],
}

console.log(jsuser.mysym);  // my symbol
console.log(jsuser[mysym]);  // undefined
console.log(jsuser["mysym"]); // my symbol
// is not used as a symbol key, it is used as a string key

console.log(typeof(jsuser.mysym));  // string

// symbol as a key
let jsuser1={
    name: 'Manish',  // keys as a string
    age: 18,
    location: 'India',
    [mysym]: 'my symbol',
    lastlogin:["monday", "tuesday", "wednesday"],
}

console.log(jsuser1.mysym);  // undefined
console.log(jsuser1[mysym]);  // my symbol
console.log(jsuser1["mysym"]); // undefined
console.log(typeof(jsuser1.mysym));  // undefined
console.log(typeof(jsuser1[mysym]));  // string

console.log(jsuser1)
