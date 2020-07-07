/* 
Give the Actual cost and Sold cost, Calculate Discount Of Product
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
var ac=userInput[0]
var sc=userInput[1]
var discount=ac -sc

console.log(discount)

//end-here
});








