// Literal Objects

const dog = {
    name : 'Max',
    age: 12,
    bark: () => console.log("Bark")
    
}

console.log(dog);
//console.log(dog.name);
//console.log(dog['age']);

const acc = 'name'
//console.log(dog[acc]);

// -----------replace & adding data-------------------------
dog.location = 'Colombo'
dog.name = 'Zoro'
console.log(dog);

// ------------delete----------------------
delete dog.location
console.log(dog);

const cat = {
  name: "Max",
  age: 12,
  activities:{
      bark: () => console.log("Bark"),
  }
};

console.log(cat.activities);

// -----------------seal() ------------------------------- 
// can update existing propertotes but can not delete or add new ones

Object.seal(cat)
cat.name = "Ratzz"
cat.food = "meat"
delete cat.age

console.log(cat);

//------------------- freez() --------------------
Object.freeze(cat)
// can not update delete or add new data
cat.name = "Max"
console.log(cat);

const data = Object.keys(dog) // return an array of keys
const data2 = Object.values(dog).forEach(x=>console.log(x)) // return an array of values
const data3 = Object.entries(dog) // return both keys and values
console.log(data3);


//-------------------Object  Constructor---------------------
function Bird(name,age) {
    this.name = name,
    this.age = age
}

const b = new Bird("Tommy",22);
console.log(b);
