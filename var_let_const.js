// Let: value might change in the future
// const: value will never change in the future


// VAR KEYWORD
console.log(user);   // Since it is defined globally, it can reach the user.
var user; 


var user="yusuf";
var user="melih";    // user can be redefined as many times as we want.
console.log(user);  


// LET KEYWORD
console.log(user);   // cant react the user
let user;

let user;
console.log(user);   // can reach the user


let user="Hüseyin"   // let cannot be redefined, it gives an error
console.log(user);

user="selim";        // new value can be given.
console.log(user);


// CONST KEYWORD
console.log(user);   
const user;          // The variable used with const must be given a value because it cannot be assigned a value later.

console.log(user);   // cant reach the user
const user="yaman";

const user="mert";
console.log(user);   // can reach the user

const user="ayse";
console.log(user);
user="dilara";       // A new value cannot be given.





