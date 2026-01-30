// First in First Out
// Queue is a concept, Arrays are the easiest way to implement it
class Queue{
    constructor(){
        this.items = []
    }

    enqueue(items){
        this.items.push(items)
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is Emplty can not remove"
        }
        return this.items.shift()
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is Emplty";
        }
        return console.log(this.items[0])
    }

    isEmpty(){
        return this.items.length == 0
    }

    print() {
        console.log(this.items.join(' <- '));
        
    }
}

const q1 = new Queue();
// add data
q1.enqueue("A")
q1.enqueue("B");
q1.enqueue("C");
q1.enqueue("D");
// print
q1.print()
// remove one element
q1.dequeue()
// check 
console.log(q1.isEmpty())
// get the first element of the queue
q1.front()
