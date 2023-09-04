import React from 'react'

const createJob = () => {
  const selectedValue = () => {
    { console.log(document.getElementById("jobType").value) }

  }


  return (
    <div className='section_margin mr-40 mt-20  flex flex-col bg-slate-200  justify-start rounded-md '>
      <div className='p-4'>
        <h3 className='font-semibold'>POST JOB</h3>
        <form action="">
          <p className='mt-10'>Job Title*</p>
          <input type="text" className='border-2  w-full outline-none p-2 rounded-md text-sm' />
          <label htmlFor='description' className='mt-4'>Description*</label>
          <textarea name="" id="" className='p-2 w-full h-32 outline-none rounded-md text-sm'></textarea>
          <label htmlFor='location' className='mt-4'>Location*</label>
          <input type="text" className='border-2  w-full outline-none p-2 rounded-md text-sm' />
          <label htmlFor='jobType' className='mt-4 mb-1'>Job Type*</label>
          <select id="jobType" className='p-2 rounded-md block'>
            <option value="">--Please choose job type--</option>
            <option value="fullTime">Full-time</option>
            <option value="partTime">Part-time</option>
            <option value="internship">Internship</option>
          </select>
          <label htmlFor='applicationUrl' className='mt-4'>Application URL*</label>
          <input type="url" className='border-2  w-full outline-none p-2 rounded-md text-sm' />
          <button className='flex flex-col text-center mx-auto bg-fuchsia-400' onClick={selectedValue}>button</button>

        </form>




      </div>
    </div>


  )
}

export default createJob