import React from 'react'
import RecentJobsCard from './RecentJobsCard'
import { jobDescription } from '../../constants'

const Recent = () => {
  return (
    <div className=''> 
        <h1 className='text-[#0B3812]  sm:text-[28px]  md:text-[48px] font-semibold text-center sm:mt-28 md:mb-9 md:mt-40'>Recent jobs</h1>
        <div className=' flex justify-center gap-x-10 gap-y-5 ml-0 flex-wrap'>

          {jobDescription.map((jobDetail, index) => (
          
          <RecentJobsCard jobTitle={jobDetail.jobTitle} campany={jobDetail.campany} location={jobDetail.location}  workHour={jobDetail.workHour}  link={jobDetail.link} expireDate={jobDetail.expireDate}/>
            
          ))}

        </div>
        <div className='text-center'>
         <button className=' text-white text-sm sm:mt-7 md:mt-9  px-5 py-3  rounded-2xl bg-[#00917C] '>See All Available Jobs</button>
        </div>
       
    </div>
  )
}

export default Recent