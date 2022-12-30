const express=require('express');
const app=express();
app.get("",(req,resp)=>
{// html data render
    resp.send(`<h1>welcome to the home page</h1><a href="/about" >Go to About page</a>`);
});
app.get("/about",(req,resp)=>
{  // form formate render
    resp.send(
        `<input type="text" placeholder="user name" value="${req.query.name}"/>
        <button>click Me</button> <a href="/" >Go to home page</a>
         `)
});
app.get("/help",(req,resp)=>
{           // json data render
    resp.send(
        [
            {
                name:'zapy',email:'zapyviraj@gmail.com'
            },
            {
                name:'viraj',email:'zapyviraj@gmail.com'
            }
        ]
        )
});
app.listen(4200);
console.log("server runnig at http//:127.0.0.1:4200")