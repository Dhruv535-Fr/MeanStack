const mongoose = require('mongoose');

async function ConnectDB(url){
    try{
        await mongoose.connect(url).then(() => {
            console.log('MongoDb is connected Succesfully')
        })
    }catch(err){
        console.log("Error",err.message);
    }
}

module.exports = {ConnectDB};
