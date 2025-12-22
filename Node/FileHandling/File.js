const fs = require('fs');

// fs.writeFileSync('./text.txt','Hello,My name Dhruv!'); used to create file... and write in file..
//there is two diffrent method sync,async... 
//Async fuctions accepts callback to handle err/result.. 

const result = fs.readFileSync('./text.txt','utf-8'); //fs.readFileSync() return result..
console.log(result);

//readFile() -> doesnt return result directly instead we use callback funtion in which we handle error/result..

// Non blocking opration..
fs.readFile('./text.txt','utf-8',(err,result) => { //Async function waited for next line to execute first..
    if(err) console.log("Error Reading file!");
    else console.log(result);
});

//appendFileSync() -> append string at the end off file..
fs.appendFileSync('./text.txt',`${Date.now()} Here You are!\n`);

fs.copyFileSync('./text.txt','./copy.txt');// -> create new file and copy data into new one..

console.log(fs.statSync('./copy.txt'));

//fs.mkdirSync()  create directory...
