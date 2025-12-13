//fs:FileSystem
const { log } = require("console");
const fs=require("fs");

//blocking code
//Synchronous Code
//2 parameters: path, encryption
let read=fs.readFileSync("./Files/append.txt", "utf-8");
console.log(read);

//write a file
//parameters: path, Content, encryption
fs.writeFileSync("./Files/a.txt", "This file doesn't exist but im gonna write in it", "utf-8");

//non-blocking Code
//Asynchronous Code
//Read data

//path, encryption, callback function(err, data)
fs.readFile("./Files/read.txt", "utf-8",(err, data) => {
    if (err) return console.log("Error");
    
    console.log(data);
    
})
