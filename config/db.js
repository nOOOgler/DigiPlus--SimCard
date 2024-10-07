const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://angchekaromkarcmpn:SuG4L5QordCSbGPO@cluster0.62jgr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )
        console.log("Database is Connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectDB;


