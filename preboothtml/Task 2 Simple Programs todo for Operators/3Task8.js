/* 
Find the person is ur friend or not.
const friends = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];
function dataHandling(input, name){
for (var i = 0; i < input.length; i++) {

}
}
let found = dataHandling(friends,”Jeff”);
console.log(found);
— — — — — — — — — — — — — — — -
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

var friends =["Mari","maryjane","captainamerica","munnabhai","jeff","AAKchandran"]
function dataHandling(input,name){
for (var i = 0; i < input.length; i++) {
    if(input[i]==name){
        return "yes"
    }else{
        return "no"
        }

}
}

var found = dataHandling(friends,"mari");
console.log(found);


});





















