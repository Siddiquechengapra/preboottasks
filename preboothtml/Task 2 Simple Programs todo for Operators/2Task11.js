/* 
Calculate area of an Isosceles triangle
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
var ab=userInput[0]
var bc=userInput[1]
var dc=parseInt(bc)/2


var ad=Math.sqrt(Math.pow(parseInt(ab),2)-(Math.pow(dc,2)))

var area=(parseInt(bc) * ad)/2

console.log(area.toFixed(2))

//end-here
});




