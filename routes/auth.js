const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/auth')

router.post('/signup',userCtrl.signUp)

router.post('/signin',userCtrl.signIn)
module.exports = router;