/* 
var myarray=[11,22,33,44,55]
write a code to count the elements in the array . Don’t use length property
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
var myarray=[11,22,33,44,55]
var count=0;
for(var i=0;i<myarray.length;i++){
    count++
    
}
console.log(count)

});


