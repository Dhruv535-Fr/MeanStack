const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Node");
        console.log("MongoDB is connected!")
    }catch(err){
        console.log("MongoDB Connection Failed:",err.message);
    }
}

module.exports = connectDB