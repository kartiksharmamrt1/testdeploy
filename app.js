var express = require("express");
var app = express();
app.use(express.json());
app.set("view engine", "ejs");
const about = require('./views/about');

app.get("/", function(req,res){
	res.send('home');
});

app.use("/about", about);

app.listen(process.env.PORT,process.env.IP);