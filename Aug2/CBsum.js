var sums=(function(tr){
    var total=0;
    for(i in tr){
        total+=tr[i]
    }
    return total
})([1,2,3,4,5,6,7,8,9,10])

console.log(sums)