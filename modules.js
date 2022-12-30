// core module:- fs,Buffer,HTTP ...etc
//Global module :- Jinko import krne ki jarurt nhi hoti jese console.log.....( inko import nhi krna pdta )
// Non-Global:-fs,Buffer,etc.... inko import krna pdta hai

//const fs=require('fs');
//fs.writeFileSync("vnu.txt"," some code")
   // or 

   const fs=require('fs').writeFileSync;
   fs("xyz.text","abc")