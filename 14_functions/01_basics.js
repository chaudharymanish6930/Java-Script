function myname() {
    console.log("My name is manish");
    console.log("I am a software engineer");
}

myname // refernces
myname() // call

// another way to declared a function
const one= function(){
    let username="rohit"
    console.log(this.username)
}
one()