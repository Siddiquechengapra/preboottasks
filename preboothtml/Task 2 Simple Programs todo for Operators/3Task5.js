/* 
Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
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
if(input[i]=="Mari"){
    input[i]="munnabhai"
}
}
console.log(friends)
}
dataHandling(friends);


});








