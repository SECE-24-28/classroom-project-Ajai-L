// //fs:FileSystem
// const { log } = require("console");
const fs = require("fs");
const http = require("http");

// //blocking code
// //Synchronous Code
// //2 parameters: path, encryption
// let read=fs.readFileSync("./Files/append.txt", "utf-8");
// console.log(read);

// //write a file
// //parameters: path, Content, encryption
// fs.writeFileSync("./Files/a.txt", "This file doesn't exist but im gonna write in it", "utf-8");

// //non-blocking Code
// //Asynchronous Code
// //Read data

// //path, encryption, callback function(err, data)
// fs.readFile("./Files/read.txt", "utf-8",(err, data) => {
//     if (err) return console.log("Error");
    
//     console.log(data);
    
// })


// fs.writeFile("./Files/a.txt", "Hello from Node", "utf-8", (err) => {
//   if (err) {
//     console.error("Write failed:", err);
//     return;
//   }

//   fs.readFile("./Files/a.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.error("Read failed:", err);
//       return;
//     }

//     console.log(data);
//   });
// });

//Http Status code
//1XX-199 : Information code
//2XX : success code
//3XX : Re-directional
//4XX : Client Error
//5XX : Server Error

let htmlData = fs.readFileSync("./Files/index.html", "utf-8");
console.log(htmlData);

//1. we have to create a server
const server=http.createServer((req, res) => {
    console.log(req.url);
    res.end(htmlData)
    //res.end("Server Created using Node.")
});

//2. We have to start the server
//port no, ip address, callback func
server.listen(1316, "127.0.0.1", ()=>{
    console.log("Server started on port no. 1316");
});