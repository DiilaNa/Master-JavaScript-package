// Last in First Out
// Like Books kept on a table

// Spread parameter creates a new memory address in heap when creating a copy (shallow copy)
// Normal copy make changes to original one

class Stack {
  // In the Parameter: The "Rest" Parameter
  //... inside the parenthesis of a function or constructor, it acts as a Collector.
  constructor(...items) {
    // Inside the Body: [...item] (The "Spread" Operator)
    this.items = [...items];
  }

  push(item){
    this.items.push(item);
  }
  pop(){
    return this.items.pop()
  }

  top(){
    return this.items[this.items.length - 1]
  }

  print(){
    return this.items.join(' -> ')
  }
}

const stack = new Stack("A");

stack.push("B")
stack.push("C")
stack.push("D")

console.log(stack.print())

stack.pop()

s = stack.top()
console.log(s);
