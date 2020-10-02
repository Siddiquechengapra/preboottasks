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
var pairs=[]
var pairsobj={}
for(var x=0;x<input.length;x++){
    var num=input[x]
    pairsobj[num]=pairsobj[num]?pairsobj[num]+1:1
}
console.log(pairsobj)

for(var i=0;i<input.length;i++){
    for(var j=0;j<input.length;j++){
        if(i<j && input[i]==input[j]){
            pairs.push([input[i],input[j]])
        }
    }
}
console.log(pairs)


}
);