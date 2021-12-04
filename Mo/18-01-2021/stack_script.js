class Stack{
    data;
    top;
    constructor(){
        this.data=[];
        this.top=0;
    }

     push(element){
         this.data[this.top]=element;
         this.top=this.top+1;
     }

   

    pop(){
        if(this.isEmpty()===false){
            this.top = this.top - 1;
            return this.data.pop();
        }
      
    }

    isEmpty(){
        return this.top===0;
    }
}
let mystack = new Stack();
console.log(mystack);

mystack.push(1);
mystack.push(2);
mystack.push(3);
mystack.push(4);
console.log(mystack);
mystack.pop();
console.log(mystack);
mystack.pop();
console.log(mystack);
mystack.pop();
mystack.pop();
mystack.pop();
console.log(mystack);
