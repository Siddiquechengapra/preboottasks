// Create a request variable and assign a new XMLHttpRequest object to it.
var fs=require('fs')
var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest
var request = new XMLHttpRequest()


// Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://api.openweathermap.org/data/2.5/weather?q=London&appid=14d0060b5ba25669667dc93230eb7430',true)
console.log("allow")
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.responseText)


let dats=JSON.stringify(data)

fs.writeFileSync('./weatherdata.json',dats)
}
request.send();




