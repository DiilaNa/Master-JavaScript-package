// Arrays
var c = new Array() //not the best
var x = ['Kamal'] // literal declaration

x.push('Dilan') // add elements to the end of an array
x.unshift('amantha') // add elements to the start of an array
console.log(x);

x.splice(0,1) // start position , count 
// splice use to delete elements from an array using index

console.log(x);

//Objects
var a = new Object();
var b = {name:"Dilan"} //literal objects

b.name = "Ajantha" // Replace
console.log(b);

delete b.name //Delete
console.log(b);

//Sets - Kulaka

var s = new Set(['Dilan',22,'Sugath']) //No duplicates
s.add('aman') // add new values to a set
s.add(22) // can not add existing values as contain only unique
console.log(s);

s.delete(22) // delete - give the value not index
console.log(s);


// Map - Object type / Key value pairs
var w = new Map();
w.set('name','Prasad')
w.set("name", "Prasad"); // No duplicate values
w.set("name", "Janith"); // IF same key replace the value

console.log(w);
console.log(w.get('name')); // can access directly using keys / do not need filter , find mehtods

w.delete('name') //delete
console.log(w);






