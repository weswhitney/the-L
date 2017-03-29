var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var vegetables = [
	"Carrots",
	"Cucumber",
	"Peas"
];

app.get("/", function(req, res) {
	// res.send("hello world");
	res.render('index', {name: "Elie"});
});

app.get("/vegetables", function(req, res) {
	res.send(vegetables.join(", "));
});

app.get("/hello/:name", function(req, res) {
	res.send("Hello, " + req.params.name);
});

app.get("/hi", function(req, res) {
	var name = req.query.name;
	res.send("Hello, " + name);
});

app.listen(3000, function () {
	console.log("starting server on localhost:3000");
});

