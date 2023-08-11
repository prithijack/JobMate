
 # Start JobMate WebApp

Down Load the project from the github from the given link(`https://github.com/Souvik-Halder/JobMate`)

 Available Scripts

In the project directory, you can run:

### `cd backend`

 After Going to the Backend folder, you can run :

### `npm i` (To download all the dependencies)

 After downloading the dependency , add the config.env file in the config folder of backend which contains the environment variables for your app (refer the given example):

After setting up the environment variables now you need to setup google key credentials to setup google ( refer the below link for setup )  :

 `https://console.cloud.google.com/apis/credentials`

Create an account on cloudinary (which is used to upload the document files) , put the required fields of cloudinary in the config.env file:

 Refer this link to setting up an account in Cloudinary ( `https://console.cloudinary.com/users/login` )

 Now you are all setup to run the backend of the app

 Run the scripts in the terminal `npm start` Or `npm run dev`
 
 Now run your frontend React App
 
 Run the below scripts
 
    `cd froned`
    
    `npm i`
    
    `npm start`

Put your backend and frontend URL on the file backendUrl.js in the src folder inside the frontend
    
Now your React App is running on the port of 3000


# Features of JobMate WebApp

 Features for Job Seekers - (JobMate is a platform where Job seekers can find their job and apply to them by signing up ) the features of that app for jobseekers are
  Both Local and Google authentication for the Jobseekers
 
  Submit their details and the resume to the Company which posted the Job
 
  Can view and update their Job Application and also they can check their Job approval status
 
 Features for Company - (JobMate is a platform where any Company can find their employee ) the features of that app for company are

   Both Local and Google Authentication for the Company
  
   Company can post a Job 
  
   Company can track the applications on a specific Job and can also approve or decline the application as per their need


# Backend features in which I have worked :

   Local and Google Authentication for the Both JobSeeker and Company
  
   Job post feature for the company
  
   Job application form fill up by the Jobseeker
  
   Both Job Seeker and Company can track their job application and posted Job respectively
  
# Future Work on Backend:

   Job Searching feature by the Job Seeker
  
   Image upload feature while Registration of user
  
   Approve and decline feature for the Company to accept the Job application
  
# Frontend features in which I have worked :

    Local and Google Authentication for the Both JobSeeker and Company
   
    Job application form fill up by the Jobseeker
   
    Job Seeker can view their application

# Future Work on Frontend:

   Tracking feature of the company for any Job application
  
   Approval of any specific Job application
  
   Need to connect the Search component with the backend after putting search feature on that 

# Technical Stack

   MongoDB
   Node Js
   Express Js
   React Js
   Cloudinary (To add the files )
   Google O auth (for Google Authentication)
   
 # Images Related to the project
  
   Job Info Card
   ![Screenshot (27)](https://user-images.githubusercontent.com/83994461/236624982-9a7c46ca-833d-483b-acac-dd99f4c801dd.png)
   
   Submit Application Form
   ![Screenshot (29)](https://user-images.githubusercontent.com/83994461/236625052-79f1c333-744c-42d6-9277-bfc4cb7d4e22.png)
   
   Sign In form 
   ![Screenshot (30)](https://user-images.githubusercontent.com/83994461/236625111-da2b66bc-4eca-48e6-b0e2-6ca0991751dc.png)

   Sign Up Form 
   ![Screenshot (31)](https://user-images.githubusercontent.com/83994461/236625159-d5d62357-ee8b-4d8b-9015-dce45f91cba5.png)




# JobMate
