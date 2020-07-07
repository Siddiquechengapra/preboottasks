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

/*7. Find the names and return the list starting with letter M.*/
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
var friends2 =["gabbar","rajnikanth","Mass","spiderman","jeff","ET"]

var final=friends.concat(friends2)
var finalnames=[]
var last=final.filter(function(item){
    let i=item.split("")
    for(var j=0;j<i.length;j++){
        if(i[0]=='M')
        return item
    }
})
console.log(last)



});





/*8. Find the name with max characters and return the name. */



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
var friends2 =["gabbar","rajnikanth","Mass","spiderman","jeff","ET"]

var final=friends.concat(friends2)

var largest=final.map(function(item){
    
})

let v=largest.sort(function(a,b){
    if(a>b){
        return 1
    }
    else if (a<b){
        return -1
    }
    else{
        return 0
    }
})
var s=v[v.length-1]

var last=final.filter(function(item){
    let i=item.split("")
    return i.length==s
})
console.log(last.join(""))






});


/* . Find the name with min characters and return the name. */



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
var friends2 =["gabbar","rajnikanth","Mass","spiderman","jeff","ET"]

var final=friends.concat(friends2)

var largest=final.map(function(item){
    let i=item.split("")
    return i.length
})
    


let v=largest.sort(function(a,b){
    if(a>b){
        return 1
    }
    else if (a<b){
        return -1
    }
    else{
        return 0
    }
})
var s=v[0]

var last=final.filter(function(item){
    let i=item.split("")
    return i.length==s
})

console.log(last.join(""))






});






















