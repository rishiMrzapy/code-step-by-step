// middleware routes k sath hi use hote h
//enki help se reqst or response ko access kr skte h and apne hissab se modify kr skte hai

// Application level middleware (sbhi rout pr lag jaayega)
const  exprees=require('express');
const app=exprees();

const reqFilter=(req,resp,next)=>{

    if(!req.query.age)
    {
        resp.send('Please provide age');
    }
    else if(req.query.age<18)
    {
         resp.send('You are under teenage ,So u can not acces');
    }
    else{
               next();
        }
}
app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('welcome to home page');
});

app.get('/users',(req,resp)=>{
    resp.send('welcome to users page');
});
app.listen(5000);
console.log('Running......5000');