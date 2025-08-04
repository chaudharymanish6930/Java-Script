<<<<<<< HEAD
const course ={
    name: 'JavaScript',
    duration: '3 months',
    courseInsturctor: 'Mr. John Doe'
}
// console.log(course.name); // JavaScript

// De-structuring the object   {}  -> object
const {name, duration} = course
console.log(name); // JavaScript    

const {courseInsturctor} = course;
console.log(courseInsturctor); // Mr. John Doe

const {courseInsturctor:inst} = course;
=======
const course ={
    name: 'JavaScript',
    duration: '3 months',
    courseInsturctor: 'Mr. John Doe'
}
// console.log(course.name); // JavaScript

// De-structuring the object   {}  -> object
const {name, duration} = course
console.log(name); // JavaScript    

const {courseInsturctor} = course;
console.log(courseInsturctor); // Mr. John Doe

const {courseInsturctor:inst} = course;
>>>>>>> 5c3f3ff (first)
console.log(inst); // Mr. John Doe