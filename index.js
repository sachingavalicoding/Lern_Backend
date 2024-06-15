const http = require("http");


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
});