const http = require('http');

var responseArray = [];

http.get('http://omdbapi.com/?i=tt0241527', function(res) {
	responseArray.push(res);
	console.log('527 : ' + responseArray.length + ' ' + responseArray);
});

http.get('http://omdbapi.com/?i=tt0295297', function(res) {
	responseArray.push(res);
	console.log('297 :' + responseArray.length);
});