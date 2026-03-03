let array=["a","b",1,2,true];
let array2=["c","d",3,4,false];
let array3=array.concat(array2);
console.log(array3); 
// ["a", "b", 1, 2, true, "c", "d", 3, 4, false]

array.push(array2);  // on same array
console.log(array);

// ["a", "b", 1, 2, true, ["c", "d", 3, 4, false]]
console.log(array[5][3]);  // ["c", "d", 3, 4, false]

// Spread operator
let array4=[...array,...array2];
console.log(array4);
// ["a", "b", 1, 2, true, ["c", "d", 3, 4, false], "c", "d", 3, 4, false]    