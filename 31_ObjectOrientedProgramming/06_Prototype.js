let myname="Manish"
console.log(myname.length)

let myname2="Rohit    "
console.log(myname2.trim().length)

// add method for triming any string
let name="Manish   ";
console.log(name.truelength);

// work on the Object
let heroPower ={
    thor:"Hammer",
    spinder:"Sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spinder}`);
    }
}
Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all Objects`);
}
heroPower.hitesh();

//  work on the Array
let heros =["thor","spiderman"]
Array.prototype.heyHitesh=function(){
    console.log(`hitesh says Hello`);
}
heros.heyHitesh();

// Inheritance
const User={
    name:"Chai",
    email:"Chai@gmail.com"
}
const teacher ={
    makeVideo:true
}
const teacherSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"JS assignment",
    fullTime: true,
    __proto__: teacherSupport
}
teacher.__proto__ =User

// Modern Syntax
Object.setPrototypeOf(teacherSupport,teacher);

// proto typial inheritance
let anotherName="ChaiAurCode     "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.anotherName}`) // undefined
    console.log(`True length is: ${this.trim().length}`);
}
anotherName.truelength()
"Manish Choudhary".truelength();
"JavaScript".truelength();