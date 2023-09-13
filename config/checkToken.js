const jwt = require('jsonwebtoken')
const handleError =  require('../error')
//  const checkToken = (req,res,next)=>{
//   const token = req.cookies.access_token
//   if(!token) return next(handleError(401,'Not Authorrized'))
//   jwt.verify(token , process.env.SECRET , (err,user)=>{
// if(err)return next(createError(403,'Invalid Token'))
// req.user = user
// next()})
// }
module.exports =   checkToken = (req,res,next)=>{
  const token = req.cookies.access_token
  if(!token) return next(handleError(401,'Not Authorrized'))
  jwt.verify(token , process.env.SECRET , (err,user)=>{
if(err)return next(createError(403,'Invalid Token'))
req.user = user
next()})
};