import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobDescription } from '../constants';
import Description from '../components/Detail/Description';
import Header from '../components/Detail/Header';
import Suggested from '../components/Detail/Suggested';

const Detail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();



  const [job , setJob] = useState([]);

  // const job = jobDescription.find((job) => job.id == jobId);
  const url = `http://localhost:8080/api/v1/job/${jobId}`;

          useEffect(()=> {
            const response= fetch(url).then(res => {
              if(!res.ok){
                  console.log("error found")
              }
              return res.json();
          }).then(Job => {
            Job.forEach(jobdetail => {
              setJob(jobdetail)
            });
  
            //  alert("sucess");
            
             

          }).catch(error => {
              console.log(error);
              alert("server error")
          })
          } , [jobId])

        


  if (job !== "") {
    return (
      <div>
        <Header />
        <div className="flex  w-full  px-24 py-16">
          <Description
            id={job.id}
            jobTitle={job.title}
            description = {job.description}
            // company={job.company}
            location={job.location}
            jobType={job.jobType}
            link={job.url}
            // expireDate={job.expireDate}

          />
          {/* <Suggested /> */}
        </div>
      </div>
    );
  }

  return null;
};

export default Detail;