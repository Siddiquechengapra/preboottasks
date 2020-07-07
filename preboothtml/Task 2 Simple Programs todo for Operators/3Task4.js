/* 
Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=[]
— — — — — — — — — — — — — — — -
Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
let foods=[]
Find the length of your foods array
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
var foods=["biriyani","porotta","putt","appam","kappa","tea","coffee","avilmilk","greenpeas","puffs","beef","chicken","mutton","prawns","crab","oyster","lobster","watermelon","mango","iceceram"]

console.log(foods[4])
console.log(foods.length)


});



