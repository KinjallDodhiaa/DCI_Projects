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
    let CurrentNode = this.head;
    while (CurrentNode != null) {
      console.log(CurrentNode.data);
      CurrentNode = CurrentNode.next;
    }
  }

   

removeDuplicate() {
        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        return this.head
    };

  }


//_-------------------------------------------------------

let myLinkedList = new LinkedList();
myLinkedList.insertNode(1);
myLinkedList.insertNode(1);
myLinkedList.insertNode(2);
myLinkedList.insertNode(3);
myLinkedList.insertNode(4);
myLinkedList.insertNode(4);
console.log('------------------linkedList-----------------------------');
myLinkedList.printAll();
console.log(myLinkedList);
myLinkedList.removeDuplicate();
myLinkedList.printAll();