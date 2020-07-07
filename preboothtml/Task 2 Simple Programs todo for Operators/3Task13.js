/*Objects:
What the output
myobject = {1:one,”11":1,”name”:”arun”}
console.log(myobject.11); 
console.log(myobject.name);
Add a new key value pair to myobject
— — — — — — — — —
*/

correct code : 

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

var myobject = {1:"one","11":1,"name":"arun"}
console.log(myobject[11]); 
console.log(myobject["name"])

});




/* Add a new key value pair to myobject
key : ten
value : ten
myobject = {1:one,”11":1,”name”:”arun”}
//your code goes here
console.log(myobject);
{"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.
 */

myobject.ten="ten"

/* Write out an object literal to represent the data below.
Guvi, Geek, 6, IIT-M RP,Chennai.
— — — — — — — — — — — — — — — - */ 


var myobject = {Name:"Guvi",Name2:"geek",Location:"IITM-RP, Chennai"}

console.log(myobject)



/*How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
Guvi, Geek, 6, IIT-M RP,Chennai.
Amazon, Inc, 31, SP Infocity, Chennai.
Google, Alphabet, 34 Amphitheater Parkway, MountainView.
Tesla, Inc , 32, 333 Santana Row,San Jose.


for this situation we can define an object with Fname,Lname
Exact address, Location and inside each object value we can insert an array with values from 4 inputs 

*/





