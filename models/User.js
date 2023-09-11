const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String, required: true, unique: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
      },
      password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
      },
      profilePic: {type:String},
      followers:{type:Array, default:[]},
      following:{type:Array, default:[]},
      description:{type: String}
    
},{timestamps: true})
module.exports = mongoose.model('User', userSchema);