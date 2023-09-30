
const Header = () => {
  return (
    <div className="">
      <h1 className='text-center text-greenTitle  sm:text-3xl md:text-4xl font-bold  sm:mt-[53px]  md:mt-[20vh] mb-[50px]  overflow-x-clip'>Unlock Your Career Potential</h1>
      <div className='flex flex-col '>

        <div className='flex justify-center sm:px-[4rem] md:px-[8rem] flex-wrap gap-x-2 sm:mt-10 md:mt-20'>
          <input type="text" className='flex  sm:min-w-[16rem] md:min-w-[14rem] h-10 bg-[#D9D9D9] rounded-md px-2 py-2    sm:my-1 sm:mx-0 md:mr-[13px] outline-none ' placeholder='Job category or title' />
          <input type="text" className=' sm:min-w-[16rem] md:min-w-[14rem] h-10 bg-[#D9D9D9] rounded-md px-2  sm:my-1  outline-none' placeholder='Location' />
          <button className='  text-white  text-lg  w-[140px] h-10 rounded-xl bg-[#00917C] text-center item-center mx-2  sm:my-1 '>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Header