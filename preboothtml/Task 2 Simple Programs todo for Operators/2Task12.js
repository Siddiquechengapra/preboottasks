/* 
volume of Prism
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
var base=userInput[0]
var height=userInput[1]
var volume=base * height

console.log(volume.toFixed(2))

//end-here
});





