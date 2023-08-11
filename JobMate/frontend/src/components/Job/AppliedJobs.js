import React, { useEffect, useState } from 'react'
import { myApplicationDetails } from '../../https'
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const [myApplications, setMyApplications] = useState([]);
    useEffect(()=>{
      async function  fetchMyApplication(){
        const {data}=await myApplicationDetails()
            console.log(data)
            setMyApplications(data.yourApplication)
        }
        fetchMyApplication()
    },[])
  return (
    <div>
   {
    myApplications && myApplications.map((application)=>(
        <div>
           
            <div class="min-h-screen  flex items-center justify-center px-4">
                
                <div class="max-w-4xl w-full bg-gray-400  rounded-lg shadow-xl">
                    <div class="p-4 border-b">
                        <h2 class="text-2xl ">
                            Your Application Details
                        </h2>
                      
                    </div>
                    <div>
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                            <p class="text-gray-700">
                              Phone Number
                            </p>
                            <p>
                               {application.phone}
                            </p>
                        </div>
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                            <p class="text-gray-700">
                             Email Id
                            </p>
                            <p>
                               {application.email}
                            </p>
                        </div>
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                            <p class="text-gray-700">
                            Full  Name
                            </p>
                            <p>
                               {application.firstName} {application.lastName}
                            </p>
                        </div>
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                            <p class="text-gray-700">
                               LinkedIn Url
                            </p>
                            <a href={application.linkedinProfileUrl}>
                            Click Here
                            </a>
                        </div>
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                            <p class="text-gray-700">
                               Portfolio Url
                            </p>
                            <a href={application.portfolioUrl}>
                            Click here
                            </a>
                        </div>
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                            <p class="text-gray-700">
                                Github Url
                            </p>
                            <a href={application.githubProfileUrl}>
                              Click Here
                            </a>
                        </div>
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                            <p class="text-gray-700">
                            Address
                            </p>
                            <p>
                              {application.address}
                            </p>
                        </div>
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                            <p class="text-gray-700">
                           Status
                            </p>
                            <p>
                             {application.isAccept}
                            </p>
                        </div>
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                            <p class="text-gray-700">
                                Institute
                            </p>
                            <p>
                                {application.institute}
                            </p>
                        </div>
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                            <p class="text-gray-700">
                           Country
                            </p>
                            <p>
                             {application.country}
                            </p>
                        </div>
                      
                        <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4">
                <p class="text-gray-600">
                    Attachments
                </p>
                <div class="space-y-2">
                    <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                        <div class="space-x-2 truncate">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current inline " width="24" height="24" viewBox="0 0 24 24"><path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z"/></svg>
                            <span>
                                resume_for_manager.pdf
                            </span>
                        </div>
                        <a href={application.resume} class="text-purple-700 hover:underline">
                            Download
                        </a>
                    </div>

            
                </div>
                    </div>
                    <div className='flex justify-center my-4 '>
                    </div>
                </div>
            
            
            
            
            </div>
               
            </div>
                </div>
          
    ))
   }
    </div>
  )
}

export default AppliedJobs
