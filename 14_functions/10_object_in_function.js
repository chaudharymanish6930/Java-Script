function login(user){
    console.log(`username is ${user.username} and password is ${user.password}`)
}

// first make the object
const anyobject = {
    username: "Manish",
    password: "1234"
}
login(anyobject) // username is Manish and password is 1234

// direct object passes tto the function
login({
    username:"rohit",
    password: "1234",
    price:299
})