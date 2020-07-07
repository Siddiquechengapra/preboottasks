/* 
Given their radius of a circle and find its diameter, circumference and area.
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
var radius=userInput[0]
var cicum=2 * Math.PI * radius
var dia=2*radius
var area=Math.PI * radius* radius

console.log(cicum.toFixed(2))
console.log(dia.toFixed(2))
console.log(area.toFixed(2))

//end-here
});










