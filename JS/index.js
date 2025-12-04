console.log(a);
//hoisting
var a = 10;
//global scope / Function scope
console.log(a);

//ES6
//let and const
//console.log(b); //ReferenceError
//temporal dead zone
let b = 20;
b =130;
//Block scope
console.log(b);
//{
//let b = 30;
//console.log(b);
//}

console.log(c);
const c = 40;
c = 70; //TypeError

console.log(c);

//Functions
//1. Named Functions
//function declaration
function namedFunction(){
    console.log("Named Function");
    console.log("Named Function");
    console.log("Named Function");
}

//Function Call/Invocation
namedFunction();

//funcExp();
//2. Function Expressions
let funcExp = function(){
    console.log("Function Expression");
};

funcExp();

//3. Arrow Functions
let arrow = () => {
    console.log("Arrow Function");
};

arrow();

//4. Callback Functions and 5. IIFE (Immediately Invoked Function Expression)

