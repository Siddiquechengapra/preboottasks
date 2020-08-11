var securityQuestionss=[
    {
    question:"What was your first pet’s name?",
    expectedAnswer:"FlufferNutter"
    },
    {
    question:"What was the model year of your first car?",
    expectedAnswer:"1985"
    },
    {
    question:"What city were you born in?",
    expectedAnswer:"NYC"
    }
   ]
var securityQuestions = JSON.stringify(securityQuestionss)
   function chksecurityQuestions(securityQuestions,questionout,answerin) {
   
   for(var i in securityQuestions){
       if(securityQuestions[i].question==questionout && securityQuestions[i].expectedAnswer==answerin){
           return true
       }
       
   }
   return false
   
    }
     
    // console.log(chksecurityQuestions(securityQuestions,a,b))
    console.log(securityQuestions)
    
    