const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const  handleError  = require('../error')
const Post = require('../models/Post')
const User = require('../models/User')


const createPost = async(req, res,next)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
    res.status(200).json(savedPost)
    }catch(err){ res.status(400).json(err)}
}
const userPosts = async(req, res,next)=>{
    try{
        const userPostz = await Post.find({userID: req.params.id}).sort({ createAt: -1})
        
    res.status(200).json(userPostz)
    }catch(err){ res.status(400).json(err)}
}
const explore = async(req, res,next)=>{
    try{
        const explorePost = await Post.find({likes:{$exists: true }}).sort({ likes: -1})
        
    res.status(200).json(explorePost)
    }catch(err){ res.status(400).json(err)}
}
const feed = async(req, res,next)=>{
  
    try{
        const currentUser = await User.findById(req.params.id)
        const mainPost = await Post.find({userID: currentUser._id})
        const followedPosts = await Promise.all(currentUser.following.map((followerID)=>{
            return Post.find({userID: followerID})
        }))
    res.status(200).json(mainPost.concat(...followedPosts))
    }catch(err){ res.status(400).json(err)}
}
const deletePost = async(req, res,next)=>{
   
    try{
        const post = await Post.findById(req.params.id)
        if(post.userID === req.body.id){
            await post.deleteOne()
            res.status(200).json("Post has been deleted")
        }else{
            handleError(500,err)
        }
    }catch(err){ res.status(400).json(err)}
}
const LikeorDisLike = async(req, res,next)=>{
   
    try{
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.id)){
            await post.updateOne({$push: {likes: req.body.id}})
            res.status(200).json("Post has been Liked")
        }else{
            await post.updateOne({$pull: {likes: req.body.id}})
            res.status(200).json("Post has been Disliked")
        }
    }catch(err){ res.status(400).json(err)}
}



module.exports = {createPost, deletePost,LikeorDisLike,feed,userPosts,explore}