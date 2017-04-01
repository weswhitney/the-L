var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var vegetables = [
	"Carrots",
	"Cucumber",
	"Peas"
];

app.get("/", function(req, res) {
	res.render('index', {name: "Elie"});
});

app.get("/vegetables", function(req, res) {
	res.send(vegetables.join(", "));
});

app.get("/hello/:name", function(req, res) {
	res.send("Hello, " + req.params.name);
});

app.get("/hi", function(req, res) {
	var otherName = req.query.otherName;
	var name = req.query.name;
	res.send("Hello, " + name + "and " + otherName);
});

app.get("/add", function(req, res) {
	res.send('add function');
});

app.get("/sub", function(req, res) {
	res.send('sub function');
});

app.get("/mult", function(req, res) {
	res.send('mult function');
});

app.get("/div", function(req, res) {
	res.send('add function');
});

// listen on port 3000
app.listen(3000, function () {
	console.log("starting server on localhost:3000");
});
