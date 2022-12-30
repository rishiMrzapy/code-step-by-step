const express=require('express');
const path=require('path');

const app= express();// yha ye exprees ka executable function banaya hai
const publicPath=path.join(__dirname,'public');

console.log(publicPath);
app.use(express.static(publicPath));// ye express ka hi function h static name se 
// jo static content ko load krta hai 

app.listen(4200);
console.log("htpp://127.0.0.01:4200/");