// Bahut jayada route h tb kuchh specific routs fr hi lagana ho to route lvl use krte hai
// Route Level Middleware
// Apply Middleware on single Route
// Make middleware in different file
// Apply same Middleware in the group of route

const  exprees=require('express');
const app=exprees();
const route=exprees.Router();

//const reqFilter=(req,resp,next)=>{// esko kisi dusri file m bna kr import bhi kr skte hai
// kyoki middleware bahut sare ho skte hai esliye dusri file m shi rehta hai 
const reqFilter=require('./middleware');// imported file from middleware.js
//     if(!req.query.age)
//     {
//         resp.send('Please provide age');
//     }
//     else if(req.query.age<18)
//     {
//          resp.send('You are under teenage ,So u can not acces');
//     }
//     else{
//                next();
//         }
// }
//app.use(reqFilter);// app vala htana pdega
route.use(reqFilter);// groups k liye

app.get('/',(req,resp)=>{
    resp.send('welcome to home page');
});

app.get('/users',reqFilter,(req,resp)=>{// yha bhi kam krega 
    resp.send('welcome to users page');
});
app.get('/about',reqFilter,(req,resp)=>{// ab bss about vaale pr work krega(single vala h ye)
    resp.send('welcome to about page');
});
route.get('/contact',reqFilter,(req,resp)=>{// groups of route pr lagana ho to 
    resp.send('welcome to contact page');
});
route.get('/Info',reqFilter,(req,resp)=>{// yha bhi same 
    resp.send('welcome to info page');
});

app.use('/',route);// groups k liye last m ye apply krna pdega 
app.listen(5000);
console.log('Running......5000');

// note ;-  groups m :- use nhi krna h to app.
// note:-  krna h to route. use krenege 