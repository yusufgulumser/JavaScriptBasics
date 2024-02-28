console.log('Hello'); // Hello    undefined

function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog('Hello')    // Hello    'Hello'
// It means that by JavaScript allowing me to use the return keyword as described above, I can have multiple function calls, returning data and manipulating values, based on whatever coding challenge I have in front of me.

let counter=0;
function coun(){
    console.log(counter);
    counter = counter+1;
    if(counter===10){
        return;
    }
    coun();
}
coun();



// To summarize this point, we can say that the Functional Programming paradigm works by keeping the data and functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.

// First class Function
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())  // getNumber is called with (). This works because functions in JavaScript are truly first-class citizens, which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc.

// High order Functions
///// It allows to pass a function to another function or return a function from another function

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}


// Pure functions and side-effects
///// A pure function returns the exact same result as long as it's given the same values.

function addTwoNums(a, b) {
    console.log(a + b)
}



