const http=require('http');
const data=require('/home/mrzapy/Desktop/Node_js/node_modules/data.js');// dusri file se data import kiya hai yha
http.createServer((req,resp)=>
{
       resp.writeHead(303,{'Content-Type':'application\json'});
       resp.write(JSON.stringify(data));// dusri file se data import kr k yha direct bhi data 
          //pass kr skte hai stringfy function m
       resp.end();
}).listen(5000);
console.log('server running at http://127.0.0.1:5000/');
