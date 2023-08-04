import React from 'react'
import consulting from '../../assets/consulting.svg'


const JobCategoryCard = ({ type , icon , size}) => {
  return (
    <div>
        <div className='flex flex-col justify-between borderStyle sm:w-[200px] md:min-h-[174px] md:w-[175px] p-1 text-center fill-[#FCF7F7] stroke-[2px] stroke-[#00917C]'>
            
            <div>
                <img src={icon} alt="" className='w-[80px] h-[80px] text-center mx-auto mt-0  ' />
                <p  className=' text-[#168A79] text-sm font-bold text-center mt-1'>{type}</p>
            </div>
           
            <div className=''>
                <p className='text-[#000] font-medium text-sm text-center my-0'>{size} jobs listed</p>
            </div>


        </div>
    </div>
  )
}

export default JobCategoryCard