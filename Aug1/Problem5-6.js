// var arrayy = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
// var newObject = {};
// function fromListToObject(arr) {
    
//     for(var i =0;i<arr.length;i++){
//         newObject[arr[i][0]]=arr[i][1]
//     }
    
//     return newObject;
//    }

//    console.log(fromListToObject(arrayy))

var arrayy = [[["firstName", "Vasanth"],
 ["lastName", "Raja"], 
 ["age", 24], 
 ["role", "JSWizard"]],

 [["firstName", "Sri"], 
 ["lastName", "Devi"], 
 ["age", 28], 
 ["role", "Coder"]]];
 function transformEmployeeData(arr) {
    
    
    var ob={}
 for(var i=0;i<arrayy[0].length;i++){
     ob[arrayy[0][i][0]]=arrayy[0][i][1]

 }
 var ob2={}
 for(var i=0;i<arrayy[1].length;i++){
    ob2[arrayy[1][i][0]]=arrayy[1][i][1]

}
var tranformEmployeeList = [ob,ob2];  
    return tranformEmployeeList;
   }


  console.log (transformEmployeeData(arrayy))
   