const exprees=require('express');
const path=require('path');

const app=exprees();
const publicPath=path.join(__dirname,'public');

app.set('view engine','ejs');
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});
app.get('/profile',(_,resp)=>{
    const user={
        name:'zapy',
        age:'25',
        city:'safidon',
        skills:['php','js','c++','java','node']
    }
    resp.render('profile',{user});
});
app.get('/login',(_,resp)=>
{
    resp.render('login');
});
app.listen(4200);
console.log("4200 Running.....");