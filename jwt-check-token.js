var jwt = require('jsonwebtoken');

var existingToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW1tdSIsImlhdCI6MTY4MDYwNzU1M30.AJ6YIQKOEVDxEbAsfaKAOrZQT29IkrsRs4rAhUQdk-c'

var secrete = 'secrete-key';

const verify = jwt.verify(existingToken, secrete);

console.log("Decode Key",verify);