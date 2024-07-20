const mongoose = require("mongoose");

const questionpaperSchema = new mongoose.Schema({
    subject_name: {
        type: String,
        require: true,
    }, 
    subject_code: {
        type: String,
        require: true,
    },   
    branch: {
        type: String,
        require: true,
    }, 
    year: {
        type: String,
        require: true,
    },
    semester: {
        type: String,
        require: true,
    },
    pdf: {
        type: Buffer,
        require: true,
    },
    text: {
        type: String
    }
},
{ timestamps: true }
);

const Questionpaper = mongoose.model("Question Paper", questionpaperSchema);
module.exports = Questionpaper;


