import React from 'react'
import editIcon from '../../assets/edit_icon.svg'
import clockImg from '../../assets/clock.svg'

const RecentJobsCard = ({jobTitle, campany, location , workHour , link , expireDate}) => {
  return (
    <div className='flex borderStyle flex-row gap-1 sm:min-w-[288px] md:min-w-[360px] lg:min-w-[420px] xl:min-w-[450px] p-2  backdrop-opacity-10'>
      <div>
       <img src={editIcon} alt="job icon" className=' md:w-10 md:h-9 sm:w-[32px] sm:h-[35px]' />
      </div>


      <div className="flex-1 ">
        <div className='flex justify-between '>
          <div><h1 className=' text-[#184D47]  sm:text-[14px] md:text-[15px] lg:text-[17px] w-3/4 font-semibold leading-2 '>software</h1>
          </div>
          <div><a href={link} className='px-[4px]  bg-[#00917C] text-white w-1/4 sm:text-[12px] md:text-[14px] lg:text-[16px]' >Details</a></div>
        
        </div>

        <div className='flex flex-row justify-between items-end sm:mt-2 md:mt-4'>
          <div className='flex flex-col'>
            <p className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium '>{campany}</p>
            <p className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium'>{workHour}</p>
            <span className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium'>{location}</span>
          </div>

          <div className='flex items-center'>
            <img src={clockImg} alt="clock image" className=' sm:hidden md:flex'  />
            <p className='text-[#b64156] sm:text-[12px] md:text-[14px] font-semibold pl-1 items-center my-0'>2 days left</p>
          </div>
        </div>

      </div>
    </div>
  )

  
}

{/* 
const RecentJobsCard = ({jobTitle, campany, location , workHour , link , expireDate}) => {
<div className='borderStyle flex flex-row gap-2 flex-start sm:max-w-[288px] md: overflow-y-hidden md:min-w-[40vw] py-2 sm:px-1 md:px-3 backdrop-opacity-10'>
      <div>
        <img src={editIcon} alt="job icon" className='md:w-14 md:h-14 sm:w-[32px] sm:h-[35px]' />
      </div>


      <div className='flex flex-row'>
        <div>
          <h1 className='text-[#184D47] sm:text-[14px] md:text-[15px] lg:text-[18px]  font-semibold  md:w-[18rem] sm:w-[10rem] flex flex-wrap relative'>{jobTitle}</h1>
          <p className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium sm:mt-[22px] md:mt-[29px]'>{campany}</p>
          <p className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium'>{workHour}</p>
          <p className='text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium'>{location}</p>
        </div>


        <div className='  text-end items-end  md:absolute   md:right-0 sm:mt-0 '> 
          <a href={link}  className=' md:px-4 sm:px-1 py-1 mx-1  bg-[#00917C] text-center items-center text-white sm:text-sm md:text-base font-normal' >Details</a>
          <div className='flex  items-center md:mt-20 sm:mt-[55px]'> 
            <img src={clockImg} alt="clock image" className=' md:flex md:mx-2 sm:mx-0 sm:hidden'  />
            <p className='text-[#b64156] sm:text-xs md:text-base font-semibold sm:mx-0 sm:text-center'>{expireDate}</p>
          </div>
        </div>
      </div>
    </div>
     */}
export default RecentJobsCard