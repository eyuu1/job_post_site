import RecentJobsCard from '../recentJobs/RecentJobsCard'
import { jobDescription } from '../../constants'

const Suggested = () => {
  const times = 3;
  const slicedJobDescription = jobDescription.slice(0, times);

  return (
    <div className="flex flex-col flex-wrap space-y-4">
      <h3 className=' font-medium'>Related Jobs</h3>
      {slicedJobDescription.map(jobDetail => (
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
    </div>
  );
}

export default Suggested;