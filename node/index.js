/* const http = require("http");


const server = http.createServer((req , res) => {
    if(req.url === "/" && req.method === "GET"){
        res.end("Hello World JI Welcome to my youtube channal  ");
    }
    if(req.url ==="/about" && req.method === "GET"){
        res.end(" THis is about page baby girl");
    }
})

server.listen(4000 , () => {
    console.log("Server listen on 4000 port ");
}); */

// file system in node js 

 const fs = require("fs");
/*

// write file method 
// async file :-> excute when it will load  another functions are excute 
fs.writeFile("./data.txt" , " hello Check it " , "utf-8" , () => {
console.log("File is created");
} );


// sync file 
fs.writeFileSync("./dataSync.txt" , " This is Synchronous File data " , "utf-8") */


// apppend file method
// async file 
/* fs.appendFile("./data.txt" , " New Data add into file " , "utf-8" , () => {
    console.log(" Data add into file");
}) */


//rename file 

/* fs.rename("./data.txt" ,"newFile.txt" , () =>{
    console.log("File Name is Updated ");
}) */


// read  file     
/* 
const data = fs.readFileSync("./newFile.txt" , "utf-8");

console.log(data); */