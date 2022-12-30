// Make config file:- jb hm prjct pr kaam krte h to connection k liye alg se config file bnate h
// Make Route for API
// Get data from Mysql
const mysql=require('mysql');
const connection= mysql.createConnection({
    host :'localhost',
    user:'root',
    password:'',
    database:'practice'
});
connection.connect((err)=>{
    if(err)
    {
        console.log("error in connection")
    }
    else
    {
        console.log("connected");
    }
});
module.exports=connection; // export kri hai 