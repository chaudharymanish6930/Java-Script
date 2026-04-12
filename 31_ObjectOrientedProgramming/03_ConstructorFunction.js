
function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}
const userOne=new User;
console.log(userOne);
const userTwo2=new User('Chai or code',22, false);
console.log(userTwo2);
console.log(userTwo2.constructor)
