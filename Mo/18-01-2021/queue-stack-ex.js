/**Homework: Create a queue with the help of stack classes
option : In your queue class you need to use inheritance */

class Stack {
  data;
  top;
  constructor() {
    this.data = [];
    this.top = 0;
  }
}

class Queue extends Stack {
  constructor(data, top) {
    super(data, top);
    this.head = 0;
  }

  enqueue(elements) {
    this.data[this.top] = elements;
    this.top = this.top + 1;
  }

  dequeue() {
    if (this.isEmpty() === false) {
      return (this.head = this.head + 1);
    }
  }

  viewQueue() {
    for (let i = this.head; i < this.top; i++) {
      console.log(this.data[i]);
    }
  }

  isEmpty() {
    return this.top === 0;
  }
}

let queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(5);
console.log("-------------------queue1--------------");
console.log(queue1);
console.log("----------view queue------------");
queue1.viewQueue();
