var fs=require("fs")
var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    },
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
    
   }
   
var total=0
for(var i=0;i<cat.catFriends.length;i++){
    total += cat.catFriends[i].activities.length
}
var total2=cat.activities.length

var totalactivities=total+total2
for(var i=0;i<cat.catFriends.length;i++){
cat.catFriends[i].activities[cat.catFriends[i].activities.length]="jump around"
}
cat.catFriends[0].furcolor="Yellow"
console.log(cat.catFriends[0].furcolor)

