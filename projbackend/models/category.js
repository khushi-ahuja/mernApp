var mongoose = require('mongoose');

const catgeorySchema = new mongoose.Schema({
    name: { 
        type:String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    }
}, {timestamps: true});

modules.exports = mongoose.model("Category", catgeorySchema)