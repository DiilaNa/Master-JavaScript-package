// Class is a Template of an Object

class Animal {
    constructor(name,type,age){
        this.name = name,
        this.type = type,
        this.age = age
    }

    speak(){
        console.log(this.type+' '+'makes a noice');
        
    }
}

const animal = new Animal('Animal','regular','1')
console.log(animal);
