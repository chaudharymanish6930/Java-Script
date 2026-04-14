function MultiplyNUM(num){
    return num*5;
}

const my=MultiplyNUM(5);
console.log(my)

MultiplyNUM.power=30
console.log(MultiplyNUM.power)
console.log(MultiplyNUM.prototype)

function createUser(username, score){
    this.username =username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++  // jisme boluaya uske increment
}

createUser.prototype.printMe=function(){
    console.log(`Score is ${this.score}`)
}

const chai = new createUser("Chai", 25);
const code=createUser("Code",534 )

// code.increment();
chai.printMe()
chai.increment();
chai.printMe()

// new keyword create a main role in this create the object in javascript,
// new keyword also helps to call constructor, then prototype