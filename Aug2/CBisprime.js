var isprime=(function(inp){
var final=[]
for(val in inp){
    let x=[]
    for(let i=inp[val];i>0;i--){
        if(inp[val] % i == 0){
            x.push(i)
        }
        if(x[0]==inp[val] && x[1]==1){
            final.push(inp[val])
        }
    }
    
}
return final

})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])

console.log(isprime)