/* 
Display the asterisk pattern as shown below(No loop needed):
*****
*****
*****
*****
*****
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

console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")

});





