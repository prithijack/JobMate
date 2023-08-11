const ErrorHandler = require("../utils/errorhandler");

async function isCompany(req,res,next){
 if(req.user){
   
    if(req.user.role==='company'){
        next()
    }
   else{
      next(new ErrorHandler("You are not allowed to access the resources",404))
   }
 }
 else{
  
   
    next(new ErrorHandler("You are not allowed to access the resources",404))
   
 }
}

module.exports=isCompany