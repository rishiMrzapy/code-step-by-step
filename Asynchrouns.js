// console.log("start execution....");
// setTimeout(()=>{console.log("Mid exection.....");},2000)
// //console.log("Mid exection.....");
// console.log("End execution......");

// start execution...... ye to pahle hi chlna thaa 
//End execution......  pahle end chl gya wait nhi kiya 
//Mid exection..... 2 sec. delay ho kr print huaa 


// Drawbacks

// let a=10;
// let b=0;
// setTimeout(()=>{b=20;},2000)
// console.log(a+b);

// Out Put

// start execution....
// End execution......
// a+b=10//   2 sec. delay thaa esliye console phle chal gya 
// Mid exection.....

// solution :- callBack function , or Promises

let a=20;
let b=0;

let waitingData= new Promise((resolve,reject)=>// Promises Internal Data ka wait krta hai jo uske andr likha hota hai
{
    setTimeout(()=>
    {  b=30;// result ko resolve k andr pass kr denge jo bhi complex logic result ki form m pass krna h 
        resolve(b)// eske andr array,object,string kuchh bhi pass kr skte hai
    },2000)
})
waitingData.then((b)=>// ( agr waitingData k andr reslut aata h then(to fir) )
{
    
    console.log(a+b);
})