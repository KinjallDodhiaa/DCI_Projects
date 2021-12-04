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
}

class Node {
  data;
  next;
  constructor(_data) {
    this.data = _data;
    this.next = null;
  }
}

class LinkedList {
  head;

  constructor() {
    this.head = null;
  }

  insertNodeHead(_data) {
    let newNode = new Node(_data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertNode(_data) {
    let myNode = new Node(_data);
    if (this.head === null) {
      this.head = myNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = myNode;
    }
  }

  printAll() {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  removeNode(_data) {
    let currentNode = this.head;
    if (this.head.data === _data) {
      this.head = null;
    } else {
      while (currentNode !== null) {
        if (currentNode.next.data === _data) {
          currentNode.next = currentNode.next.next;
          break;
        }
        currentNode = currentNode.next;
      }
    }
  }

  reverseNode() {

    let CurrentNode = this.head;
    let myPrintingStack = new Stack(); 

    while (CurrentNode != null) {

      myPrintingStack.push(CurrentNode.data); 
      CurrentNode = CurrentNode.next;

    }
   
    while (myPrintingStack.isEmpty() == false) {

      console.log(myPrintingStack.pop());
    }

  }
}
let myLinkedList = new LinkedList();
myLinkedList.insertNode(1);
myLinkedList.insertNode(2);
myLinkedList.insertNode(3);
console.log(
  "-----------------------------linked list----------------------------"
);
console.log(myLinkedList);
console.log(
  "-----------------------------printing data----------------------------"
);
myLinkedList.printAll();
 console.log('------------------------------remove node---------------------------------');
myLinkedList.removeNode(2);
myLinkedList.printAll();
console.log('--------------------reverse node--------------------');
myLinkedList.reverseNode();
console.log('--------------------------insertNodeHead------------------------------------');
myLinkedList.insertNodeHead(0);
myLinkedList.printAll();
