const http = require("http"); 
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res) =>{
    if(req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: Path : ${req.url} New Request recived!\n`; //req.url for path

    const MyUrl = url.parse(req.url,true);
    console.log(MyUrl);

    fs.appendFile('./logs.txt',log,(err,data)=>{
        // res.end("Hello this is from server!"); // end request...

        switch(MyUrl.pathname){ //route mapping.. example..
            case '/' :
                res.end("HomePage");
            break;
            case '/about' : 
                const username = MyUrl.query.user;
                res.end(`Hello,${username}`);
            break;
            case '/contact-us' : 
                res.end("No : +9164264627 Mail : parmardhruv@gmail.com");
            break;
            case '/search':
                const search = MyUrl.query.search_query;
                res.end(`Here What you were searching : ${search}`);
                break;
            default:
            res.end("Invalid Access Path!");
            break
        };
    });
});

myServer.listen(8000,() => console.log("Server Started!"));