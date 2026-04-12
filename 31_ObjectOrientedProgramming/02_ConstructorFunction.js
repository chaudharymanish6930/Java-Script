// new keyword constructor function
// create a new context

// const promiseOne = new Promise()
// const data = new Date();

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    
    // return statement is optional here
    return this;

}

const userOne= User("Manish",12, true);
const userTwo = User('Chai or code',22, false);
console.log(userOne);  // same as one user
console.log(userTwo); // same as two user

const userOne1=new User("Manish",12, true);
const userTwo2=new User('Chai or code',22, false);
console.log(userOne1);
console.log(userTwo2);