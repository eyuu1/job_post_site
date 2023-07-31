import React from 'react'
import editIcon from '../../assets/edit_icon.svg'
import clockImg from '../../assets/clock.svg'

const RecentJobsCard = ({jobTitle, campany , location , workHour , link , expireDate}) => {
  return (
    <div className='borderStyle flex flex-row gap-4 flex-start sm:max-w-[288px] md:min-w-[40vw] py-2 sm:px-1 md:px-3 backdrop-opacity-10'>
      <div>
        <img src={editIcon} alt="job icon" className='md:w-14 md:h-14 sm:w-[32px] sm:h-[35px]' />
      </div>


      <div className='flex flex-row md:gap-7  '>
        <div>
          <h1 className='text-[#184D47] sm:text-[14px] md:text-[18px]  font-semibold  md:w-[18rem] sm:w-[10rem] flex flex-wrap relative'>{jobTitle}</h1>
          <p className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium sm:mt-[22px] md:mt-[29px]'>{campany}</p>
          <p className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium'>{workHour}</p>
          <p className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium'>{location}</p>
        </div>


        <div className='  text-end items-end  md:absolute   md:right-0 sm:mt-0 '> 
          <a href={link}  className=' md:px-4 sm:px-1 py-1 mx-1  bg-[#00917C] text-center items-center text-white sm:text-sm md:text-base font-normal' >Details</a>
          <div className='flex  items-center md:mt-20 sm:mt-[55px]'> 
            <img src={clockImg} alt="clock image" className='md:mx-2 sm:mx-0 sm:hidden'  />
            <p className='text-[#b64156] sm:text-xs md:text-base font-semiboldsm:mx-0 sm:text-center'>{expireDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentJobsCard