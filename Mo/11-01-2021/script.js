class door {
  width;
  height;
  color;
  state;

  open() {
    this.state = "open";
  }

  close() {
    this.state = "close";
  }

  constructor() {
    console.log("You created a default door!");
    this.width = 100; //cm
    this.height = 200;
    this.color = "white";
    this.state = "open";
  }
}
/*
    constructor(userWidth,userHeight,userColor,userState){ // it automatically executes when you create an object from this class


    console.log("You created a default door!");
    this.width=userWidth;
    this.height=userHeight;
    this.color=userColor;
    this.state=userState;

    }

*/

let houseDoor = new door(); //initialised an object with the class defined before
//let houseDoor= new Door(100,400,"green","close"); // initialized an object , create an instance of the Door class


houseDoor.open();
console.log(houseDoor.state);

houseDoor.close();
console.log(houseDoor.state);

console.log(houseDoor.width);
console.log(houseDoor.height);
console.log(houseDoor.color);
console.log(houseDoor.state);

houseDoor.color = "blue";
houseDoor.width = 150;
houseDoor.height = 250;
houseDoor.close();

console.log(houseDoor.width);
console.log(houseDoor.height);
console.log(houseDoor.color);
console.log(houseDoor.state);

class car {
  color;
  model;
  style;
  classOfCar;
  name;

  carname(){
      this.name = 'BMW';
  }

  constructor() {
    this.name='BMW';
    this.model = "BMW X1";
    this.color = "white";
    this.style = "5-Door SUV";
    this.classOfCar = "SubCompact Luxury SUV";
  }
}

let newCar = new car();

newCar.carname();
console.log(newCar.name);

console.log(newCar.model);
console.log(newCar.color);
console.log(newCar.style);
console.log(newCar.classOfCar);

newCar.color='Blue';
console.log(newCar.color);

//<-------------------------------------------------
