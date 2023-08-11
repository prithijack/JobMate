import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import {useNavigate}from 'react-router-dom'

const JobCard = ({id,image,title,time,location,desc,companyName}) => {
    const navigate=useNavigate()
async function setOnClick(){
    navigate(`/specificJob/${id}`)
}
  return (

      
       
            <div key={id}  className='group group/item  singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-400 shadow-lg shadow-gray-700 hover:shadow-lg'> 
            <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-black group-hover:text-white'>{title}</h1>
            
                <span className='flex items-center text-[#ccc] gap-1'>
                {time}      
                </span>
            </span>
        <h6 className='text-[#ccc]'>{location}</h6>
        <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
           {String(desc).slice(0,100)}....
        </p>
        <div className='company flex items-center gap-2'>
        <img src={image} alt='logo' className='w-[10%] '/>
        <span className='text-[14px] py-[1rem] block mx-auto group-hover:text-white'>{companyName}</span>
        </div>
        <button className='border-[2px] rounded-[10px]  block p-[10px] w-full text-[14px] font-semibold text-black hover:bg-white group-hover/item:text-black group-hover:text-black' onClick={setOnClick}>Apply Now</button>
            </div>
     
 

  )
}

export default JobCard
