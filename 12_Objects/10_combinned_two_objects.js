const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

// combining two objects
// Object.assign() method
const obj4=Object.assign(obj1,obj2);
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }    

// spread operator
const obj5={...obj1,...obj2};
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj6=Object.assign({},obj1,obj2,obj4);
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }