// JavaScript has a number of built-in object types, such as:
//Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.

// We can use date:
var date= new Date();
console.log(date);
// We cant use Math because it's not a constructor:
var math= new Math(); 
console.log(math);  // error
// Math doesnt need a constroctor:
Math.pow(2.3);

// Custom constructor functions:
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}


// String constructor
let apple = new String("apple");
apple; // --> String {'apple'}



//In JavaScript, you can built an instance of the RegExp constructor using new RegExp. 
//Alternatively, you can use a pattern literal instead of RegExp. Here's an example of using /d/ as a pattern literal, passed-in as an argument to the match method on a string.
"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]
