// ReferenceError

console.log(username);  //Uncaught ReferenceError: username is not defined


// SyntaxError
///// it cannot be caught using the try-catch block.  
var a "there's no assignment operator here";  // Uncaught SyntaxError: Unexpected string


// TypeError
///// A TypeError is thrown when, for example, trying to run a method on a non-supported data type
"hello".pop() // Uncaught TypeError: "hello".pop is not a function


// RangeError
///// A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.
(10).toString(2); // '1010'   // Base 2 number system
(10).toString(8); // 12       // Base 8 number system


// If there is an error, the catch runs and the code other than try catch does not stop.
try {
    console.log(a+b);
} catch (err) {
    console.log("error catched");
}
console.log("code is running");

// can be shown like this
try {
    throw new ReferenceError();
} catch (err) {
    console.log("error catched");
}
console.log("code is running");




function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")


