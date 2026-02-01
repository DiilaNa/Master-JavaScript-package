// Functions is mini program inisde a program
// Normally return something

//-------------- Regular Functions--------------------
function names(){
    console.log("Name");
}

names()

function names2() {
  return 'Amal'
}

const myName = names2();
console.log(myName);


//-------------Arrow Functions-----------------
const name = () => {
    console.log("Dilan");
    
}

name()


// ---------------- Difference------------------------

// ArrowFn Easy to use, Found in Es6 Format
// Regular functions are hoisted


// ----------------Hoisting----------------------
// Regular functions can call before the method initilization
// Hoisted by JS
age()
function age (){
    return 32
}
 // Arrow functions can not call before the method initilization

// age1()
const age1 =  () => {
    return 22
}
// returns a refence eror

//------------------Constructor Difference---------------------

function Car(name) {
    this.name = name
}
const mycar = new Car("Honda")
console.log(mycar.name);

// Arrow functions has no constructors
 const Car2 = (name) => {
    this.name = name
}
//const mycar2 = new Car2("Suzuki");
//console.log(mycar2.name);
// This return a Type error as Arrow functions has no Constructor

//--------------this-keyword---------------------------
const person = {
    name: 'Dilan',
    getNameByRegularFn: function() {
        console.log(this.name);
        
    },
    getNameByArrowFn: () => {
        console.log(this.name);
        
    }
}
// this jeyword work with only regular functions

// In Regular functions keyword this represent current object
person.getNameByRegularFn()
// In Arrow functions keyword this represent the window(inherited parent object) 
person.getNameByArrowFn()

//--------------------- argunemt-keyword-----------------------------
function vehicle(name,model) {
    console.log(arguments);
    
}
vehicle("Lamborgini","Galado")

const vehicle2 = (...args) => {
    console.log(args);
    //Destructure (args is an array here)
    const name = args[0]
    const model = args[1]
    console.log(name , " ", model);
    
}

vehicle2("BMW","M3GTR")
