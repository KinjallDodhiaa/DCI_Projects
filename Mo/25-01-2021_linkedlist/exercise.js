/**Implement the following methods/functions in the LinkedList class:
1- Insert a node at the head of a linked list
2- Print all elements of a linked list with the "While" loop
3- Insert a Node at the tail (ending node) of a Linked List
4- Delete a Node in a linked list
5- Print all nodes' data in reverse
 */

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  printElements() {
    let current = head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

 reverseList(head){
     let previous = null;
     while (head !== null) {
       let next = head.next;
       head.next = previous;
       previous = head;
       head = next;
     }
     return previous;

 }

}



let head=new LinkedListNode(1); 
let node1=new LinkedListNode(2);
let node2=new LinkedListNode(3);
let node3=new LinkedListNode(4); 

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = null;
head.printElements();
console.log(head.reverseList());



