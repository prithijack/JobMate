const express=require('express');
const { workingfine, googleProfile, userGoogleLogin, loginfarmerLocal, registerfarmerLocal, loginUser, registerUser, loginSuccess, logoutUser } = require('../controllers/authController');
const router=express.Router();
const isAuth=require('../middlewares/isAuth')

router.route('/get').get(workingfine)


//Google Login  
router.route('/google').get(googleProfile)
router.route('/google/callback').get(userGoogleLogin);
router.route('/logout').post(logoutUser);
//local login and register
router.route('/local-login').post(loginUser);
router.route('/local-register').post(registerUser)

router.route('/login-success').get(isAuth,loginSuccess)

module.exports=router