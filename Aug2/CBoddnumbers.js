var oddies=(function(brr){
    var k=[]
    for(ele in brr){
        if(ele % 2 != 0){
            k.push(ele)
        }
    } 
    return k
    
}
)([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]).filter((item)=>{
    return item % 3 == 0
})

console.log(oddies)








