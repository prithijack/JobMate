import React, { useEffect, useState } from 'react'
import JobCard from '../JobCard/JobCard'
import { allJobs } from '../../https';

const Home = () => {
  const [job, setJob] = useState([]);
  useEffect(() => {
    async function fetchJobs(){
      const {data}=await allJobs();
     console.log(data)
      setJob(data.allJob)
    }
   fetchJobs()
  }, []);
  return (
    <div>
    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
      { job &&
        job.map((job)=>(
          <JobCard companyName={job.companyName} id={job._id} title={job.jobTitle} time={job.duration} location={job.jobLocation} desc={job.jobDesc}/>
        ))
      }

  </div>
    </div>
  )
}

export default Home
