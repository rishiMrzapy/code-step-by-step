/*const arr=[2,4,3,5,6,7,3,9];
let result=arr.filter(item=>{
      //console.log(item)// filter fxn apne aap ek loop chla deta hai
      //return item===3// 3 kitni baar aaya hai
      return item >4;// 4 se bade value
})
console.warn(result)*/

// filter function
// let arr=[2,4,6,8,10,12,14,16,18,20];
// //result= 10 se badi value
// let arr1= arr.filter(val => val>10)
// console.log(arr1);
 
// Arrow Function

function sumf (a,b)
{
    return a+b;
}
//let sumA=a=> return a;// sirf return ho to likhna nhi hota 
// let sumB=a=>a;// function m sirf 1 line ho or return krta ho

// console.log(sumf(2,3));
// console.log(sumB(5))
// function double(a)
// {
//     return 2*a;
// }
// let doubleA=a=>2*a;
// console.log(doubleA(4));

// function random()
// {
//     return Math.random();
// }
// let random=()=>Math.random();// jab ek bhi parameter na ho braces rkhni hai

//Anomious function
//document.addEventListener('click',()=>console.log("clicked...."));

// CallBack function:- ek function k andr dusra function kese pass krenge as a parameter

 function sayhello()
 {
    console.log("hello");
 }
 function sayhi()
 {
    console.log("hii...")
 }

function add(x,y,Callback)
{
    //sayhello();
    console.log(x+y);
    Callback();
}
let a=10;
let b=20;
// har call m alg alg function ko pass kr skte hai as parameter recever ek hi hoga
add(a,b,sayhello);
add(20,30,sayhi);
add(20,16,function()//Anonymous function
{
    console.log("bye...")
});




