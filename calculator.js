var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send('calculator');
});

router.get('/add/:num1/:num2', function(req, res) {
		var param1 = req.params.num1;
		var param2 = req.params.num2;
		var number1 = parseInt(param1, 10);
		var number2 = parseInt(param2, 10);
		var result = number1 + number2;
		res.send(result.toString());
});

router.get('/sub/:num1/:num2', function(req, res) {
	var param1 = req.params.num1;
	var param2 = req.params.num2;
	var number1 = parseInt(param1);
	var number2 = parseInt(param2);
	var result = number1 - number2;
	res.send(result.toString());
});

router.get('/div/:num1/:num2', function(req, res) {
	var param1 = req.params.num1;
	var param2 = req.params.num2;
	var number1 = parseInt(param1);
	var number2 = parseInt(param2);
	var result = number1 / number2;
	res.send(result.toString());
});

router.get('/mult/:num1/:num2', function (req, res) {
	var param1 = req.params.num1;
	var param2 = req.params.num2;
	var number1 = parseInt(param1);
	var number2 = parseInt(param2);
	var result = number1 * number2;
	res.send(result.toString());
});

module.exports = router;
