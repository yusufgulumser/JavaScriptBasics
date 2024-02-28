/* Json include
primitive values: strings, numbers, bolleans, null
complex values: objects and arrays (no functions!)
Objects have double-quoted strings for all keys
Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code
String properties must be surrounded in double quotes. */


// String properties must be surrounded in double quotes. For example:
 "fruits",
"vegetables"

// Number properties are represented using the regular JavaScript number syntax; e.g
5,
10,
1.2

// Boolean properties are represented using the regular JavaScript boolean syntax, that is:
true
and
false
// Null as a property is the same as in regular JavaScript; it's just a
null



// For example, what if you try to stringify a function? The operation will silently fail.
// If you try to stringify some other data types, such as a BigInt number, say 123n, you'd get the following error:
// Uncaught TypeError: Do not know how to serialize a BigInt


// You can use object literals and array literals, as long as you follow the above rules
// here is an example of a stringified JSON object, with a single key-value pair:
'{"color":"red"}' 
'{"color":"red", "nestedObject": { "color": "blue" } }'

// convert a JSON string to a regular JavaScript object and vice versa.

const jsonStr= '{"color":"red"}' 
const plainObj= JSON.parse(jsonStr)
plainObj.color= "blue"           // changing the value
console.log(plainObj)


const data={
    first:"fir",
    second:"sec",
    third:"thi"
}
const str= JSON.stringify(data)
console.log(str)

// the output => {"first":"fir","second":"sec","third":"thi"}. Converted to JSON