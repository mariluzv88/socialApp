const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const  checkToken  = require('../config/checkToken')

router.put('/:id',checkToken, userCtrl.update)
router.put('/follow/:id',checkToken, userCtrl.follow)
router.put('/unfollow/:id',checkToken, userCtrl.unfollow)
router.get('/find/:id',userCtrl.getUser)
router.delete('/find/:id',userCtrl.deleteUser)
module.exports = router;