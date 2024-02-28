// an object is not iterable.
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {     // error
    console.log(prop)
}

// Contrary to objects, arrays are iterable
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}


/////   three built-in methods: Object.keys(), Object.values(), and Object.entries().

// The Object.keys() method:This method receives an object as its parameter. 
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

// The Object.values() method

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

// The Object.entries() method

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));  //[ ['speed', 400], ['color', 'magenta'] ]


// The usage with for 

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

// for of and for in loops


// The for-of loop will iterate over the object's own properties only when using the Object.keys() method to return an array to loop over.
//The for-of loop will not iterate over the object and its prototype properties.

// for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. It directly retrieves the values of the object being iterated over.

const array = [1, 2, 3, 4, 5];

for (const element of array) {
  console.log(element);
}

// for...in loop is used to iterate over the properties of an object, including its prototype chain. It's typically used with objects and can also be used with arrays

const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key, obj[key]);

}

// for...of iterates over the values of an iterable object, whereas for...in iterates over the enumerable properties of an object.
// for...of guarantees the order of iteration for arrays and other iterable objects
// for...in does not guarantee the order of iteration for object properties.




