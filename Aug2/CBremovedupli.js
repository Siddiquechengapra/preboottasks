var unique=(function(tr){
    var ty=[]
    for(io in tr){
        if(ty.includes(tr[io])){

        }else{
            ty.push(tr[io])
        }
    }
    return ty
})(["hello","hello","hi","hi","hope all are good"])

console.log(unique)
