// CRUD with file System

// . make File
// . read File
// . Update File
// . rename File
//  . delete File
const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'CRUD');
const filePath=`${dirPath}/applee.txt`;
//fs.writeFileSync(filePath,'fruit file');

// Read file

// fs.readFile(filePath,'utf8',(err,item)=>
// {
//     console.log(item)
// })

// Update file

// fs.appendFile(filePath,' fruit full result',err=>{
//     if(!err) console.log("file is updated")
// })


//  Rename file

// fs.rename(filePath,`${dirPath}/applee1.txt`,err=>
// {
//     if(!err) console.log("file is renamed")
// })

//   Delete file

fs.unlinkSync(`${dirPath}/applee1.txt`,(err)=>
{
    if(!err) console.log("file is deleted")
})

//  Buffer:- Temporary memory location .jab hum node ko koi operation perform krna hota hai to 
   // kuchh memory chahiye hoti hai usi ko Buffer bolte hai