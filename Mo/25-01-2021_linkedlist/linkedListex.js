class Node {
  data;
  next;
  constructor(_data) {
    this.data=_data;
    this.next = null;
  }
}

class LinkedList {
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

  /** 2- Create a method for the program that searches for a node in a linked list based on full name and displays other information (from succeeding nodes)
For example:
Search("Mo") - > prints "Mo, Male, 017600000, Potsdammer Platz str" */

  printAll() {
    let CurrentNode = this.head;
    while (CurrentNode != null) {
      console.log(CurrentNode.data);
      CurrentNode = CurrentNode.next;
    }
  }


  find(data) {
    let currentNode = this.head;
    while (currentNode) {
      if(this.head.data!==data){
        console.log('The name is not present');
      }
      if (currentNode.data === data) {
        this.printAll();
      }
      currentNode = currentNode.next;
    } 
  }

  updateFullName(_data){
    this.head.data=null;
    this.head.data=_data;
    return this.printAll();
  }

}
 

//_-------------------------------------------------------

let myLinkedList = new LinkedList();

myLinkedList.insertNode('Kinjal Dodhia');
myLinkedList.insertNode('Female');
myLinkedList.insertNode(98397389);
myLinkedList.insertNode('strasse 1,Berlin');
console.log(myLinkedList);
myLinkedList.find('Kinjal Dodhia');
myLinkedList.updateFullName('Sara Dalal');

