var fs=require("fs")
var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest

var request=new XMLHttpRequest()

request.open("GET",'https://restcountries.eu/rest/v2/all',true)
request.onload=function(){

    var data=JSON.parse(this.responseText)

    var real=JSON.stringify(data)

    // data.forEach(element => {
    //     element.population += 100000
    //     console.log(element.population)
    // });
    // data.forEach(element => {
    //     element.name = element.name.toUpperCase()
        
    // });
    //  for(prop in data){
    // if(data[prop].population > 50000000){
    //     console.log(data[prop].name)
    // }
    // }
    /* Names of countries under Asia */
    var noundef=[...data]
    var filtered=(noundef.map((item)=>{
        
          if(item.region=='Asia'){
                  return item
              
          }
    }))

    /*Total population of countires under asia */
    var filtt=filtered.filter((item)=>{
        return typeof(item)!='undefined'
    })
    
    var totz=filtt.map((item)=>{
        return item.population

    })
    var final = totz.reduce((total,item)=>{
       return  total+item
    },0)

    console.log(final)
}
request.send()

