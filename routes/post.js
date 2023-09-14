const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/post')
const  checkToken  = require('../config/checkToken')

router.post('/', checkToken, postCtrl.createPost)
router.delete('/:id', checkToken, postCtrl.deletePost)
router.put('/:id/like',  postCtrl.LikeorDisLike)
router.get('/feed/:id',  postCtrl.feed)
router.get('/user/all/:id',  postCtrl.userPosts)
router.get('/explore',  postCtrl.explore)


module.exports = router;