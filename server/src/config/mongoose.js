const mongoose = require("mongoose")
const {MONGO_URI}= require('./var')

exports.dbconnect = ()=>{
    try{
        mongoose.connect(MONGO_URI)
        .then(
            console.log("Database connected ......")
        )
    }catch(err){
        console.log(err)
        process.exit(-1)
    }
    
}