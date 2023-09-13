import { jobDescription } from "../../constants"

const Description = ({ id, jobTitle , description , location, jobType, link }) => {

  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
      <h3 className='text-center text-greenTitle sm:text-3xl md:text-4xl font-bold overflow-x-clip'>{jobTitle}</h3>
      <p>{description}</p>
      {/* <h3>{campany}</h3> */}
      <h3>{location}</h3>
      <h3>{jobType}</h3>
      {/* <h3>{expireDate}</h3> */}

    </div>
  )
}

export default Description