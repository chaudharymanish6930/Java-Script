<<<<<<< HEAD
let books=[
    {title:"book one",genre:"science",published:"2033",edition:"1901"},
    {title:"book two",genre:"maths",published:"2003",edition:"1908"},
    {title:"book three",genre:"de",published:"2013",edition:"1999"},
    {title:"book four",genre:"physics",published:"2083",edition:"1956"},
    {title:"book five",genre:"sst",published:"2023",edition:"1900"},
    {title:"book six",genre:"hindi",published:"2033",edition:"1976"},
    {title:"book seven",genre:"arts",published:"2023",edition:"1900"},
    {title:"book eight",genre:"it",published:"2083",edition:"1987"},
    {title:"book nine",genre:"de",published:"2043",edition:"1909"}, 
]
// single condtion
const userbook=books.filter((bk)=>bk.genre==="de")
// console.log(userbook) 

const user=books.filter((bs) => {return bs.edition>1990})
console.log(user)
// [
//     {
//       title: 'book three',
//       genre: 'de',
//       published: '2013',
//       edition: '1999'
//     }
//   ]

// multiple conditions
let use=books.filter((bk) => bk.genre==="de" && bk.edition>1990)
=======
let books=[
    {title:"book one",genre:"science",published:"2033",edition:"1901"},
    {title:"book two",genre:"maths",published:"2003",edition:"1908"},
    {title:"book three",genre:"de",published:"2013",edition:"1999"},
    {title:"book four",genre:"physics",published:"2083",edition:"1956"},
    {title:"book five",genre:"sst",published:"2023",edition:"1900"},
    {title:"book six",genre:"hindi",published:"2033",edition:"1976"},
    {title:"book seven",genre:"arts",published:"2023",edition:"1900"},
    {title:"book eight",genre:"it",published:"2083",edition:"1987"},
    {title:"book nine",genre:"de",published:"2043",edition:"1909"}, 
]
// single condtion
const userbook=books.filter((bk)=>bk.genre==="de")
// console.log(userbook) 

const user=books.filter((bs) => {return bs.edition>1990})
console.log(user)
// [
//     {
//       title: 'book three',
//       genre: 'de',
//       published: '2013',
//       edition: '1999'
//     }
//   ]

// multiple conditions
let use=books.filter((bk) => bk.genre==="de" && bk.edition>1990)
>>>>>>> 5c3f3ff (first)
console.log(use)