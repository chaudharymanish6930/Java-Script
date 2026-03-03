const course ={
    name: 'JavaScript',
    duration: '3 months',
    courseInsturctor: 'Mr. John Doe'
}
// console.log(course.name); // JavaScript

// De-structuring the object   {}  -> object
const {name:n, duration:d} = course
// console.log(name); // JavaScript   
// console.log(duration); // 3 months
console.log(n)
console.log(d)

const {courseInsturctor} = course;
console.log(courseInsturctor); // Mr. John Doe

const {courseInsturctor:inst} = course;
console.log(courseInsturctor); // Mr. John Doe
console.log(inst); // Mr. John Doe

// const navbar= ({company}) => {
//     console.log(company);
// }
// navbar({company:"Google"}) // Google
// basically {} is used to de-structure the object 
// and [] is used to de-structure the array.