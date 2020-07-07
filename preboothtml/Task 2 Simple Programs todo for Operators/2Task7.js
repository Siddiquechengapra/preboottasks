/* 
Batting average
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
var runsscored=userInput[0]
var timesout=userInput[1]
var BA=parseInt(runsscored)/parseInt(timesout)
console.log(BA.toFixed(2))

//end-here
});
