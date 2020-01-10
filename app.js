var express = require("express"),
    app		=  express(),
	bodyParser = require("body-parser"),
    ejs		= require("ejs"),
	colors = require("colors"),
	mongoose	= require("mongoose");
	methodOverride = require("method-override")


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

//Configure Mongoose
//ongoose.connect("mongodb://localhost:27017/carlos", { useNewUrlParser: true,useUnifiedTopology: true });


app.get("/",function(req,res){
	res.redirect("/index");
});

app.get("/index",function(req,res){
	res.render("ourstory");
})



app.listen(3000,function(){
	console.log("Lets Make a Profile, for an old friend.".yellow)
})