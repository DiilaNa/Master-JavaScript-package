// check data type

// Primitive
var x = 50;
console.log(typeof x);
//Non Primitive
var y = new Date();
console.log(typeof y);

// Type conversion
//Implicit casting - automatically donr by JS

//Explicit casting
var z = x.toString;
console.log(z);

// Hoisting - automatically get the declaration to the top
// only for declaration , not for initializing , first declare as undefined and later asign the value
a = 22;
console.log(a);
var a;

// let return an error although hoisting occured beacuse already initializing
// has happened 

b = 22;
// console.log(b);
// let b;

// ReferenceError: Cannot access 'b' before initialization
