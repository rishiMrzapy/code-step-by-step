//remove extension from URL :- url se alg content dikhana jese chhupana
// ->Apply get method 
// -> remove an extension from URL
// -> Make 404 page:- glt url pr aa gye to shi instruction dena 
// -> Apply 404 page
const exprees =require('express');
const path=require('path');

const app=exprees();
const publicPath=path.join(__dirname,'public');
app.get('',(_,resp)=>
{
    resp.sendFile(`${publicPath}/index.html`);
});
app.get('/about_me',(_,resp)=>// yha name kuhh bhi likh skte hai page se unrelated bhi
{
    resp.sendFile(`${publicPath}/about.html`);
});
app.get('/help',(_,resp)=>
{
    resp.sendFile(`${publicPath}/help.html`);// yhi se extension remove kr skte hai send ki jagah sendFile
});
app.get('*',(_,resp)=>
{
    resp.sendFile(`${publicPath}/4o4.html`);
});
app.listen(4000);
console.log("Runnig.......4000");
