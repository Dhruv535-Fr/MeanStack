// const http = require("http"); -> no need of this as express also handle this...

//Express libraby provides fetures to handle http req,res easily + their is build in feture for query,access,managing path automatically
const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("This is HomePage!");
});

app.get('/about',(req,res) =>{
    res.send(`Hello this is ${req.query.user}`);
});

app.listen(8000,() => console.log("Server Started!"))
//no need of this as express also handle this...
// const MyServer = http.createServer(app); 
// MyServer.listen(8000,() => console.log("Server Started!"));