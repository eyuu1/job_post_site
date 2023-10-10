import { useEffect, useState } from "react";

const DashboardHome = () => {

    const [jobCount , setJobCount] = useState(0);
    const [campanyCount , setCampanyCount] = useState(0);
    const [jobseekersCount , setJobseekersCount] = useState(0);

    useEffect(() => {
        const url = "http://localhost:8080/api/v1/job/countjobs";
        fetch(url).then((result) => result.json()).then((allJobs) => {
          setJobCount(allJobs);
        }
        ).catch(err => {
          console.log(err);
        })
      },[]);


      useEffect(() => {
        const url = "http://localhost:8080/api/v1/campany/countcampanies";
        fetch(url).then((result) => result.json()).then((allCampanies) => {
          setCampanyCount(allCampanies);
        }
        ).catch(err => {
          console.log(err);
        })
      },[]);


      useEffect(() => {
        const url = "http://localhost:8080/api/v1/jobseekers/countjobseekers";
        fetch(url).then((result) => result.json()).then((allJobseekers) => {
          setJobseekersCount(allJobseekers);
        }
        ).catch(err => {
          console.log(err);
        })
      },[]);




    return(
        <div>
           
                <h1 className=" font-bold mt-10 text-[30px]">overview</h1>
            <div className="flex mt-5 flex-col">
                <div className="flex gap-10">
                    <div className=" bg-slate-300 w-60 h-40 flex flex-col rounded-xl justify-between ">
                        <p className="flex justify-center mt-10 text-[36px] font-bold">{jobCount}</p>
                    <p className=" flex justify-center font-semibold"> job created</p> 
                    </div>

                    <div className=" bg-slate-300 w-60 h-40 flex flex-col rounded-xl justify-between ">
                        <p className="flex justify-center mt-10 text-[36px] font-bold">{campanyCount}</p>
                    <p className=" flex justify-center font-semibold"> campanies registered</p> 
                    </div>

                    <div className=" bg-slate-300 w-60 h-40 flex flex-col rounded-xl justify-between ">
                        <p className="flex justify-center mt-10 text-[36px] font-bold">{jobseekersCount}</p>
                    <p className=" flex justify-center font-semibold">job seekers registered </p> 
                    </div>
                </div>


                <div className="flex gap-10 mt-10 ">
                    <div className=" bg-slate-300 w-60 h-40 flex flex-col rounded-xl justify-between ">
                        <p className="flex justify-center mt-10 text-[36px] font-bold">hello</p>
                    <p className=" flex justify-center font-semibold"> active jobs</p> 
                    </div>

                    <div className=" bg-slate-300 w-60 h-40 flex flex-col rounded-xl justify-between ">
                        <p className="flex justify-center mt-10 text-[36px] font-bold">hello</p>
                    <p className=" flex justify-center font-semibold"> pending jobs</p> 
                    </div>

                    {/* <div className=" bg-slate-300 w-60 h-40 flex flex-col rounded-xl justify-between ">
                        <p className="flex justify-center mt-10 text-[36px] font-bold">hello</p>
                    <p className=" flex justify-center font-semibold"> job seekers registered</p> 
                    </div> */}
                </div>


            </div>
                
       </div>
    ) 
    
   
};

export default DashboardHome; 