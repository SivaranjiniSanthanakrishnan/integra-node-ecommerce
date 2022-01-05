const mongoose = require("mongoose")
exports.connect = () => {
    try{
        mongoose.connect('mongodb://localhost:27017/integra');
        console.log("MongoDB Connected")
    } catch(err) {
        console.log(err);
    }
}