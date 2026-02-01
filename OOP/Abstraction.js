class Vehicle {
  move() {
    this._startEngine();
    console.log("Vehicle is moving");
  }

// _ use To signal: this is for internal use or to support abstraction
  _startEngine() {
    // complex logic hidden
  }
}

const vehicle = new Vehicle();
vehicle.move()