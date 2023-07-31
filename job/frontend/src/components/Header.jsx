import React from 'react'
import curve_bottom from '../assets/curve_bottom.svg'
import curve_top from '../assets/curve_top.svg'

const Header = () => {
  return (

    <div>
        <div className='xl:pl-[196px] lg:px-[10vw] pd:mx-[5vw] sm:px-[2vw] w-full h-fit'>
            <div className='md:flex flex-col'>  
                <img src={curve_top} alt="curve design" className='w-[231px] h-[150px] sm:hidden md:flex absolute right-0 ' />
            </div>


            <div>
                <h1 className='text-greenTitle md:text-6xl font-bold leading-normal sm:mt-[53px] sm:text-5xl md:mt-[20vh] mb-[50px] sm:leading-none overflow-hidden'>Find your carrier online</h1>
    

                <p className='text-[#0b3812cc] text-lg leading-normal font-medium mb-[39px] max-w-lg'>Discover thousands of job opportunities from top employers and start your journey towards success today</p>
                <div className='md:flex md:flex-row flex-1 sm:flex-col'>
                    <input type="text" className='w-[20rem] h-[38px] bg-[#D9D9D9] rounded-md px-2 sm:my-1 sm:mx-0 md:mr-[13px] outline-none ' placeholder='Job category or title'/>
                    <input type="text" className='w-[20rem] h-[38px] bg-[#D9D9D9] rounded-md px-2  sm:my-1 sm:mx-1 md:mx-[2.6vw] outline-none' placeholder='Location'/>
                    <button className=' text-white text-lg  w-[192px] h-10 rounded-2xl bg-[#00917C] text-center item-center  sm:my-1    '>Search</button>

                </div>
            </div>
    
        
        </div>

        <img src={curve_bottom} alt="curve design" className='w-[231px] h-[150px] sm:hidden md:flex absolute left-[-10px] bottom-1 ' />

        

    </div>


  )
}

export default Header