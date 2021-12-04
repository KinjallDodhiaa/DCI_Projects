/**Implement the following methods/functions in the LinkedList class:
1- Insert a node at the head of a linked list
2- Print all elements of a linked list with the "While" loop
3- Insert a Node at the tail (ending node) of a Linked List
4- Delete a Node in a linked list
5- Print all nodes' data in reverse
 */
class Stack {
  // because of reverse printing
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
    // the stack shoukd not be empty
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop();
    }
  }
  isEmpty() {
    return this.top === 0; // true
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

class Linkedlist {
  head;
  constructor() {
    this.head = null;
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
  PrintAll() {
    // [1] -> 2 -> 3 -> 4 -> null
    let CurrentNode = this.head;
    while (CurrentNode != null) {
      console.log(CurrentNode.data); // print
      CurrentNode = CurrentNode.next;
    }
  }
  RemoveNode(_data) {
    let CurrentNode = this.head; // we start from the head node
    if (this.head.data == _data) {
      // check whether the head node is our target node
      this.head = null; // if yes -> remove it
    } else {
      while (CurrentNode != null) {
        if (CurrentNode.next.data == _data) {
          // we find the target node is the next one
          // now it's time to remove the node
          CurrentNode.next = CurrentNode.next.next;
          break; // get out of the while block
        }

        CurrentNode = CurrentNode.next; // moving to the next node until we find the target node for removing
      }
    }
  }

  printReverse() {
    let current = this.head;
    let myPrintingStack = new Stack();
    while (current !== null) {
      myPrintingStack.push(current.data);
      current = current.next;
    }
    while (myPrintingStack.isEmpty() === false) {
      console.log(myPrintingStack.pop());
    }
  }
}

let myLinkedList = new Linkedlist();
myLinkedList.insertNode(1);
myLinkedList.insertNode(2);
myLinkedList.insertNode(3);
myLinkedList.insertNode(4);
console.log('-------------myLinkedList---------------------------');
console.log(myLinkedList);
console.log('---------------------------print elements-------------------------------');
myLinkedList.PrintAll();
console.log('------------------------remove node-------------------');
myLinkedList.RemoveNode(3);
myLinkedList.PrintAll();
console.log('----------------------reverse printing----------------');
myLinkedList.printReverse()