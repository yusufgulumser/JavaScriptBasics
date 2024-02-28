var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!"); //display both variables without using template literals

// can be written like this
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals

// "Hello,
// World"               // we cant write like this

`Hello,
World
!
`                       // but we can write like this


//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 

