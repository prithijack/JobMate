const ErrorHandler = require("../utils/errorhandler")


async function isAuth(req,res,next){
  
    if(req.user){
        console.log(req.user)
        next();
        
    }
    else{
        next(new ErrorHandler("Unauthorize please login before using these resources",401))
    }
}

module.exports=isAuth