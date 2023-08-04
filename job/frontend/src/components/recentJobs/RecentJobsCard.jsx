import React from 'react'
import editIcon from '../../assets/edit_icon.svg'
import clockImg from '../../assets/clock.svg'

const RecentJobsCard = ({jobTitle, campany, location , workHour , link , expireDate}) => {
  return (
    <div className='flex borderStyle flex-row gap-1 sm:min-w-[288px] md:min-w-[360px] lg:min-w-[420px] xl:min-w-[450px] p-2  backdrop-opacity-10'>
      <div>
       <img src={editIcon} alt="job icon" className='md:w-10 md:h-9 sm:w-[32px] sm:h-[35px]' />
      </div>


      <div className="flex-1 ">
        <div className='flex justify-between '>
          <div><h1 className=' text-[#184D47]  sm:text-[14px] md:text-[15px] lg:text-[17px]  font-semibold mr-1 '>{jobTitle}</h1>
          </div>
          <div><a href={link} className='px-[4px]  bg-[#00917C] text-white sm:text-[12px] md:text-[14px] lg:text-[16px]' >Details</a></div>
        
        </div>

        <div className='flex flex-row justify-between items-end sm:mt-2 md:mt-4'>
          <div className='flex flex-col'>
            <p className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium '>{campany}</p>
            <p className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium'>{workHour}</p>
            <span className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium'>{location}</span>
          </div>

          <div className='flex items-center'>
            <img src={clockImg} alt="clock image" className=' sm:hidden md:flex'  />
            <p className='text-[#b64156] sm:text-[12px] md:text-[14px] font-semibold pl-1 items-center my-0'>{expireDate}</p>
          </div>
        </div>

      </div>
    </div>
  )

  
}


export default RecentJobsCard