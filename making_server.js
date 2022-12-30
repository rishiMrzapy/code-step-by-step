// http.createServer((req,resp) =>// Yha passing k time hi define kr diya ,niche define kahi hor kr k pass Create Server name vaale function m pass kr diya 
//  {
//     resp.writeHead(200,{'Content-type':'text/plain'});
//     resp.end("<h1>Hello World in Node js</h1>");
//  })  http module :-const http=require('http');//Node js k andr server ki request or response ko handle krta hai
//  listen(5000);//free port
//  console.log('server running at http://127.0.0.1:8081/');
 const http=require('http');
 function dataControl(req,resp)
 {
    resp.writeHead(200,{'Content-type':'text/plain'});
   resp.end("<h1>Hello World in Node js</h1>");
    
 }
 http.createServer(dataControl).listen(5000)// Function pass kr diya yha kahi or define kr k
 console.log('server running at http://127.0.0.1:8081/');
 


 