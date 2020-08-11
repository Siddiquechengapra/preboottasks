var capies=(function(sttr){
    var y=[]
    for(prop in sttr){
        y.push(sttr[prop].toUpperCase())
    }
    return y
})(["hello","how are you","im fine"])

console.log(capies)