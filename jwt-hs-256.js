const jwt = require('jsonwebtoken');

var secrete = 'secrete-key';

var payload = {
    name : 'Ammu'
};

// create JWT Token
var newToken = jwt.sign(payload,secrete, {
    algorithm:'HS256'
})

console.log(newToken)

/**
 * https://cryptotools.net/rsagen
 */