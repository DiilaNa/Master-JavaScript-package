// NOTES - Havinf an array of same name gives only Runtime error(Syntax error)

// adding constant make the refernce unchangeable not the array
const fruits = ['Apple','Orange']
console.log(fruits);

// can add items using index , update the original value
fruits[0] = 'Grapes'
console.log(fruits[0]);

//---------------------add items using with-----------------
const local_fruits = ["Apple", "Orange","Mango"]
// safer than, fruits[0] = 'Grapes'
// add to a copy do not change the original one
const newArray_with1 = local_fruits.with(1, "GRAPES");
console.log(local_fruits);
console.log(newArray_with1);

// adding items passing an index left them undefined
//fruits[4] = 'Orange'
//console.log(fruits);

//check legnth
console.log(fruits.length);

// convert array to  a string
console.log(fruits.toString());

// find where elements at
console.log(fruits.at(1));

// join
console.log(fruits.join('*'));

// add values to the end
fruits.push('Mango')
console.log(fruits);

// remove values from the end
fruits.pop()
console.log(fruits);

// add elements at the the start
fruits.unshift('Mango')
console.log(fruits);

// remove the first element
fruits.shift()
console.log(fruits);

// Not good
delete fruits[1]
console.log(fruits);

// -----------------Join Two Arrays-------------------
const fruits1 = ["Apple", "Orange"];
const veges = ["Carrot", "Cabbage"];

const newArray = fruits1.concat(veges)
console.log(newArray);

//---------------------Copy Within()---------------------
//copy & paste elements withhin an array 
const fruits2 = ["Apple", "PineApple","Guava"];

fruits2.copyWithin(0,2) // (postion by index where to add ,element (buy index))
console.log(fruits2);

// -----------------Flat() --------------- 
// By default change the dimension by one of an array
//This do not change the original array 
// Giving an argument wii change more
const nums = [[[1.23,3.44],[10,20]],[30,40],[50,60]]
const newArray2 = nums.flat();
console.log(newArray2);

// --------------Splice() -----------------------------
const animales = ["Dog", "Cat","Bat","Rat"];

// can replace values
animales.splice(3, 0 ,"Banana") //(start,deleteCount,add) - "Rat" just got pushed to the right
console.log(animales);

// delete from index 
animales.splice(1,1) //(start,deleteCount) - start from cat and delete mentioned count which is one here
console.log(animales);


// --------------Slice() -----------------------------
// Remove an entire slice from the mentioned index. Do not add changes to existing array 
// Inside the cosole prints the results that are removing
console.log(animales.slice(1))

const animales2 = ["Parrot", "Cat", "Bat", "Rat", "Cat"];

//---------------IndexOf()------------------------------
console.log(animales2.indexOf("Bat")) // If duplicates contains get first one
console.log(animales2.lastIndexOf("Bat")); // If duplicates contains get last one
// to get middle ones have to creat a programm :(

//----------------Find-----------------
const v1 = animales2.find(x => x == "Cat") 
// can find an element by name
// gives the first if contain duplicates
// find is case sensitive , cat will retuen undefined 
console.log(v1);

const v2 = animales2.findLast(x => x == "Cat");
// gives the last if contain duplicates
console.log(v2);

const v3 = animales2.findIndex((x) => x == 'Cat');
 // can find an element by Index
 // gives the First if contain duplicates
console.log(v3);

const v4 = animales2.findLastIndex((x) => x == "Cat"); 
// can find an element by Index
// gives the last if contain duplicates
console.log(v4);

//------------------------Sort()-----------------------------
// Sort the Original Array (Ascending Order)
const sort = animales2.sort()
console.log(sort);

// Sort Reverse the Original Array (Descending Order)
const sort2 = animales2.sort().reverse();
console.log(sort2);

const animales_sorting = ["Parrot", "Cat", "Bat", "Rat", "Cat"];
console.log("Original arrray :" + animales_sorting);

// Sort a copy of an array (Ascending Order)
const sort3 = animales_sorting.toSorted();
console.log("Copy of sorted array (Ascending Order)): " + sort3);

// Reverse Sort a copy of an array (Descending Order)
const sort4 = animales_sorting.toReversed();
console.log("Copy of sorted array (Descending Order) : " + sort4);

// ----------------Numeric Sorting using min, max values
// Ascending Order
const values  = [2,6,3,7,9,4,1,8,7]
const s1 = values.sort((a,b) => {return a - b });
console.log(s1);
// Desending Order
const s2 = values.sort((a,b) => {return b - a });
console.log(s2);

//------------Shuffle elements of an array
const shuffle = values.sort(() => {
    return 0.25 - Math.random()
})
// 0.25 is a constant
console.log(shuffle);


//--------------------For-Each()---------------------------
// Do not return any values
animales.forEach(x => console.log(x))

//-----------------map()------------------------
// trnsform in to a new array
const newAnimals = animales.map(x => ({name:x,price:10}))
console.log(newAnimals);

//-----------------filter()-------------------------
const numbers = [2,4,6,7,8,9,1]

const filter = numbers.filter(x => x>5)
console.log(filter);
//-----------------reduce()-------------------------
// transform result in to a single value

// accumilater - the previous value
// item - each an item of the array
// mention 0 as the starting value of accumilater

// By default reduce get the item from left to rigt
const newReduce = numbers.reduce((accumilater,item) => accumilater + item,0);
console.log(newReduce);

// reduceRight - get the values from Right to Left
const newReduce2 = numbers.reduceRight((accumilater, item) => accumilater + item, 0);
console.log(newReduce2);

//------------------some()------------------
const some = numbers.some(x => x==7)
// return a boolean if one value has 7
console.log(some); 

// find method return the value , some return true or false 

//------------------every()------------------
const every = numbers.every((x) => x == 7);
// check every value if contains 7
console.log(every);

//------------------from()------------------
const from = Array.from("abcd");
// Generate an array
console.log(from);


//---------------------keys-----------------
// Return keys
const keys = numbers.keys()
keys.forEach(x => console.log(x))

//---------------------entries-----------------
// return keys and index
const entries = numbers.entries()
entries.forEach(x => console.log(x))

//-------combine arrays using spread operator------------
// use to get a shadow copy
const combinedArray = [...fruits1, ...animales]
console.log(combinedArray);






















