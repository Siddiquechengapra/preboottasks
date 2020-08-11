var median=(function(inp1,inp2){

    let joined=[...inp1,...inp2].sort((a,b)=>  a-b)
    console.log(joined)
    if(joined.length % 2 == 0){
        return (joined[(joined.length/2)-1]
                +joined[(joined.length/2)])
                 / 2
    }
})([15,14,13,12,11],[10,9,8,7,6])

console.log(median)