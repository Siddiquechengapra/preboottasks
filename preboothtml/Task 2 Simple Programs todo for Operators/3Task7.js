/* 
Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
const friends = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {

}
}
dataHandling(friends);
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
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    console.log(friends[i])
if(input[i]=="captainamerica"){
    break;
}
}

}
dataHandling(friends);


});















