const fs = require('fs');

var file = process.argv[2];

var fileContents = fs.readFileSync(file, 'utf8');

var newLine = /\n/g;

var newLIneMatch = fileContents.match(newLine);

var newLineCount = newLIneMatch.length;

console.log(newLineCount);