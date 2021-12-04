/**Create a stack data structure via Class in JavaScript so that it comprises the following methods:
> Returning the length of the stack
> Returning the last element on top of the stack (i.e., without removing it)
> Printing all existing elements inside of the stack
> Printing all elements of the stacks from BOTTON to TOP (i.e., in the FIFO manner this time) */

class Stack {
  data;
  top;

  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop();
    }
  }

  isEmpty() {
    return this.top === 0;
  }

  lastElement() {
    return this.data[this.top - 1]; //data.length=this.top. therefore, this.data[this.data.length-1]
  }

  printFromBottomToTop() {
    for (let i = 0; i < this.top; i++) {
      console.log(this.data[i]);
    }
  }

  printAllElements() {
    for (let i = this.top - 1; i >= 0; i--) {
      console.log(this.data[i]);
    }
  }
}

let mystack = new Stack();
mystack.push(1);
mystack.push(2);
mystack.push(3);
mystack.push(4);
mystack.push(7);
console.log(mystack.data.length);
console.log(mystack.lastElement());
mystack.printAllElements();
console.log("-------------------------------------");
mystack.printFromBottomToTop();
