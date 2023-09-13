import React from 'react'
import { useState } from 'react'

const createJob = () => {
  // const selectedValue = () => {
  //   { console.log(document.getElementById("jobType").value) }

  // }

  const [jobValues , setjobValues] = useState({
    title: "",
    description: "",
    location: "",
    jobType: "",
    url: ""
});

const onchange = (e)=>{
  setjobValues({ ...jobValues , [e.target.name]: e.target.value })
}


  const asyncPostCall = async (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/v1/job/add";
    try{
      const config = {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(jobValues)
    }

    const response = await fetch(url , config);
    if(response.ok){
      console.log("saved sucessfully")
    }
    else{

    }
    } catch(error){
      console.log(error);
    }
}

// console.log(jobValues);

  return (
    <div className='section_margin mr-40 mt-20  flex flex-col bg-slate-200  justify-start rounded-md '>
      <div className='p-4'>
        <h3 className='font-semibold'>POST JOB</h3>
        <form action="" onSubmit={asyncPostCall} className='mt-10'>
          
          <label htmlFor='title' className=' mt-20'>Job Title*</label>
          <input type="text" name='title' className='border-2  w-full outline-none p-2 rounded-md text-sm' onChange={onchange} />
        
          <div className='mt-4'>
          <label htmlFor='description' className='mt-20'>Description*</label>
          <textarea name="description" id="" className='p-2 w-full h-32 outline-none rounded-md text-sm' onChange={onchange}></textarea>
          </div>
          
          <div className='mt-4'>
          <label htmlFor='location' className='mt-4'>Location*</label>
          <input type="text" name='location' className='border-2  w-full outline-none p-2 rounded-md text-sm' onChange={onchange} />
          </div>

          <div className='mt-4'>
          <label htmlFor='jobType' className='mt-4 mb-1'>Job Type*</label>
          </div>
          <select id="type" name='jobType' className='p-2 rounded-md block mt-2' onChange={onchange}>
            <option value="">--Please choose job type--</option>
            <option value="fullTime">Full-time</option>
            <option value="partTime">Part-time</option>
            <option value="internship">Internship</option>
          </select>
          
          <div className='mt-4'>
          <label htmlFor='url' className='mt-4'>Application URL*</label>
          <input type="url" name='url' className='border-2  w-full outline-none p-2 rounded-md text-sm' onChange={onchange} />
          </div>
          <button type="submit" class="py-2 px-4 mt-8 text-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-all text-sm">Create Job</button>

        </form>




      </div>
    </div>


  )
}

export default createJob