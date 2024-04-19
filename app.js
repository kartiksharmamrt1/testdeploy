var express = require("express");
var app = express();
app.use(express.json());
app.set("view engine", "ejs");
const about = require('./views/about.ejs');

app.get("/", function(req,res){
	res.send('home');
});

app.get("/about", about);

app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})