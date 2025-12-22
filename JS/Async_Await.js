function API(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("Getting weather Data");
            resolve("200");
        },2000);
    });
}

async function GetWeatherData() {
    await API(); //1st call pause next executions...
    await API(); //2st call pause next executions...
}

GetWeatherData();