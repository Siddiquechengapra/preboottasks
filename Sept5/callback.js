for(let i=10;i>0;i--){
        setTimeout(()=>{
            console.log(i,"...")
            if(i===1){
                setTimeout(loopdone,1000)
            }
        },(Math.round(100/i))*100)
 }


 function loopdone(){
     console.log("Happy coding ..! ")
 }


