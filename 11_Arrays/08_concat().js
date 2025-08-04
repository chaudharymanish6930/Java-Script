<<<<<<< HEAD
let array=["a","b",1,2,true];
let array2=["c","d",3,4,false];
let array3=array.concat(array2);
console.log(array3); 
// ["a", "b", 1, 2, true, "c", "d", 3, 4, false]

array.push(array2);  // on same array
console.log(array);
=======
let array=["a","b",1,2,true];
let array2=["c","d",3,4,false];
let array3=array.concat(array2);
console.log(array3); 
// ["a", "b", 1, 2, true, "c", "d", 3, 4, false]

array.push(array2);  // on same array
console.log(array);
>>>>>>> 5c3f3ff (first)
// ["a", "b", 1, 2, true, ["c", "d", 3, 4, false]]