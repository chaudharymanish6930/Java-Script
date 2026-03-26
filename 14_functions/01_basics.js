function myname() {
    console.log("My name is manish");
    console.log("I am a software engineer");
}

myname // refernces
myname() // call

// another way to declared a function
const one1= function(){
    let username="rohit"
    // console.log(this.username)
    console.log(username);
}
one1()

const user = {
    username: 9865,
    one: function() {
        console.log(this.username)
    }
}
console.log(typeof(user.username)); // prr given value
console.log(user);   // { username: 'rohit', one: [Function: one] }
console.log(typeof(user.one));  // function
console.log(typeof(user.one()));  // undefined