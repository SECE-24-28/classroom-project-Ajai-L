// let a = document.getElementById("b");
// console.log(a);

// let b = document.getElementsByTagName('h1');
// console.log(b);

// let c = document.getElementsByClassName("a");
// console.log(c);
// let sel_1 = document.querySelector("#b");
// console.log(sel_1);

// let sel_2 = document.querySelectorAll("#b");
// console.log(sel_2);

// //Read and Write operations
// let head = document.querySelector("p")
// //Read Operation
// console.log(head.textContent);

// //Write operation
// head.textContent = "This is the new paragraph content.";

// let div = document.querySelector("div");
// div.innerHTML = "<p>Hello From Paragraph</p>";
// //div.textContent = "Hello From Paragraph</p>";
// console.log(div.textContent);

// console.log(div.innerHTML);

//add/remove/toggle class
let head = document.querySelector("h1");
console.log(head);
head.classList.add("color");
head.classList.add("border");
head.classList.toggle("background")

//Styling
let p = document.querySelector("p");
p.style.color="red";
p.style.backgroundColor="green";

//Creating Element
let ul = document.createElement("ul");
let lii = document.createElement("li");
let li2 = document.createElement("li")
li2.textContent= "Item 2";
lii.textContent= "Item 1";
ul.appendChild(lii);
ul.appendChild(li2);
document.body.appendChild(ul);

let arr = ["Apple", "Banana", "Cherry"];
arr.forEach((element) => {
    let lo = document.createElement("li");
    lo.textContent = element;
    ul.appendChild(lo);

})