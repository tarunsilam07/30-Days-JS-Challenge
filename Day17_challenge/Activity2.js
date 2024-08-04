
// Task 3

class Stack {
    constructor() {
        this.items = [];
    }

    // Method to add an element to the stack
    push(value) {
        this.items.push(value);
    }

    // Method to remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            console.log("The Stack is empty! Can't Pop");
            return null;
        } else {
            return this.items.pop();
        }
    }

    // Method to view the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.items[this.items.length - 1];
        }
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to display all elements in the stack
    display() {
        const my_arr = [];
        for (let i = this.items.length - 1; i >= 0; i--) {
            my_arr.push(this.items[i]);
        }
        console.log(my_arr.join(' -> '));
    }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(7);
console.log(stack.peek()); 
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
stack.display(); 

//Task 4

function reverse(str){
    const rev=new Stack();
    let s='';
    for(let char of str){
        rev.push(char);
    }
    while(!rev.isEmpty()){
        s+=rev.pop();
    }
    return s;
}

const rev=reverse("tarun");
console.log(rev);

