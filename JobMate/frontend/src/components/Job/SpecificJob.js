import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import { specificJobDetails } from '../../https'
import { useSelector } from 'react-redux'

const SpecificJob = () => {
    const {specificJobId}=useParams()
    const {isAuth} =useSelector(state=>state.auth)
    const navigate=useNavigate()
    const [specificJob, setSpecificJob] = useState({});
    async function setOnClick(){
      navigate(`/submitApplication/${specificJobId}/${specificJob.companyId}`)
    }
    useEffect(()=>{
    async function  fetchSpecificJobDetails(){
      const {data}=await specificJobDetails(specificJobId)
      setSpecificJob(data.specificJob);
    }
    fetchSpecificJobDetails();
    },[specificJobId])
  return (
    <div>
  {
    specificJob &&   <div>
   
    <div class="min-h-screen  flex items-center justify-center px-4">
        
        <div class="max-w-4xl w-full bg-gray-400  rounded-lg shadow-xl">
            <div class="p-4 border-b">
                <h2 class="text-2xl ">
                    Job Information
                </h2>
                <p class="text-sm text-gray-500">
                   Job And Company Details
                </p>
            </div>
            <div>
                <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-700">
                       Company Name
                    </p>
                    <p>
                       {specificJob.companyName}
                    </p>
                </div>
                <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-700">
                       Job Title
                    </p>
                    <p>
                       {specificJob.jobTitle}
                    </p>
                </div>
                <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-700">
                        About Company
                    </p>
                    <p>
                     {specificJob.aboutCompany}
                    </p>
                </div>
                <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-700">
                        Salary
                    </p>
                    <p>
                      {specificJob.stipend}
                    </p>
                </div>
                <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-700">
                    Duration
                    </p>
                    <p>
                      {specificJob.duration}
                    </p>
                </div>
                <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-700">
                   Job Role
                    </p>
                    <p>
                     {specificJob.jobRole}
                    </p>
                </div>
                <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-700">
                        Job Description
                    </p>
                    <p>
                        {specificJob.jobDesc}
                    </p>
                </div>
                <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-700">
                   Job Location
                    </p>
                    <p>
                     {specificJob.jobLocation}
                    </p>
                </div>
              
                <div class="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-700">
                    Start Date
                    </p>
                    <p>
                        {specificJob.startDate}
                    </p>
                </div>
            </div>
            <div className='flex justify-center my-4 '>
                { isAuth ?
                  (   <button onClick={setOnClick} className='bg-blue-500 rounded border-black border-[1.5px] text-white transition ease-in-out py-[12px] px-[18px] hover:bg-white hover:text-black'>Apply Now</button>):(  <Link to='/login' className='bg-blue-500 rounded border-black border-[1.5px] text-white transition ease-in-out py-[12px] px-[18px] hover:bg-white hover:text-black'>Login to Continue</Link>)
                }
           
            </div>
        </div>
    
    
    
    
    
       
    </div>
        </div>
  }
  </div>
  )
}

export default SpecificJob
