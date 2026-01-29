// Primitive Data-Types - imuteable(can not change or replace data by assigning)

// String
let x =  "Dilan"
// Number
let z = 100
// Bigint
let a = BigInt(300)
// Boolean
let b = true;
// Undefined
let c ;
// Null
let d = null;
// Symbol
let e = Symbol("Dilan")

// change only the copy not the original value or reference address
let ab = 50;
let ac = ab
ac = 60 

console.log(ab);
console.log(ac);



//Non-Primitive Data-Types - muteable

// Object - functions, objects, arrays,maps,date
let f = function k(){}
let g = {name : "Dilan"}
// copy the refence not the value so changes affect to original value
const obj1 = {name:"Kamal"}
const obj2 = obj1;
obj2.name = "Dilan"

console.log(obj1);
console.log(obj2);

//  So how to get a copy without modifying the original one

//method one -  spread operator
const obj3 = {...obj1};
obj3.name = "Nimal"
console.log(obj3);
//method two = json stringyfy
const obj4 = JSON.parse(JSON.stringify(obj1))
obj4.name = "Amal";
console.log(obj4);
console.log(obj1);




