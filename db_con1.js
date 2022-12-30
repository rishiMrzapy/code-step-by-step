const mysql      = require('mysql');
const connection = mysql.createConnection({// connection bnane k liye fxn h 4 parameter leta hai
  host     : 'localhost',// parametr 1
  user     : 'root',// parameter 2
  password : '',     // parameter 3
  database : 'practice'// parameter 4
});
 
connection.connect((err)=> // ye code connection check krne k liye h connection bna k ni bna esko hta bhi skte hai
{
   if(err)
   {
    console.log("error");
   }
   else
   {
    console.log("connected");
   }
});
connection.query("select * from citi where (cid=1 && city='agra')",(err,result)=>
{
    console.warn("result",result);
});
 
