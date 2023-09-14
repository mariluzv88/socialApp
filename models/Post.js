const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userID:{type:String, required: true},
    description: {
        type: String,
        maxLength: 280,
        required: true
      },
      
      likes:{type:Array, default:[]},
},{timestamps: true})
module.exports = mongoose.model('Post', postSchema);