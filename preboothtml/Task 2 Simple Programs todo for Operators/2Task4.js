/* 
Celcius to fahrenheit
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
var far=(parseInt(x)*9)/5 + 32
console.log(far)

//end-here
});
