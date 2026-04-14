class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("Hitesh")
hitesh.logMe()
console.log(hitesh)
// console.log(hitesh.createId())  not accessable

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iPhone=new Teacher("Iphone","iphone@gmail.com");
iPhone.logMe()
console.log(iPhone.createId())  // not accessable