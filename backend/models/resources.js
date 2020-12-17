const mongoose = require('mongoose');

const resourcesSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    drive_link:{
        type: String,
        required: false
    },
    youtube_link:{
        type: String,
        required: false
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Resources', resourcesSchema);