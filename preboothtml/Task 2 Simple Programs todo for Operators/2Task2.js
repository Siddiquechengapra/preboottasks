/* 
Swapping 2 numbers
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
function swapp(a,b){
var c=b;
b=a;
a=c;
console.log(a,b)
}

swapp(x,y)

//end-here
});
