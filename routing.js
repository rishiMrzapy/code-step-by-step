const express=require('express');
const app=express();
app.get('',(req,resp)=>
{
    //resp.send("welcome",+ req.query.name);
    console.log("data sent by browser >>>>",req.query.name);
    resp.send("welcome ,"+req.query.name);
});
app.listen(5000);
app.get('/about',(req,resp)=>
{
    resp.send('About us page');
});
app.get('/help',(req,resp)=>
{
    resp.send('help page');
});

//app.listen(8081);
console.log('server running at http://127.0.0.1:8081/');