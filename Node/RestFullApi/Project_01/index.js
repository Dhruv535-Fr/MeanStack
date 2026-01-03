const express = require("express");
const users = require('./MOCK_DATA.json');
const fs = require("fs");

const app = express();
const PORT = 8000;


//middleware - to identify post request data and convert it into js object...
app.use(express.urlencoded({extended : false}));

/* Create your own MIDDLEWARE...it contains (req,res,next) we can modify req/res add new property
next -> will call next middleware in stack*/

app.use((req,res,next) => {
    console.log("This is Middleware 1!");
    req.newProperty = "Adding new Property"; //add new propery
    next(); // trasfer control to next middleware in stack
});

app.use((req,res,next) => {
    
    fs.appendFile('log.txt',`${Date.now()}: ${req.method} Path: ${req.path}\n`,(err,data) =>{
        next();
    });
    // return res.json({ "Message" : req.newProperty }); // we can also end res if condition not mate
});


//(SSR)--> sending HTML 

app.get("/users",(req,res)=>{
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    return res.send(html);
});

//RestAPI -> Sending json format..

app.get("/api/users",(req,res)=>{ //grtting data of all user..
    return res.status(200).json(users); 
});

// app.get("/api/users/:id",(req,res)=>{ //id dynamic variable..
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });

//Writting same route multiple.. instead of that we can mearge all togather...

app.route("/api/users/:id")

.get((req,res)=>{ //id dynamic variable..
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) res.status(404).json({"err" : "User Not Found"}); 
    return res.status(200).json(user);
})
.patch((req,res)=>{ 
    const body = req.body;
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if(userIndex === -1) {
        return res.json({ "Status": "Error", "message": "User not found" });
    }

    users[userIndex] = { ...users[userIndex], ...body };

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ "Status": "Success", "user": users[userIndex] });
    });
})
.delete((req,res)=>{
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    
    if(userIndex === -1) {
        return res.status(404).json({ "Status": "Error", "message": "User not found" });
    }
    
    // Remove user from array
    users.splice(userIndex, 1);
    
    // Save to file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ "Status": "Success", "message": "User deleted" });
    });

});

app.post("/api/users",(req,res)=>{ 
    const body = req.body;
    console.log(body);
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({ "Bad Request" : "Required all field"});
    }
    users.push({...body,id : users.length + 1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data) =>{
        return res.status(201).json({ "Status" : "Success" , id : users.length})
    });
});


app.listen(PORT,() => console.log(`Server has Started at Port : ${PORT}!`));
