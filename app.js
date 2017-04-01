var express = require('express');
var app = express();
var calculator = require('./calculator');

app.use(express.static(__dirname + '/public'));


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

// use only one route instead of 4
app.use('/calculator', calculator);

// app.get("/add/:num1/:num2", function(req, res) {
// 	var param1 = req.params.num1;
// 	var param2 = req.params.num2;
// 	var number1 = parseInt(param1);
// 	var number2 = parseInt(param2);
// 	var result = number1 + number2;
// 	res.send(result.toString());
// });

// app.get("/sub/:num1/:num2", function(req, res) {
// 	var param1 = req.params.num1;
// 	var param2 = req.params.num2;
// 	var number1 = parseInt(param1);
// 	var number2 = parseInt(param2);
// 	var result = number1 - number2;
// 	res.send(result.toString());
// });
//
// app.get("/mult/:num1/:num2", function(req, res) {
// 	var param1 = req.params.num1;
// 	var param2 = req.params.num2;
// 	var number1 = parseInt(param1);
// 	var number2 = parseInt(param2);
// 	var result = number1 * number2;
// 	res.send(result.toString());
// });
//
// app.get("/div/:num1/:num2", function(req, res) {
// 	var param1 = req.params.num1;
// 	var param2 = req.params.num2;
// 	var number1 = parseInt(param1);
// 	var number2 = parseInt(param2);
// 	var result = number1 / number2;
// 	res.send(result.toString());
// });

// listen on port 3000
app.listen(3000, function () {
	console.log("starting server on localhost:3000");
});
