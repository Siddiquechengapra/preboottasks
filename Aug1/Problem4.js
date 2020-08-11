
var arra = ["GUVI", "I", "am", "Geek"];

var newobject={}


console.log(transformFirstAndLast(arra))
function transformFirstAndLast(arr) {
    
    newobject[arr[0]]=arr[arr.length-1]
    return newobject;
   }