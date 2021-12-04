class LinkedListNode{

    data;
    next;//pointer

    constructor(_data){
        this.data=_data;
        this.next=null;
    }

}







//-------------------------------------------------------------

let node1=new LinkedListNode(1);
let node2=new LinkedListNode(2);
let node3=new LinkedListNode(3);
let node4=new LinkedListNode(4);
let node5=new LinkedListNode(5);
let node6=new LinkedListNode(6);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
node5.next=node6;
node6.next=null;

console.log(node1);
console.log('--------------------------------------------------------------------');
console.log(node1.data);
console.log(node1.next.data);
console.log(node2.next.data);
console.log(node3.next.data);
console.log(node4.next.data);
console.log(node5.next.data);
console.log(node6.next);