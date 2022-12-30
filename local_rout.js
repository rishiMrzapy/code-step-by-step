const express =require('express');

const connection= require('./config');// import kri hi
const app = express();

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
app.listen(5003,()=>{
    console.log("Running at Port 5003.....");
});

