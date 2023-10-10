import { jobDescription } from '../constants'
import PaginatedItems from '../components/Job/Paginate'
import { useState, useEffect } from 'react'


const jobs = () => {
  const [jobRecords, setJobRecords] = useState([]);
  const [searchTitle, setSearchTitle ] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const url = "http://localhost:8080/api/v1/job/retrive";
    fetch(url).then((result) => result.json()).then((jobs) => {
      setJobRecords(jobs);
    }
    ).catch(err => {
      console.log(err);
    })
  },[]);



  const handleSubmit = (e) => {
    e.preventDefault();


    const url = `http://localhost:8080/api/v1/job/keyword?keyword=${ searchKeyword }`;
    fetch(url).then((result) => result.json()).then((jobs) => {
      setJobRecords(jobs);
    }
    ).catch(err => {
      console.log(err);
    })
  }




  // console.log(jobRecords);

  return (
    <div className='flex flex-col '>
      <div className='flex justify-center sm:px-[4rem] md:px-[8rem] flex-wrap gap-x-2 sm:mt-10 md:mt-20'>
      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <input type="text" className='flex  sm:min-w-[16rem] md:min-w-[14rem] h-10 bg-[#D9D9D9] rounded-md px-2 py-2    sm:my-1 sm:mx-0 md:mr-[13px] outline-none ' 
            placeholder='Job title or location'
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)} />
          {/* <input type="text" className=' sm:min-w-[16rem] md:min-w-[14rem] h-10 bg-[#D9D9D9] rounded-md px-2  sm:my-1  outline-none' 
            placeholder='Location'
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)} 
            /> */}
          <button type='submit' className='  text-white  text-lg  w-[140px] h-10 rounded-xl bg-[#00917C] text-center item-center mx-2  sm:my-1 '>Search</button>
        </div>
        
        </form>
      </div>
      <div>
        <PaginatedItems data={jobRecords} />
      </div>
    </div>
  )
}

export default jobs