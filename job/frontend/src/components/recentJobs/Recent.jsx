import React from 'react'
import RecentJobsCard from './RecentJobsCard'

const Recent = () => {
  return (
    <div className=' z-0 '> 
        <h1 className='text-[#0B3812] text-[48px] font-semibold text-center  mt-40'>Recent jobs</h1>
        <div>
            <RecentJobsCard/>
        </div>
    </div>
  )
}

export default Recent