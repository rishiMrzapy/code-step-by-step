// Make Route for API
//PUT API data ko update krne k liye use ki jaati hai 
// Get Data from Postman
// Update data in Mysql
// I.Q
const express =require('express');

const app = express();



app.use(express.json());

const connection= require('./config');// import kri hi
//const app = express();

app.get('/',(req,resp)=>{
     //resp.send("route done");
     connection.query("select * from citi",(err,result)=>{
          if(err) throw err;
          resp.send(result);

          
     });
});
app.listen(5004,()=>{
    console.log("Running at Port 5003.....");
});

//app.put("/",(req,resp)=>{// statically get
app.put("/:id",(req,resp)=>{// dynamically get 

    //const data=["Parrot","26",req.params.id];// statically update 
    const data=[req.body.name,req.body.age,req.body.gender,req.params.id];// dynamically update 

    connection.query("Update personal set name= ?,age= ?,gender=? WHERE id=?",data,(err,result,fields)=>{
       
        if(err) 
          {
            resp.send("Error");
          }
          else
          {
            resp.send(result);
          }
    });
    resp.send("Update api working");
});

// I.Q:- Agr update krte time data exit nhi krta to insert kr skte hai if condition lga kr 
// if (no row effected){insert into.......}