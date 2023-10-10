import React from 'react'
import { useState } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { useEffect } from 'react'

const createJob = () => {
  // const selectedValue = () => {
  //   { console.log(document.getElementById("jobType").value) }

  // }
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline' , { 'list': 'ordered'}, { 'list': 'bullet' }],
    ],
  };

  const placeholder = 'write a detailed description of your job...';

 
  const theme = 'snow';

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location , setLocation] = useState('');
  const [jobType , setJobType] = useState('');
  const [url , setUrl] = useState('');

  let jobvalues = { "title": title, "description": description , "location": location , "jobType": jobType , "url": url , "status": "pending" }

  const { quill, quillRef } = useQuill({theme, modules, placeholder});

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {

        setDescription(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);


//   const [jobValues , setjobValues] = useState({
//     title: "",
//     description: desc,
//     location: "",
//     jobType: "",
//     // category: ,
//     url: ""
// });




// console.log(jobValues.description)
  const asyncPostCall = async (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/v1/job/add";
    try{
      const config = {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(jobvalues)
    }

    const response = await fetch(url , config);
    if(response.ok){
      console.log("saved sucessfully")
      alert("job saved sucessfully")
    }
    else{

    }
    } catch(error){
      console.log(error);
    }
}

console.log(jobvalues);

  return (
    <div className='section_margin mr-40 mt-20  flex flex-col bg-[#d6e9e9]   justify-start rounded-lg '>
      <div className='p-4'>
        <h3 className='font-semibold'>POST JOB</h3>
        <form action="" onSubmit={asyncPostCall} className='mt-10 '>
          
          <label htmlFor='title' className=' mt-20'>Job Title*</label>
          <input type="text" name='title' className='border-2  w-full outline-none p-2 rounded-md text-sm' required onChange={(e) => setTitle(e.target.value)} />
        


          <div className='mt-4'>
          <label htmlFor='location' className='mt-4'>Location*</label>
          <input type="text" name='location' className='border-2  w-full outline-none p-2 rounded-md text-sm' required onChange={(e) => setLocation(e.target.value)} />
          </div>


          <div className='mt-4'>
          <label htmlFor='description' className='mt-20'>Description*</label>
          <div style={{ width: 600, height: 300 ,  display: 'flex', flexDirection: 'column' , border: '2px solid white' , background: '#FFFF' , outline: '0px solid transparent', outlineOffset: '2px' , borderRadius:'6px'}}>
            <div name="description" ref={quillRef}/>
          </div>
          
          {/*
          <textarea name="description" id="" className='p-2 w-full h-32 outline-none rounded-md text-sm' onChange={onchange}></textarea> */}
          </div>
          

          <div className='mt-4'>
          <label htmlFor='jobType' className='mt-4 mb-1'>Job Type*</label>
          </div>
          <select id="type" name='jobType' className='p-2 rounded-md block mt-2' onChange={(e) => setJobType(e.target.value)}>
            <option value="">--Please choose job type--</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="internship">Internship</option>
          </select>

          <div className='mt-4'>
          <label htmlFor='cat' className='mt-4 mb-1'>Job Category*</label>
          </div>
          <select id="category" name='cat' className='p-2 rounded-md block mt-2' >
            <option value="">select job category</option>
            <option value="1">IT</option>
            <option value="2">Accounting and finance</option>
            <option value="3">Medical</option>
          </select>
          
          <div className='mt-4'>
          <label htmlFor='url' className='mt-4'>Application URL*</label>
          <input type="url" name='url' className='border-2  w-full outline-none p-2 rounded-md text-sm' onChange={(e) => setUrl(e.target.value)}/>
          </div>
          <button type="submit" class="py-2 px-4 mt-8 text-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-all text-sm">Create Job</button>

        </form>




      </div>
    </div>


  )
}

export default createJob