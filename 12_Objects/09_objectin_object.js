let obj1={
    email:"dhoni@gmail.com",
    fullname:{
        username:{
            firstname:"Mahendra",
            midlename:"Singh",
            lastname:"Dhoni"
        }
    },
    age:43
}

// accessing the object in object
console.log(obj1.fullname); // { username: { firstname: 'Mahendra', midlename: 'Singh', lastname: 'Dhoni' } }
console.log(obj1.fullname.username); // { firstname: 'Mahendra', midlename: 'Singh', lastname: 'Dhoni' }
console.log(obj1.fullname.username.firstname); // Mahendra 
console.log(obj1.lastname); // undefined
console.log(obj1.fullname.username.lastname); // Dhoni
