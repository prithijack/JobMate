const mongoose=require('mongoose');

const postJobSchema=mongoose.Schema({
    
    companyId:{
        type: mongoose.Schema.ObjectId,
        required:true
    },
    jobLocation:{
        type:String,
        required:true
    },
    stipend:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    jobRole:{
        type:String,
        required:true
    },
    aboutCompany:{
        type:String,
        required:true
    },
   jobDesc:{
    type:String,
    required:true
   }

})

const postJob=mongoose.model('Job',postJobSchema);
module.exports=postJob