/* 
Calculate area of an equilateral triangle
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
var x=userInput[0]
var area=(Math.sqrt(3)/4)*(x*x)
console.log(area.toFixed(2))

//end-here
});


