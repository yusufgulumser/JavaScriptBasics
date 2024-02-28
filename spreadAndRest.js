// the rest operator is used to gather elements into an array, while the spread operator is used to spread the content of an array.
////// Spread
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array
// output=> ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

//Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

////// Rest

function addTax(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item);
}

let shop= addTax(1.2,45,56,76,56);            // 45,56,76,56 will multiple with 1.2
console.log(shop);



const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;                // assigns the first element of array
console.log(starter);                // soup


  