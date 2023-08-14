import Carousel from 'react-multi-carousel';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import RecentJobsCard from './RecentJobsCard'
import { jobDescription } from '../../constants'

const Carosel = () => {
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
    <div className='w-screen'>
      <h1 className='text-[#0B3812]  sm:text-[28px]  md:text-[48px] font-semibold text-center sm:mt-16 md:mt-28'>Recent jobs</h1>
      <Carousel
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

      >
        {jobDescription.map((jobDetail) => (
          <RecentJobsCard
            key={jobDetail.id}
            id={jobDetail.id}
            jobTitle={jobDetail.jobTitle}
            company={jobDetail.campany}
            location={jobDetail.location}
            workHour={jobDetail.workHour}
            link={jobDetail.link}
            expireDate={jobDetail.expireDate}
          />
        ))}
      </Carousel>
      <div className='text-center'>
        <button className=' text-white text-sm sm:mt-7 md:mt-9  px-5 py-3  rounded-2xl bg-[#00917C] '>See All Available Jobs</button>
      </div>
    </div>
  )
}

export default Carosel