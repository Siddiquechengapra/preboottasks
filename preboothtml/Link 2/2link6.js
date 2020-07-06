/* 
Write a code to add all the numbers in the array
Output: 66
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 var sum;
 sum += numsArr[i]
}
console.log(sum);
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
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var numbers=numsArr.map(function(item){
    return parseInt(item)
})
var sum=0;
for (var i = 0; i <=10; i++) {
 
 sum += numbers[i]
}
console.log(sum);
//end-here
});










