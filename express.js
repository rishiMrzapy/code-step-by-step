const express=require('express');
// express ko executable bnana hota hai
const app=express();// execute kr k ek app variable m le liya
app.get('',(req,resp)=>// get method k 1st parameter m rout jata h k kya bnana chahte h
{
     resp.send('Hello, this is home page');
});// hme routes provide krte hai
app.get('/about',(req,resp)=>
{
    resp.send('About us page');
});
app.get('/help',(req,resp)=>
{
    resp.send('help page');
});

app.listen(5000);
console.log('server running at http://127.0.0.1:8081/');
 