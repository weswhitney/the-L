const http = require('http');

var responseArray = [];

http.get('http://omdbapi.com/?i=tt0241527', function(res) {
	responseArray.push(res);
	res.on('data', function() {
		http.get('http://omdbapi.com/?i=tt0295297', function(res) {
			responseArray.push(res);
			console.log(responseArray);
		});
	});
});
