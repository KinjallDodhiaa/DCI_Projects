/**Exercise : Create a queue with Class in Javascript with the following methods:
1-  View the first element at the front of the queue
2-  View the queue by For-Loop or While-Loop
3-  Replace all existing elements of the queue */

class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.data[this.tail] = element;
    this.tail = this.tail + 1;
  }

  dequeue() {
    if (this.isEmpty() === false) {
      this.head = this.head + 1;
    }

    //this.data[this.head]=NaN;
  }

  isEmpty() {
    return this.tail === 0;
  }

  viewQueue() {
    for (let i = this.head; i < this.tail; i++) {
      console.log(this.data[i]);
    }
  }
  replaceElements() {
    for (let i = this.head; i < this.tail; i++) {
      this.data[i] = Math.floor(Math.random() * 100);
    }
  }
  // replaceElements() {
  //   let newData = [6,7,8,9,10];
  //   for (let i = 0; i < this.data.length; i++) {
  //     this.data = newData;
  //   }
  //   return this.data;
  // }

  shiftQueue() {
    for (let i = this.head; i < this.tail; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.data[this.tail - 1] = NaN;
    this.head--;
    this.tail--;
  }
}

let BusQ = new Queue();
BusQ.enqueue(1);
BusQ.enqueue(2);
BusQ.enqueue(3);
BusQ.enqueue(4);
BusQ.enqueue(5);
console.log("--------------view queue--------------");
BusQ.viewQueue();
console.log("----------view first element-----------");
console.log(BusQ.data[0]);
console.log("------------replace existing elemnets-----------------");
BusQ.replaceElements();
//BusQ.data.splice(0, 5, 6, 7, 8, 9, 10);
console.log(BusQ);
console.log("--------dequeue-----------");
BusQ.dequeue();
console.log(BusQ);
console.log("---------shift queue to left-----------");
BusQ.shiftQueue();
console.log(BusQ);
