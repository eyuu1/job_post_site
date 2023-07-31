import React from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/hambergermenu.svg'
import close from '../assets/close.svg'
import { useState } from 'react'

const Nav = () => {

    const [toggle, settoggle] = useState(false)

  return (
    <>
    <nav className="bg-primary flex justify-between lg:px-[6.375rem] md:px-[4rem] sm:px-[2rem] w-full py-2 ">

      <img src={logo} className='md:w-[57px] md:h-[46px] sm:w-[37px] sm:h-[26px] my-auto justify-start' alt="logo image" />
      

        <ul className="my-auto flex item-center justify-end  sm:hidden md:flex ">
        <li><a href="#">Home</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        </ul>  


        <img src={toggle ? close : menu} onClick={()=>settoggle((prev)=> !prev)} className="absolute object-contain cursor-pointer md:top-[18px] right-[2rem]  md:hidden" alt="open and close image md:hidden" />
        
   

    </nav>

   {/* for mobile navigation */}
    <div className={` mobile_nav ${toggle? 'visible': 'hidden'} `} >
        <ul className="my-auto flex flex-col bg-black  absolute top-19 w-1/2 text-center right-0">
            <li><a href="#">Home</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
       
        </ul>  
    </div>

    

    

    </>
  )
}

export default Nav