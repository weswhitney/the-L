const fs = require('fs');

var file = process.argv[2];

fs.readFile(file, function(err, data) {

	if (err) throw err;

	var fileContents = data.toString();

	var newLine = /\n/g;

	var newLIneMatch = fileContents.match(newLine);

	var newLineCount = newLIneMatch.length;

	return console.log(newLineCount);

});



