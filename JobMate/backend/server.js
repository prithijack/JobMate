
const express=require('express');

const passport=require('passport')
const app=express();
const multer=require('multer')
const errorMiddleware=require('./middlewares/error');
const cookieSession=require('cookie-session');
const cookieParser=require('cookie-parser') 
const cors=require('cors')
require('./passport'); 
const cloudinary=require('cloudinary')
const dBconfig=require('./config/dataBase')
//dotenv configuration
require('dotenv').config({path:'config/config.env'});
const PORT=process.env.PORT||4000

 
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,
})



//DB config
dBconfig();
var storage=multer.diskStorage({
  destination: function(req,file,cb) {
      cb(null,'./uploads')//we need to create the directory
  },
  filename:function(req,file,cb){
      console.log(file+"file");
      cb(null,file.originalname)
  }
})

var upload = multer({
  storage:storage
}).single('file')
  //Json setup for backend
  app.use(express.json({limit:'8mb'}))

  app.use(cookieParser());


//cookie session for passport
app.use(
    cookieSession({
      name: 'session',
      keys: ['profile', 'email'],
      maxAge: 24 * 60 * 60 * 100,
      secret:'fdsfsdfsdfd',
      sameSite:'none',
    
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
   



  const corsOption={
    origin:['http://localhost:3000'],
 credentials: true, 

 
}
app.use(cors(corsOption))

    


 

app.get('/',(req,res,next)=>{

    res.status(200).json({message:'fduih'})
})





const authRoutes=require('./routes/authRoutes')
const jobRoutes=require('./routes/jobRoutes');
app.use('/api/v1',authRoutes)
app.use('/api/v1',jobRoutes);



app.listen(PORT,(err)=>{
    console.log(`Server is running on the port ${PORT}`);
})
app.use(errorMiddleware) 
