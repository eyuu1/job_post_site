import React from 'react'
import RecentJobsCard from './RecentJobsCard'
import { jobDescription } from '../../constants/index.js'

const Recent = () => {
  return (
    <div className=''> 
        <h1 className='text-[#0B3812] text-[48px] font-semibold text-center  mt-40'>Recent jobs</h1>
        <div className=' flex justify-center gap-3 ml-0 w-full flex-wrap'>

          {jobDescription.map((jobDetail, index) => (
          
          <RecentJobsCard jobTitle={jobDetail.jobTitle} campany={jobDetail.campany} location={jobDetail.location}  workHour={jobDetail.workHour}  link={jobDetail.link} expireDate={jobDetail.expireDate}/>
            
          ))}




            {/* <RecentJobsCard jobTitle="soft" campany="google" location="adiss ababa, bole" workHour="full time" link="http://localhost:5222" expireDate="2 days left"/>

            <RecentJobsCard jobTitle="software development" campany="google" location="adiss ababa, bole" workHour="full time" link="http://localhost:5222" expireDate="2 days left"/>

            <RecentJobsCard jobTitle="software development" campany="google" location="adiss ababa, bole" workHour="full time" link="http://localhost:5222" expireDate="2 days left"/>

            <RecentJobsCard jobTitle="software development" campany="google" location="adiss ababa, bole" workHour="full time" link="http://localhost:5222" expireDate="2 days left"/> */}
        </div>
    </div>
  )
}

export default Recent