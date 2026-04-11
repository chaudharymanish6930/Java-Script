// two literal 2
// object literal {}

const user={
    username:"Hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        console.log("Got user detail from database");
    }
}
console.log(user.username);
console.log(user.getUserDetails());

const user1={
    username:"Hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        // console.log(username)  use not defined
        console.log(`UserName : ${this.username}`);
    }
}
console.log(user1.username);
console.log(user1.getUserDetails());

const user2={
    username:"Hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        // console.log(username)  use not defined
        console.log(`UserName : ${this}`);  // UserName : [object Object]
        console.log(this);
    }
}
console.log(user2.getUserDetails())  // all data

console.log(this); // {}