<<<<<<< HEAD
const jsuser={
    name: 'Manish',  // key as strinng by default
    age: 18,
    location: 'India',
    email: "manishch@gmail.com",
    isloggedin: true,
    lastlogin:["monday", "tuesday", "wednesday"],
}

for (let i in jsuser){
    console.log(jsuser[i]) // only value
} // output
// Manish
// 18
// India
// manishch@gmail.com
// true
// [ 'monday', 'tuesday', 'wednesday' ]

for (let i in jsuser){
    console.log(`${i} shortcut is for ${jsuser[i]}`) // only value
=======
const jsuser={
    name: 'Manish',  // key as strinng by default
    age: 18,
    location: 'India',
    email: "manishch@gmail.com",
    isloggedin: true,
    lastlogin:["monday", "tuesday", "wednesday"],
}

for (let i in jsuser){
    console.log(jsuser[i]) // only value
} // output
// Manish
// 18
// India
// manishch@gmail.com
// true
// [ 'monday', 'tuesday', 'wednesday' ]

for (let i in jsuser){
    console.log(`${i} shortcut is for ${jsuser[i]}`) // only value
>>>>>>> 5c3f3ff (first)
}