class Animals {
    name;
    constructor(_name){
        this.name=_name;
    }

}

class Dog extends Animals {
    constructor(_name){
        super(_name);

    }

    bark(){
        console.log(`${this.name} is barking`);
    }
}

class Person extends Animals {
    dog=null;
    constructor(firstName,lastName){
        super(firstName + ' ' +lastName)
    }

    printPersonName(){
        console.log(this.name);
    }

    assignADog(dog){
        this.dog=dog;
    }

    takeDogOut(){
        console.log(`${this.name} take my dog ${this.dog.name} out`);
        this.dog.bark();
    }
}

const person1 = new Person('kinjal', 'Dodhia');
const person2 = new Person('Nayan', 'Dodhia');

person1.printPersonName();

const dog1 = new Dog('Bobby');

person1.assignADog(dog1);
person1.takeDogOut();

person2.assignADog(new Dog('Bruno'));
person2.takeDogOut();



