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
      if(this.isEmpty()===false){
            this.head = this.head + 1;
  }
}
    //this.data[this.head]=NaN;
    //this.head = this.head + 1;
  

  isEmpty() {
    return this.tail === 0;
  }
}


let BusQ = new Queue();
BusQ.enqueue(1);
BusQ.enqueue(2);
BusQ.enqueue(3);
BusQ.enqueue(4);
BusQ.enqueue(5);
console.log(BusQ);

BusQ.dequeue();
console.log(BusQ);