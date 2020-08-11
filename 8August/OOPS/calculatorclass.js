class calculator{

    constructor(value1,value2){
        this.value1=value1
        this.value2=value2
    }
    add(){
       return this.value1 + this.value2;
    }
    sub(){
        return this.value1- this.value2;
     }
    multply(){
        return this.value1 * this.value2;
     }
     divide(){
        return this.value1 / this.value2;
     }

}

var k=new calculator(10,10)
console.log(k.add())
console.log(k.sub())
console.log(k.multply())
console.log(k.divide())
