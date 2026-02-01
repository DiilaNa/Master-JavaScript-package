// ---------Inheritance -----------
// One class inherit features of other.
// use extend keyword

// ------Polymorphism----------
// allows a single method to behave differently depending on the object that calls it.
// one interface many forms

// Method overriding - Having multiple methodswith same name and same parameters
// Method overriding is one way to achieve(implement) polymorphism
class Bird {
  move() {
    console.log("Bird flies");
  }
}

class Penguin extends Bird {
  move() {
    console.log("Penguin swims");
  }
}

const b = new Bird();
const p = new Penguin();

b.move(); // Bird flies
p.move(); // Penguin swims

// Method overloading - Having multiple methods
// with  same name but different parameters.
