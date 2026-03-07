const jsuser={
    name: 'Manish', 
    age: 18,
    location: 'India',
    email: "manishch@gmail.com",
    isloggedin: true,
    lastlogin:["monday", "tuesday", "wednesday"],
}

for (let key in jsuser){
    console.log(key,":-",jsuser[key])
} 