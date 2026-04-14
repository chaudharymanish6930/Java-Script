class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }

    AddCourse(){
        console.log(`A new course was added by  ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@gmail.com", 8483)
chai.AddCourse()
chai.logMe();
console.log(chai instanceof User);
console.log(chai instanceof Teacher)

const tea = new User("Manish");
tea.logMe()
console.log(tea instanceof User);
console.log(tea instanceof Teacher)

console.log(chai === tea);