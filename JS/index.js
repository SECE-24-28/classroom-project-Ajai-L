// console.log(a);
// //hoisting
// var a = 10;
// //global scope / Function scope
// console.log(a);

// //ES6
// //let and const
// //console.log(b); //ReferenceError
// //temporal dead zone
// let b = 20;
// b = 130;
// //Block scope
// console.log(b);
// //{
// //let b = 30;
// //console.log(b);
// //}

// console.log(c);
// const c = 40;
// c = 70; //TypeError

// console.log(c);

// //Functions
// //1. Named Functions
// //function declaration
// function namedFunction() {
//   console.log("Named Function");
//   console.log("Named Function");
//   console.log("Named Function");
// }

// //Function Call/Invocation
// namedFunction();

// //funcExp();
// //2. Function Expressions
// let funcExp = function () {
//   console.log("Function Expression");
// };

// funcExp();

// //3. Arrow Functions
// let arrow = () => {
//   console.log("Arrow Function");
// };

// arrow();

// //4. Callback Functions and 5. IIFE (Immediately Invoked Function Expression)

// (() => {
//   console.log("Callback and IIFE");
// })();

// // const addTwoNumbers = () => {
// //     let num1 = 10;
// //     let num2 = 20;
// //     let sum = num1 + num2;
// //     console.log("Sum:", sum);
// // 
// // };


// const addTwoNumbers = (parameter1, parameter2) => {
//   let num1 = parameter1 || 10; //default value is 10
//   let num2 = parameter2 || 20; //default value will be 20
//   let sum = num1 + num2;
//   console.log(`Sum: $(sum)`, sum);
// };
// addTwoNumbers(20, 50);
// addTwoNumbers(40, 60);
// addTwoNumbers();

let a =10;
let b ="2";
console.log(a / b);
console.log(a == b);

let c = [1, 2, 3, "ass"];
let d = [1, 2, 3, "ass"];
console.log(c[0] === d[0]);

let arr = [1,2,3,4,5,6];

//for loop
for(let i =0; i<arr.length; i++) {
    console.log(i, arr[i]);

}
console.log(arr);

let arr1=[1,2,3,4,5,6]
//forEach

arr1.forEach((element, index) => {
    console.log(element, index);
});

let arr2 = [1,2,3,4,5,6];
//let aa =arr.map((el,ind)=> {
//return el+ind;
//})

let aa = arr.map((el,ind)=> el+ind);
console.log(arr2);
console.log(aa);