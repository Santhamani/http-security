var fs = require('fs');
var data = fs.readFileSync('./data.txt')

console.log(data.toString());

var writeData = fs.appendFileSync('./data.txt', 'hello i am appended text..')

console.log(writeData);