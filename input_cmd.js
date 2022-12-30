const fs= require('fs');// fs module include kiya
const input= process.argv;// process k argument vector ko call kiya
fs.writeFileSync(input[2],input[3]);// cmd se input legi ab (node input_cmd.js apple.txt 'this is a fruit')

if(input[2]=='add')  //node input_cmd.js apple.txt 'this is a fruit'
{
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove')// node input_cmd.js remove file_name.txt
{
    fs.unlinkSync(input[3])
}
else
{
    console.log("invalid input")
}