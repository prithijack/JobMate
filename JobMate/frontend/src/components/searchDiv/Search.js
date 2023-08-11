import React,{useState} from 'react'
import {AiOutlineCloseCircle, AiOutlineSearch} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('');

  return (
    <div className='searchDiv grid gap-10 bg-gray-300 rounded-[10px] p-[3rem]'>    
      <div >
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-gray-700'>
            <div className='flex gap-2 items-center'>
                <AiOutlineSearch className='text-[25px] icon'/>
            <input type='text' value={keyword} onChange={(e)=>setKeyword(e.target.value)} className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here......' />
            <AiOutlineCloseCircle onClick={()=>setKeyword('')} className='text-[30px] text-[#a5a6a6] hover:text-black icon'/>
            </div>
            <div className='flex gap-2 items-center'>
                <CiLocationOn className='text-[25px] icon'/>
            <input type='text' value={location} onChange={(e)=>setLocation(e.target.value)} className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Location......' />
            <AiOutlineCloseCircle onClick={()=>setLocation('')} className='text-[30px] text-[#a5a6a6] hover:text-black icon'/>
            </div>
            <div className='flex gap-2 items-center'>
                <BsHouseDoor className='text-[25px] icon'/>
            <input type='text' value={company} onChange={(e)=>setCompany(e.target.value)} className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search  by Company......' />
            <AiOutlineCloseCircle onClick={()=>setCompany('')} className='text-[30px] text-[#a5a6a6] hover:text-black icon'/>
           
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search
