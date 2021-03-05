const express=require("express");
const bodyParser=require("body-parser");

const app=express();
let newItems=["Go to Running",
     	"Read NewsPaper",
     	"Go to Work","sleeping"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static("public1"));

app.get("/",function(req,res){

	let Date1= new Date();
	let obj = { weekday: 'long', 
	year: 'numeric',
    month: 'long', 
    day: 'numeric' };
    
    var Day1=Date1.toLocaleDateString("en-US",obj);
	res.render('taskList', {dayName: Day1,NewTaskIs: newItems});
});
app.post("/", function(req,res){
	let newItem=req.body.NewTask
	newItems.push(newItem);
	res.redirect("/");
});

app.listen(3000,function(){
console.log("server is  sucessfully run on port 3000");
});