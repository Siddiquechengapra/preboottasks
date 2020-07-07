/* 
Power of any number x ^ y.
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
var y=userInput[1]
var value=Math.pow(x,y)
console.log(value)
//end-here
});


