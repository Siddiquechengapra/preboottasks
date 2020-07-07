/* 
Meters to miles
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

//start-here
//Your code goes here … replace this line with your code logic
var x=userInput[0]
var miles=parseInt(x)*0.000621371
console.log(miles)

//end-here
});
