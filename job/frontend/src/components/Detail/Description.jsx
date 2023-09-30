import { useNavigate } from "react-router-dom"
import { jobDescription } from "../../constants"
import DOMPurify from "dompurify"

const Description = ({ id, jobTitle , description , location, jobType, link }) => {

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(description)
  })



  return (


    <div className="flex flex-col justify-start items-start w-fit ">
      <h3 className='text-center text-greenTitle sm:text-3xl md:text-2xl font-bold overflow-x-clip'>{jobTitle}</h3>
      <div className='displaylist'>
      <div className=" text-sm font-sans text-black" dangerouslySetInnerHTML={sanitizedData()}/>
      </div>
     
      
      <a href={link} class="py-2 px-4 mt-8 text-center justify-center rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-all text-sm">apply</a>

      {/* <h3>{campany}</h3> */}
      <h3>{location}</h3>
      <h3>{jobType}</h3>
      {/* <h3>{expireDate}</h3> */}
    </div>
  )
}

export default Description