const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
fs.readFile('./data.txt', (err, data) =>{
    // res.writeHead(200,{'Content-Type':'application/text'})
    res.write(data);
        res.write('Hello Node....');
        res.write(req.url);
        res.end();
    });
}).listen(8080);
// fs.rename('data1.txt','data2.txt',(err)=>{
//     console.log('opened...!')
// }); 
