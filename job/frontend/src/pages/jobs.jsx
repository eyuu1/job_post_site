import React from 'react'
import { jobDescription } from '../constants'
import RecentJobsCard from '../components/recentJobs/RecentJobsCard'

const jobs = () => {
  return (
    <div className='flex flex-col '>

        <div className='flex justify-center sm:px-[4rem] md:px-[8rem] flex-wrap gap-x-2 sm:mt-10 md:mt-20       '>
            <input type="text" className='flex  sm:min-w-[16rem] md:min-w-[14rem] h-10 bg-[#D9D9D9] rounded-md px-2 py-2    sm:my-1 sm:mx-0 md:mr-[13px] outline-none ' placeholder='Job category or title'/>
            <input type="text" className=' sm:min-w-[16rem] md:min-w-[14rem] h-10 bg-[#D9D9D9] rounded-md px-2  sm:my-1  outline-none' placeholder='Location'/>
                <button className='  text-white  text-lg  w-[140px] h-10 rounded-xl bg-[#00917C] text-center item-center mx-2  sm:my-1 '>Search</button>
        </div>

        
        <div className='sm:px-[1.5rem] md:px-[6.375rem]  flex flex-col gap-y-2   mt-10 '>
            {jobDescription.map((jobDetail, index) => (
            <RecentJobsCard jobTitle={jobDetail.jobTitle} campany={jobDetail.campany} location={jobDetail.location}  workHour={jobDetail.workHour}  link={jobDetail.link} expireDate={jobDetail.expireDate}/>))} 
        </div>





    </div>
  )
}

export default jobs