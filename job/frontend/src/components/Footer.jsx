import React from 'react'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.svg'

const footer = () => {
  return (
    <div className='md:h-[220px] md:bg-[#035956] flex sm:flex-col md:flex-row justify-between items-center sm:mt-28 md:mt-48 leading-10 md:text-white sm:px-20 md:px-36'>
        <div>
          <img src={logo} className=' md:w-[51px] md:h-[46px] sm:hidden  md:visible ' alt="logo image" />
          <p className=' '>Follow Us On</p>

          <div className='flex'>
            <img src={facebook} alt="icon" className='w-[24px] h-[24px]   sm:fill-black md:fill-white '/>
            <img src={facebook} alt="icon" className='w-[24px] h-[24px]' />
            <img src={facebook} alt="icon" className='w-[24px] h-[24px]'/>
          </div>

        </div>



        <div className='flex flex-col text-center'> 
            <a href="">Home</a>
            <a href="">Jobs</a>
            <a href="">Privacy policy</a>
            
        </div>
    </div>
  )
}

export default footer