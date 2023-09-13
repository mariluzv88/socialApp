const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const  handleError  = require('../error')


const getUser = async (req,res)=>{
    try{
     const user = await User.findById(req.params.id)
     res.status(200).json(user)
    }catch(err){
     
    }
}
const update = async (req,res)=>{
    if(req.params.id === req.user.id){
    try{
     const udatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
     res.status(200).json(udatedUser)
    }catch(err){
     next(err)
    }
    }else{
        return getNodeText(handleError(403,"Invalid Account")) 
    }
}
const deleteUser = async (req,res)=>{
    if(req.params.id === req.user.id){
    try{
    await User.findByIdAndDelete(req.params.id)
     res.status(200).json("delete works")
    }catch(err){
     next(err)
    }
    }else{
        return getNodeText(handleError(403,"Invalid Account")) 
    }
}
const follow = async (req,res,next)=>{
    try{
        const user = await User.findById(req.params.id)
        const currentUser = await User.findById(req.body.id)
      if(!user.followers.includes(req.body.id)){
        await user.updateOne({$push: {followers:req.body.id}})
        await currentUser.updateOne({$push: {following:req.params.id}})
      } else{
        res.status(403).json("you already follow this user")
      }
     res.status(200).json("You've followed the user")
    }catch(err){
     next(err)
    }
    
}
const unfollow = async (req,res,next)=>{
    try{
        const user = await User.findById(req.params.id)
        const currentUser = await User.findById(req.body.id)
      if(currentUser.following.includes(req.params.id)){
        await user.updateOne({$pull: {followers:req.body.id}})
        await currentUser.updateOne({$pull: {following:req.params.id}})
      } else{
        res.status(403).json("you are not following this user")
      }
     res.status(200).json("You've unfollowed the user")
    }catch(err){
     next(err)
    }
    
}

module.exports = {getUser, update,deleteUser,follow,unfollow}


