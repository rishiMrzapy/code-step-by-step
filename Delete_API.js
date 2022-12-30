const express= require('express');

const app = express();

 app.use(express.json());

 const connection= require('./config');

 app.delete("/:id",(req,resp)=>{
    //resp.send(req.params.id);
    connection.query("DELETE FROM personal WHERE id="+ req.params.id,(err,result)=>{

        if(err) throw err;
        resp.send(result);
        
    });
    
 });
 app.listen(5000,()=>{
    console.log("Running at 5000.....");
 });