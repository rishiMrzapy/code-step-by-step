// Make Route
// Insert data in Mysql
const express =require('express');

const connection= require('./config');// import kri hi
const app = express();
app.use(express.json());// data ko json formate m parse krna pdta h phle 

app.get('/',(req,resp)=>{
     //resp.send("route done");
     connection.query("select * from citi",(err,result)=>{
          if(err)
          {
            resp.send("Error");
          }
          else
          {
            resp.send(result);
          }
     });
});

app.post("/",(req,resp)=>{// alag method m same route use kr skte hai 
     //const data={cid:5,city:'cullketta'};
     const data=req.body;// serer(postman) se data get krne k liye 

     connection.query("insert into citi set ?",data,(error,result,fields)=>{
          if(error) error;
          resp.send(result);
     });
});
app.listen(5003,()=>{
    console.log("Running at Port 5003.....");
});

//I.Q:-1. Node js ki help se database bhi create kiya ja skta hai
//I.Q:-2. Node js m 2 database ko bhi connect kr skte hai


