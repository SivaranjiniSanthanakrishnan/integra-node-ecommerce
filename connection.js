const mongoose = require("mongoose")
exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://sivaranjini:CJxIeMBpzFGp4Phl@cluster0.sdfhf.mongodb.net/integra?retryWrites=true&w=majority');
        console.log("MongoDB Connected")
    } catch(err) {
        console.log(err);
    }
}
