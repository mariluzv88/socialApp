const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const  handleError  = require('../error')
const express = require('express');
const router = express.Router();


 const signUp = async(req, res)=>{
    try{
     const salt = bcrypt.genSaltSync(10)
     const hash = bcrypt.hashSync(req.body.password, salt)
     const newUser = new User({...req.body, password: hash})
     await newUser.save()
     const token = jwt.sign({id: newUser._id},process.env.SECRET )
     const {password, ...otherData} = newUser._doc
     res.cookie("access_token", token,{
        httpOnly: true,
     }).status(200).json(otherData)
    }catch(err){ res.status(400).json(err)}
}
 const signIn = async(req, res, next)=>{
    try{
     const user = await User.findOne({username:req.body.username})
     if(!user) return next(handleError(404, "invalid"))
     const isCorrect = await bcrypt.compare(req.body.password, user.password)
    if(!isCorrect)return next(handleError(404, "invalid"))
    const token = jwt.sign({id: user._id}, process.env.SECRET)
    const {password, ...otherData} = user._doc
    res.cookie("access_token", token,{
        httpOnly: true,
     }).status(200).json(otherData)
    }catch(err){ res.status(404).json(handleError(404, "invalid"))}
}
module.exports = {signUp,signIn}