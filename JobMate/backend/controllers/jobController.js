
const JobApplicationModel=require('../models/jobapplication');
const PostJobModel = require('../models/postJob');
const ErrorHandler = require('../utils/errorhandler');
const cloudinary=require('cloudinary')

exports.jobApplication=async(req,res,next)=>{
    const  jobId=req.params.jobId;
    const companyId=req.params.companyId; 
    const applicantId=req.user._id;

    const myCloud = await cloudinary.v2.uploader.upload(req.body.file, {
        folder: "avatars",
        width: 150,
        crop: "scale",
      });
  

    const{email,phoneNumber,firstName,lastName,institute,address,city,country,district,confirmEmail,confirmPhoneNumber,linkedInUrl,githubUrl,portfolioUrl}=req.body;

 
        try{

            const newApplication=new JobApplicationModel({
                applicantId,resume:myCloud.url,
                jobId,companyId,email,phone:phoneNumber,firstName,lastName,institute,address,city,country,district
                ,confirmEmail,confirmPhone:confirmPhoneNumber,linkedinProfileUrl:linkedInUrl,githubProfileUrl:githubUrl,portfolioUrl
            })
            await newApplication.save();
            res.status(200).json({
                success:true,
                message:"Your application has been submitted wait for the response",
                jobapplication:newApplication
            })
        }catch(err){
            next(new ErrorHandler(err.message,404))
        }
    
  
}

exports.postJob=async(req,res,next)=>{
    const companyId=req.user._id;
    const {jobLocation , stipend ,startDate,duration,companyName,jobTitle,jobRole,aboutCompany,jobDesc}=req.body;
   if(!jobLocation || !stipend || !duration || !startDate || !companyName || !jobTitle || !jobRole ||!aboutCompany || !jobDesc){
    next(new ErrorHandler("Please fill all the required fields",400))
   }
   else{
    const jobOpening=new PostJobModel({
        companyId,jobDesc,jobLocation,duration,startDate,companyName,jobTitle,aboutCompany,jobRole,stipend
    });
    await jobOpening.save();
    res.status(200).json({
        success:true,
        message:"Job Posted Successfully",
        job:jobOpening
    })
   }
}


//view all the job application - only company can view this
exports.viewJobApplication=async(req,res,next)=>{
   try{
     
    const allJobApplication=await JobApplicationModel.find({companyId:req.user._id});
    res.status(200).json({
        message:"fetched successfuly",
        success:true,
        allJobApplication
    })
   }catch(err){
    console.log(err.message)
   }

}

//view all jobs posted by company
exports.viewAllJob=async(req,res,next)=>{
  
    try{
        const allJob=await PostJobModel.find();
        res.status(200).json({
            success:true,
            message:"fetched succesfully",
            allJob
        })
    }catch(err){
        console.log(err);
    }
}

//my application - user (User can view their own applications status here)
exports.myApplication=async(req,res,next)=>{
    const applicantId=req.user._id;
    try{
        const yourApplication=await JobApplicationModel.find({applicantId});
        res.status(200).json({
            message:'fetched succesfully',
            success:true,
            yourApplication
        })
    }catch(err){
        console.log(err.message)
    }
}

exports.getSpeicificJob=async(req,res,next)=>{
    const specificJobId=req.params.specificJobId
 
    try{
        const specificJob=await PostJobModel.findOne({_id:specificJobId});
     
        res.status(200).json({
            message:'fetched succesfully',
            success:true,
            specificJob
        })
    }catch(err){
        console.log(err.message)
    }
}