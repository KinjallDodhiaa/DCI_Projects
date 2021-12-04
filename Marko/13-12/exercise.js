class SpaceObject {
    name;
    constructor(objectName){
        this.name=objectName;
    }
}

class Planet extends SpaceObject {
    constructor(PlanetName){
        super(PlanetName)
    }


}

class Star extends SpaceObject {
    planetarySystem;
   
}

class PlanetarySystems extends SpaceObject {
    
}

let newPlanet = new Planet('Earth');
console.log(newPlanet.name); 

let star = new Star('Sun');
console.log(star.name);

let system1 = new PlanetarySystems('Solar System', star);
console.log(star.planetarySystem.name);

