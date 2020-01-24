const express = require('express')




const  UsersController =require('../controllers/UsersController')
var isAuthenticated = require('../middleware/isAuthenticated');
const router = express.Router();






router.get('/SignIn',isAuthenticated,UsersController.SignInGet)

router.post('/SignIn',isAuthenticated,UsersController.SignInPost)


router.get('/SignUp',isAuthenticated,UsersController.SignUpGet)


router.post('/SignUP',isAuthenticated,UsersController.SignUpPost)


module.exports =router;