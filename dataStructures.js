///// forEach()

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);              // calls appendIndex function for each array item
/* 0. kiwi
1. mango
2. apple
3. pear */
// can be also called like this but it is hard to read
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});


////// Filter()

//It filters your arrays based on a specific test.

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {                  // num is "num in nums". It is an index. 
    return num > 20;
})

//output => [30,40,50]


////// Map()

// This method creates a new array by applying a specified operation or function to each element of an existing array and returns the resulting array.

[0,10,20,30,40,50].map( function(num) {
    return num / 10
})

// output=> [0,1,2,3,4,5]

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// output=>  Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

// to get a specific value, you need to use the get() method.
bestBoxers.get(1); // 'The Champion' 


////// Set()

// The Set constructor can, for example, accept an array.
// This means that we can use it to quickly filter an array for unique members. All values should be different

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// output=> {'apple', 'pear', 'plum'}

