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

class Dog extends Animal{
    speak(){
        console.log(this.type+' '+ 'barks');
        
    }
}

const animal = new Animal('Animal','regular','1')
console.log(animal);

const dog = new Dog('Rex','Dog','2')
animal.speak();
dog.speak();


