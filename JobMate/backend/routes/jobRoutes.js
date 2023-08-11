const express=require('express');
const { jobApplication, postJob, viewJobApplication, viewAllJob, myApplication, getSpeicificJob } = require('../controllers/jobController');
const isAuth=require('../middlewares/isAuth')
const isCompany=require('../middlewares/isCompany')
const multer=require('multer')
const router=express.Router();
//upload image
const upload = multer({ dest: 'uploads/' });



//Routes
//middlewares will be applied there
router.route('/jobapplication/:jobId/:companyId').post(isAuth,upload.single('file'),jobApplication);
router.route('/postJob').post( isAuth,isCompany,postJob);
router.route('/viewJobApplication').get(isAuth,isCompany,viewJobApplication)
router.route('/viewJob').get(viewAllJob)
router.route('/myApplication').get(isAuth,myApplication)
router.route('/specificJob/:specificJobId').get(getSpeicificJob)
module.exports=router