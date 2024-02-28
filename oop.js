var purchase1={
    shoes:100,
    stateTax:1.2,
    totalPrice:function(){
        var calculation= purchase1.shoes * purchase1.stateTax;
        console.log("Total price is",calculation);
    }
}

// This keyword is used to avoid using the name of object repeatedly in object.

var purchase1={
    shoes:100,
    stateTax:1.2,
    totalPrice:function(){
        var calculation= this.shoes * this.stateTax;
        console.log("Total price is",calculation);
    }
}

// Class

class Animal{
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
    sound(){
        console.log("some sounds");
    }
}

const anim= new Animal("itir",10);
console.log(anim.name);

// Inheritance

class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }


// Encapsulation

/////  encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

"abc".toUpperCase();

// Abstraction
///// Abstraction is all about writing code in a way that will make it more generalized.

// Polymorphism
///// Multiple forms

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}



class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);                              // The getSelf() method prints out the properties on the object instance it is called on.
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);        // The prototype holds all the properties shared by all the object instances of the Train class. 
        console.log(proto);
    }
}
var train4= new Train("red",false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
// The prototype contains properties and methods shared among all instances created from the same class. When you create an instance of a class, that instance inherits properties and methods from its prototype.



// extends is used like this
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

// Using class instance as another class' constructor's property

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.mode = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) 
console.log(boxingGym.stationaryBike) 
console.log(boxingGym.treadmill) 

//output---- 7-22 ---- StationaryBike { position: 'right corner', gears: 8 } ----- Treadmill { position: 'left corner', modes: 5 }



