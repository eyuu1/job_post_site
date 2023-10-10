// import Carousel from 'react-multi-carousel';
// import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import RecentJobsCard from './RecentJobsCard'
import { jobDescription } from '../../constants'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Carosel = () => {

  const [jobRecords, setJobRecords] = useState([]);
  const navigate = useNavigate();
  const index=0;

  useEffect(() => {
    const url = "http://localhost:8080/api/v1/job/recentjobs";
    fetch(url).then((result) => result.json()).then((jobs) => {
        setJobRecords(jobs);
    }
    ).catch(err => {
      console.log(err);
    })
  },[]);




  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };
  return (
    <div className='w-screen '>
      <h1 className='text-[#0B3812]  sm:text-[28px]  md:text-[48px] font-semibold text-center sm:mt-16 md:mt-40'>Recent jobs</h1>
      {/* <Carousel
        arrows
        containerClass="carousel-container p-4 md:px-8 md:py-12 w-screen"

        customLeftArrow={
          <div className="p-10">
            <button className="absolute top-[40%] left-4 w-14 h-14 rounded-full 
                       bg-[#00917C] hover:bg-green-500 text-white  flex items-center">
              <ChevronLeftIcon
                className="h-6 w-6 ml-4"
              />
            </button>
          </div>

        }
        customRightArrow={
          <div className="p-10">
            <button className="absolute top-[40%] right-4 w-14 h-14 rounded-full 
                       bg-[#00917C] hover:bg-green-500 text-white  flex items-center">
              <ChevronRightIcon
                className="h-6 w-6 ml-4"
              />
            </button>
          </div>

        }
        slidesToSlide={1}
        swipeable={true}
        infinite={true}

        responsive={responsive}

      > */}
       
        <div className='grid grid-cols-2 gap-2 mx-14 md:mt-8'>
        {jobRecords.map((jobDetail) => (
          <RecentJobsCard
            key={jobDetail.id}
            id={jobDetail.id}
            jobTitle={jobDetail.title}
            // company={jobDetail.campany}
            location={jobDetail.location}
            workHour={jobDetail.jobType}
            // link={jobDetail.link}
            // expireDate={jobDetail.expireDate}
          />
        )) }
        </div>
        

    
      {/* </Carousel> */}
      <div className='text-center mt-12  rounded-4xl'>
        <a href='http://localhost:5173/jobs' className=' text-white text-lg px-5 py-3 hover:bg-green-600 bg-[#00917C] '>See All Available Jobs</a>
      </div>
    </div>
  )
}

export default Carosel