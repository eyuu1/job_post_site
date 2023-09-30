import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobDescription } from '../constants';
import Description from '../components/Detail/Description';
import Header from '../components/Detail/Header';
import Suggested from '../components/Detail/Suggested';

const Detail = () => {
  const { jobId } = useParams();

  const job = jobDescription.find((job) => job.id == jobId);

  useEffect(() => {
    if (job === undefined) {
      navigate('/');
    }
  }, [job, navigate]);

  if (job !== undefined) {
    return (
      <div>
        <Header />
        <div className="flex justify-start items-start w-full justify-between px-24 py-16">
          <Description
            id={job.id}
            jobTitle={job.jobTitle}
            company={job.company}
            location={job.location}
            workHour={job.workHour}
            link={job.link}
            expireDate={job.expireDate}
          />
          <Suggested />
        </div>
      </div>
    );
  }

  return null;
};

export default Detail;