class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title
        this.studio=studio
        this.rating=rating
        movielist.push(this)
    }
}
var movielist=[]
function getPG(item){
    return Object.entries(item.filter((items)=>items.rating=="PG"))
}
var movie1=new Movie("Movie1","studio1","R")
var movie=new Movie("Movie2","studio2","RG")
var movie3=new Movie("Movie3","studio3","PG")
var movie4=new Movie("Movie4","studio1")
var movie4=new Movie("Casinoroyale","EOS","PG13")

console.log(getPG(movielist))
