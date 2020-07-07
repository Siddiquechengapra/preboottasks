/* 
We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];
var friends2 = [
“Gabbar”,
“Rajinikanth”,
“Mass”,
“Spiderman”,
“Jeff”,
“ET”
];
function dataHandling(input){
//Your code goes here
}
dataHandling(friends);
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
var friends2 =["gabbar","rajnikanth","mass","spiderman","jeff","ET"]

var final=friends.concat(friends2)

function dataHandling(input){
//Your code goes here
console.log(final.sort())
}
dataHandling(final)



});



/* Get the first item, the middle item and the last item of the array */
console.log(final[0],final[(final.length)/2],final[final.length-1])

/* Add your name to the end of the friends array, and add another name to beginning */
 finalfinal1]=="Siddique"
final("Delna")

/* Add Mr or Ms to the names in the friends array. */
for(var i=0;i<=final.length;i++){
 final[i]==final[i]+"MR"
}

/* 4. Concat all the names the friends array and return as comma “,” seperated string. */

console.log(friends.join(",")

/*  Find the friends names who has letter ‘a’ and return the list. */



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
var friends2 =["gabbar","rajnikanth","mass","spiderman","jeff","ET"]

var final=friends.concat(friends2)
var finalnames=[]
var last=final.filter(function(item){
    let i=item.split("")
    for(var j=0;j<i.length;j++){
        if(i[j]=='a')
        return item
    }
})
console.log(last)



});


















