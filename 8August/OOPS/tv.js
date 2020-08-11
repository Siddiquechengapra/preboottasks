class TV{
    constructor(price=0,brand="default",channel=1,onoff=true,volume=50){
        this.brand=brand
        this.channel=channel
        this.price=price
        this.onoff=onoff
        this.volume=volume

    }
   
    volumeinc(){
        if(this.volume<100 && this.volume>0){
            this.volume++
        }
    }
    volumedec(){
        if(this.volume<100 && this.volume>0){
            this.volume--
        }
    }
    setchannel(a){
        if(a>60){
            this.channel=channel
        }else{
            this.channel=a
        }
    }
    reset(){
        this.brand="default"
        this.channel=1
        this.price=0
        this.onoff=true
        this.volume=50
    }

    

    
}

class LED extends TV{
    super()
    constructor(screenthick,energyusage,lifespan,refreshrate="60Hz"){
        this.screenthick=screenthick
        this.energyusage=energyusage
        this.lifespan=lifespan
        this.refreshrate=refreshrate
        }
viewangle(a){
    this.viewang=a
}
backlight(b){
this.backlightval=b
}
displaydetails(){
   console.log(this.backlightval)
   console.log(this.viewang)
}
}
var tvobj=new TV(20,"Samsung",3,false,32)
var tvobj2=new TV(30,"Sony",45,99)
var ledobj=new LED(30,25,5,"120Hz")


console.log(tvobj)

tvobj2.reset()
console.log(tvobj2)
console.log(ledobj)
