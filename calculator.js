var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send('calculator');
});

router.get('/add', function(req, res) {
	res.send('add');
});

router.get('/sub', function(req, res) {
	res.send('sub');
});

router.get('/div', function(req, res) {
	res.send('div');
});

router.get('/mult', function (req, res) {
	res.send('mult');
});

module.exports = router;
