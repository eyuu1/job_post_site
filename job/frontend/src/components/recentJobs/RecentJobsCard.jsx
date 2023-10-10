import React from 'react'
import { Link } from 'react-router-dom'
import editIcon from '../../assets/edit_icon.svg'
import clockImg from '../../assets/clock.svg'
import location_img from '../../assets/location.svg'
import worktime_img from '../../assets/worktime.svg'

const RecentJobsCard = ({ id, jobTitle, jobType, campany, location, link, expireDate }) => {
  return (
    <div className="flex borderStyle flex-row gap-1 flex-grow  p-2">
      <div>
        <img src={editIcon} alt="job icon" className="md:w-10 md:h-9 sm:w-[32px] sm:h-[35px]" />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#184D47] sm:text-[14px] md:text-[15px] lg:text-[17px] font-semibold mr-1">{jobTitle}</h1>
          </div>
          <div>
            <Link to={`/jobs/${id}`} className="px-[4px] bg-[#00917C] text-white sm:text-[12px] md:text-[14px] lg:text-[16px]">
              Details
            </Link>
          </div>
        </div>

        <div className="flex flex-row justify-between items-end sm:mt-2 md:mt-4">
          <div className="flex flex-col">
            <p className="text-[#184D47] sm:text-[12px] md:text-[14px] lg:text-base font-medium">{campany}</p>


            {jobType !== '' && jobType!=null && (
              <div className='flex items-center'>
                <img src={worktime_img} alt="" className='w-[15px] h-[15px] font-thin' />
                <span className="text-[#184D47] pl-1 sm:text-[12px] md:text-[14px] lg:text-base font-medium">{jobType} </span>
              </div>
              
            )}



            <div className='flex items-center'>
              <img src={location_img} alt="" className='w-[15px] h-[15px] ' />
              <span className="text-[#184D47] pl-1 sm:text-[12px] md:text-[14px] lg:text-base font-medium">{location} </span>
            </div>

          </div>

          <div className="flex items-center">
            <img src={clockImg} alt="clock image" className="sm:hidden md:flex" />
            <p className="text-[#b64156] sm:text-[12px] md:text-[14px] font-semibold pl-1 items-center my-0">3 days left</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentJobsCard;