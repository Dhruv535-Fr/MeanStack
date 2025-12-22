const http = require("http"); 
const fs = require("fs");

const myServer = http.createServer((req,res) =>{
    const log = `${Date.now()}: Path : ${req.url} New Request recived!\n`; //req.url for path
    fs.appendFile('./logs.txt',log,(err,data)=>{
        // res.end("Hello this is from server!"); // end request...

        switch(req.url){ //route mapping.. example..
            case '/' :res.end("HomePage");
            break;
            case '/about' : res.end("My Self Dhruv!");
            break;
            case '/contact-us' : res.end("No : +9164264627 Mail : parmardhruv@gmail.com");
            break;

            default:
            res.end("Invalid Access Path!");
            break
        };
    });
});

myServer.listen(8000,() => console.log("Server Started!"));