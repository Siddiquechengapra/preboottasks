// Given an array of numbers arr,find number of hot pairs.Hot pair here signifies 
// the pair(i,j),where i < j and arr[i] is equal to arr[j]
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var input=userInput[0].split("")
console.log(input)
var pairs=0
for(var i=0;i<input.length-1;i++){
    if(input[i]===input[i+1]){
        pairs+=1
        
    }
  
}
console.log(pairs)  
   

}
);

