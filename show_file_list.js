//=> make files in a folder 
// =>use path module 
// =>get file names and print
const fs=require('fs');
//fs.writeFileSync('apple.txt','fruit file');// sirf ek file bnegi but hum ek sath bahut jayada file bnana chahte h
const path=require('path');
const dirPath=path.join(__dirname,'files');//jis folder m file bnani h uska path chahiye hoga

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+".txt","abc");
// }
// file ko read kr k list krwana hai
fs.readdir(dirPath,(err,files)=>// jab list bnani ho to directory read krni pdti hai
                                // file read content read krne m kam aati hai
{
    files.forEach((item)=>
    {
        console.log("file name is ",item)
    }
    )
}
)

// Note :- jis folder m node js run ho rhi h sirf usi ki file acces ho skti h kisi or folder ki 
// ki nahi vo folder as web server ki trh work krta hai