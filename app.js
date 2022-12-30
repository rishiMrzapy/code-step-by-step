const exprees= require('express');
const app=exprees();
const port=8080;
var route= require('./route');
app.use('/',route);
app.set('view engine','ejs');

app.listen(port,()=>{
    console.log(`App is listening at http://127.0.0.01:${port}`)
});