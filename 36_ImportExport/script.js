import num from './app.js'
console.log(num)
console.log("Hello")

// for  single export 
// same name as mentioned in the export file
import {arr} from './app.js'
console.log(arr)

// again print
console.log(num)

// AnotherOne js file is here
import name from './test.js'
console.log(name)

// use another variable
import { skills,number } from './test.js'
console.log(skills,number)