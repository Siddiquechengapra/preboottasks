
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
var cost=[1,2,3,4,5,6]
var total=0
console.log(input)
for(var i=0;i<input.length;i++)
{
    
    if(input[i]===input[i+1]){
        if(cost[i] < cost[i+1] || cost[i]===cost[i+1]){
             total+=cost[i]
             
        }else{
            total+=cost[i+1]
        }
        
    }
 

}
console.log(total)
   

}
);

