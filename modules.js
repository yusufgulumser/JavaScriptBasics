// JavaScript modules are a way to organize and structure your code by splitting it into multiple files, each containing a distinct module or functionality. This helps in better code organization, reuse, and maintainability of large-scale JavaScript applications.

////////  ES6 Modules
//  ES6 modules use the import and export keywords

// myModule.js page
export function greet(name) {
    console.log(`Hello, ${name}!`);
  }

// main.js page
import { greet } from './myModule.js';
greet('World'); // Output: Hello, World!


////// CommonJS Modules 
// They use require() to import modules and module.exports or exports to export functionalities.

// myModule.js page
module.exports = function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
// main.js page
const greet = require('./myModule');
greet('World'); // Output: Hello, World!
 
  

// in modern HTML5 documents, the type attribute for <script> elements can be omitted when the script is written in JavaScript. 
// This is because JavaScript is the default scripting language for browsers, so if the type attribute is omitted, the browser assumes that the script is JavaScript.
    // <script type="text/javascript">
    //     //
    // </script>
    // can be written like this =>
    // <script>
    // // 
    // </script>


 

   


