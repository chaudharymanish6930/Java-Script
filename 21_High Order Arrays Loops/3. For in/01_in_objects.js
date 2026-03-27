const jsuser={
    name: 'Manish',  // key as strinng by default
    age: 18,
    location: 'India',
    email: "manishch@gmail.com",
    isloggedin: true,
    lastlogin:["monday", "tuesday", "wednesday"],
}

for (let i in jsuser){
    console.log(i,"---",jsuser[i]) // only value
}
// output
// name --- Manish
// age --- 18
// location --- India
// email --- manishch@gmail.com
// isloggedin --- true
// lastlogin --- [ 'monday', 'tuesday', 'wednesday' ]

for (let i in jsuser){
    console.log(`${i} shortcut is for ${jsuser[i]}`) // only value
}