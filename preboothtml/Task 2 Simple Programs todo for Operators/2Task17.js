/* 
Given two numbers and perform all arithmetic operations.
*/
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//s
var a=userInput[0]
var b=userInput[1]
var add=parseInt(a)+parseInt(b)
var sub=parseInt(a)-parseInt(b)
var multiply=parseInt(a)*parseInt(b)
var divide=parseInt(a)/parseInt(b)

console.log(add)
console.log(sub)
console.log(multiply)
console.log(divide)

});


