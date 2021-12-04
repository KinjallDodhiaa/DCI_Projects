class Vehicle{
   mirrors;
   brake;
   gears;
   wheels;
   

constructor(_mirrors,_brake,_gears,_wheels){
    
    this.mirrors=_mirrors;
    this.brake=_brake;
    this.gears=_gears;
    this.wheels=_wheels;
    
}

}

class fourWheelers extends Vehicle {
  headlights;
  windows;
  doors;
  steering;

  constructor(_mirrors,_brake,_gears,_wheels,_headlights,_windows,_doors,_steering){
      super(_mirrors, _brake, _gears, _wheels);
      this.headlights=_headlights;
      this.windows=_windows;
      this.doors=_doors;
      this.steering=_steering;
  }
}

class Car extends fourWheelers{

    constructor(_mirrors,_brake,_gears,_wheels,_headlights,_windows,_doors,_steering){
        super(_mirrors,_brake,_gears,_wheels,_headlights,_windows,_doors,_steering);
    }


}

class Bus extends fourWheelers {
  constructor(_mirrors,_brake,_gears,_wheels,_headlights,_windows,_doors,_steering) {
    super(_mirrors,_brake,_gears,_wheels,_headlights,_windows,_doors,_steering);
  }
}


 class Bicycle extends Vehicle {
   constructor(_mirrors, _brake, _gears, _wheels) {
     super(_mirrors, _brake, _gears, _wheels);
   }
 }

 let carParts = new fourWheelers(3,1,5,4,4,4,4,1);
 console.log(carParts);

 let busParts = new fourWheelers(3,1,6,4,4,'many',3,1);
 console.log(busParts);

let bicycleParts = new Bicycle(1,2,8,2);
console.log(bicycleParts);
