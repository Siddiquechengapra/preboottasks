/* 
Adding 3  numbers
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
numbers=[x,y,z]
var num=numbers.map(function(item){
    return parseInt(item)
})
var sum=0;
for(var i=0;i<num.length;i++){
    sum+=num[i]
}
console.log(sum)

//end-here
});

