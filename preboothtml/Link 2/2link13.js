/* 
Write a code to add elements in the inner arrays based on odd or even values
Output:
36
30
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i]%2!=0)
 {
 sum_odd += numsArr[i]
 }
 else
 {
 sum_even += numsArr[i]
 }
}
}
console.log(sum_odd);
console.log(sum_even);
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
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var numbers=[]
for(var i=0;i<numsArr.length;i++){
    for(var j=0;j<numsArr[i].length;j++){
        numbers.push(numsArr[i][j])
    }
}
var sumevens=0;
var sumodds=0;
for(i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        sumevens+=numbers[i]
    }
    else{
        sumodds+=numbers[i]
    }
}
console.log(sumodds)
console.log(sumevens)

//end-here
});








