import React from 'react'
import JobCategoryCard from './JobCategoryCard'
import { jobCategoryData } from '../../constants/'


const JobCategory = () => {
  return (

    <div> 
        <h1 className='text-[#0B3812] sm:text-[28px] md:text-[48px] font-semibold text-center sm:mt-16  md:mt-28'>Job Categories</h1>
        <p className='text-[#000000cc] text-md leading-normal font-medium mb-[39px] text-center'>choose your field of study to get your carrier more easily</p>
       

       <div className=' sm:mx-[2rem] md:section_margin flex  gap-4 flex-wrap justify-center'>
            {jobCategoryData.map((categoryDetail, index) => (
                
            <JobCategoryCard type={categoryDetail.type} icon={categoryDetail.icon} size={categoryDetail.size}/>
            
        ))}

       </div>
        
    </div>




   
    
  )
}

export default JobCategory