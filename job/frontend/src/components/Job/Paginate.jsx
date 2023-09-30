import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';
import RecentJobsCard from '../recentJobs/RecentJobsCard';
// import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid'


export default function PaginatedItems(props) {
  // const [currentItems, setCurrentItems] = useState([]);
  const { data } = props;


  // const [itemOffset, setItemOffset] = useState(0);
  // const [pageCount, setPageCount] = useState(0);


  const itemsPerPage = 2


  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   setCurrentItems(data.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(data.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage, data])



  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % data.length;
  //   setItemOffset(newOffset);
  // };




  // console.log(data);

  return (
    <>
      <div className=''>
        <div className='sm:px-[1.5rem] md:px-[6.375rem]  flex flex-col gap-y-2   mt-10 '>
          {data.map((jobDetail) => (
            <RecentJobsCard
              // key={jobDetail.id}
                id={jobDetail.id}
              jobTitle={jobDetail.title} 

              jobType={jobDetail.jobType}
              company={jobDetail.campany}
              location={jobDetail.location}
              // workHour={jobDetail.workHour}
              // link={jobDetail.link}
              expireDate="2 days left"
            />
          ))}
        </div>

        {/* <ReactPaginate
          breakLabel="..."
          nextLabel={<ChevronDoubleRightIcon className="h-6 w-6 text-black" />}
          nextLinkClassName="text-black"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<ChevronDoubleLeftIcon className="h-6 w-6 text-black" />}
          previousLinkClassName="text-black"
          renderOnZeroPageCount={null}
          className='flex flex-row flex-center space-x-8 w-[50%] items-center text-black h-[100px] justify-center'
          pageLinkClassName="hover:bg-green-500 text-black text-[24px]"
          breakClassName="p-8"
          activeLinkClassName="bg-[#00917C]"
        /> */}

      </div>
    </>
  );
}
