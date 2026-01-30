// Linked-List - Linked between elements

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }

    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            return;
        }

        let current = this.head
        while(current.next){
            current = current.next;
        }
        current.next = newNode
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

    }

    inserAfter(target, value){
        let current = this.head

        while(current){
            if(current.value === target){
                const newNode = new Node(value);
                newNode.next = current.next
                current.next = newNode;
                return
            }
            current = current.next;
        }

        console.error("Node with value" + target + "Not found")
    }

    delete(value){
        if (!this.head) return;

        if(this.head.value === value){
            this.head = this.head.next;
            return;
        }
        let current = this.head;

        while(current.next && current.next.value !== value){
            current = current.next;
        }

        if(current.next){
            current.next = current.next.next
        }else{
            console.error("Node with value : " +value + " Not Found");
            
        }
    }

    find(value){
        let current = this.head;
        while(current){
            if(current.value === value) return current;
            current = current.next
        }
        return;
    }

    print(){
        const values = []
        let current = this.head

        while(current){
            values.push(current.value);
            current = current.next;
        }

        console.log(values.join(' -> '))
    }
}


const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)

list.print()
list.prepend(5)
list.print()

list.inserAfter(10,15)
list.print()

list.delete(20)
list.print()

const dataFound = list.find(15)
console.log("Data Found", dataFound);

const dataFound1 = list.find(5);
console.log("Data Found", dataFound1);
