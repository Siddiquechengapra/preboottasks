/* 
Calculate Simple Interest
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
var z=userInput[2]
var Final=parseInt(x)*(1+(parseInt(y)*parseInt(z)))
console.log(Final)
//end-here
});


