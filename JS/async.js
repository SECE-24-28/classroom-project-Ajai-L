// setTimeout(() => {
//     console.log('SetTimeout Function');
// }, 0);
// //Callback fun and timer
// console.log('Hello World');

// //Callback Hell
// //nested callbacks
// setTimeout(() => {
//     console.log('SetTimeout Function 1');
//     setTimeout(() => {
//         console.log('SetTimeout Function 2');
//         setTimeout(() => {
//             console.log('SetTimeout Function 3');
//             setTimeout(() => {
//                 console.log('SetTimeout Function 4');
//                 setTimeout(() => {
//                     console.log('SetTimeout Function 5');
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);

// //promises
// //3 states: pending, fulfilled, rejected
// const myPromise = new Promise((res, rej) => {
//     let marks = 40;
//     if (marks >= 60) {
//         res("Student passed the exam");
//     } else {
//         rej("Student failed the exam");
//     }
// });

// ///ways to call a promise
// //1. then and catch
// myPromise
//     .then((message) => {
//         console.log(a);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// //2. async await
// //no error handling
// let handlePromise = async () => {
//     try{
//         console.log("asdf");
//         let response = await myPromise;
//         console.log(response);
//         console.log('Anything');
//     } catch(err){
//         console.log(err);
//     } finally{
//         console.log('This will execute anyway');
//     }
// };


//fetch an API
// let fetchdata=()=>
// {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res)=>
//     {
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=>
//     {
//         console.log("value is:",data);
//     })
//     .catch((err)=>
//     {
//         console.log(err);
//     });
// };


let fetchData=async()=>
{
    try
    {
        const response=await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response);
        const data=await response.json();
        console.log("Value is:",data);
    }catch(err)
    {
        console.log(err);
    }
};
fetchData();

let localDat = JSON.parse(localStorage.getItem("responseData")) || [];

if(localDat.length <= 0){
    fetchData();
}