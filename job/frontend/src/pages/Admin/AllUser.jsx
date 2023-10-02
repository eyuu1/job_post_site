import { useState, useEffect } from "react";

const AllUser = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        const url = "http://localhost:8080/api/v1/jobseekers/retrive";
        fetch(url).then((result) => result.json()).then((user) => {
            setUsers(user);
        }
        ).catch(err => {
          console.log(err);
        })
      },[users]);
//  console.log(users)
    const deleteUser = async (userId) => {

        fetch(`http://localhost:8080/api/v1/jobseekers/${userId}`, { method: 'DELETE' }).then((response)=>{
            if(response.ok){
                // alert("sucessfully deleted")
            }
            else{
                // alert("error occurs while deleting")
            }
        });

        
    };



    return (
        <div>
            <h1 className='text-[35px] font-bold justify-center flex mt-5'>Users</h1>

            {users != null && users.length === 0 ? (
                <p className='text-xl font-medium'>No users</p>
            ) : (
                <div>
                  
                        {/* <div key={jobseeker._id} className="flex flex-row"> */}
                            {/* <div className='m-3 md:m-8'>
                                <img className="rounded-t-lg w-[192px] h-[280px]" src={jobseeker.img ? jobseeker.img : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAB8CAMAAAAM/58GAAAAMFBMVEXR1dr////L0dXO0tjl5uj6+vvV2N3z9PXu7/Dx8fPR0tjc3+Lp6ezZ3ODf4eXj6OtPV1aTAAADRklEQVR4nO2cCZKEIAxFURYVRe9/29F2ll4UEkT5TPlOkF8JSYhBIW5ubm5ubi5FzuS2IRZrjRvV0DVN16pelKejFqrT1R/NWOc2iYV107P5K1Nuq+jMATR8Cphpi4klM2zZv6DK0CD7TQ880KYEDVLtClhCyTmBnprk5FOwyhihNcgxqGARkdtMH27/HBRyJixNwVznclu6h9zNpsVoMFQnzPS5jd3Gm0/f0Ca3tVtIhhNAK3XPUVA1gG6oW5aEClCCYMVRVY257f2EF0dVNdjcFr9D6I5e6fDOM72urWg4CbIpXgKnNK/gjQPYEnIb/AlXAZ4Ec0sAgC8BLyNxFQAm1fIlsDMSoARuXWjgJLCrM16bx+6R8JptdqeKd3n2z4M36NEkyJ55da4mB6aB64OHH3Ib/UoXIaGDujHwLzwzunwJWPe2fyBBcAvbAlYgSW5KBZTArc0LWF0Se5a3ANZiED8UvgBW2njfRx6gfeiJOM9dbps/YEsAi6OInAS42sPUMOApEMKSFjC+gbvwrDAaJdSv/5J+aUBdhmGUaIU3vlihDyXR7s2/SKoCtML8h6UehgaqzX6GnFYBv/z/Qry8oR5mQR7pQVbmHyzFDRrYCTOOIGHEliDDCzETchgtBI9Di+2DhcDGMG5JeMLfsBYhwT/MwJp/7RA40P9AAno+EuFbQ277CISyKmyf/URgkgE3PtogMNfDfgezEpAA3aauhEYx+A2GDc0AGngJwd1t3Kv/D+E3APApKTxLAlwHe4HyqQQ7rdJmkqBj7RXiVBV3HmnIOwCgk227/dZ8mwbvQFjjeaq9LcIh1TgrpYrYI+lcDaPCjlG7PEDv8/qYTZ5vWoRwcgcEzOg2syfsEQ8geIJRCLzoIZcAF7MKtsPkrp8vSZNQwIyeLv4Hkdz/a0q8iEu/wEkVWQj8XNd12JgtNhqduSI5pT4Er2h1gQRuO8cWcXKps6FBVwqUPTGa5MFugsiZFyLKJ9kUnBZMJ2aid84a+V3lg4eGUxSQlhOSccaztzp9S+HFpZfAf9B8jPShRN74SkbybZOrnZD+KW7UG4uDpFUQ9/buIIlfmcS9+jpG2kiy3F8HpSBtm8F+CpxEAqk0fAGZhSQJMHvIGAAAAABJRU5ErkJggg=="} alt={jobseeker.title} />
                            </div> */}
                            {/* <div className='  flex flex-row gap-2'>
                                <h2 className='text-4xl font-medium'>{jobseeker.username}</h2>
                                <p className="text-xl">Email: {jobseeker.email}</p>
                                <p className="text-xl">First Name: {jobseeker.firstName}</p>
                                <p className="text-xl">Last Name: {jobseeker.lastName}</p>
                                <p className="text-xl">Address: {jobseeker.location}</p>
                                <p className="">Phone: {jobseeker.phone}</p>
                                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => deleteUser(jobseeker.id)}>Remove</button>
                            </div> */}



                            <table className=" w-full font-sans">
                                <tr>
                                    <th className=" border-[#dddddd] border-solid border-[0.2px] text-left p-2">First Name</th>
                                    <th className=" border-[#dddddd] border-solid border-[1px] text-left p-2">Last Name</th>
                                    <th className=" border-[#dddddd] border-solid border-[1px] text-left p-2">Email</th>
                                    <th className=" border-[#dddddd] border-solid border-[1px] text-left p-2">Cv</th>
                                    <th className=" border-[#dddddd] border-solid border-[1px] text-left p-2">Action</th>
                                </tr>
                                
                                {users.map((jobseeker) => (
                                <tr>
                                    <td className=" border-[#dddddd] border-solid border-[1px] text-left p-2 w-52">{jobseeker.firstName}</td>
                                    <td className=" border-[#dddddd] border-solid border-[1px] text-left w-52 p-2">{jobseeker.lastName}</td>
                                    <td className=" border-[#dddddd] border-solid border-[1px] text-left w-52 p-2">{jobseeker.email}</td>
                                    <td className=" border-[#dddddd] border-solid border-[1px] text-left w-52 p-2">{jobseeker.cv}</td>
                                    <td><button type="button" className="bg-red-500  text-white px-2  rounded hover:bg-red-600" onClick={() => deleteUser(jobseeker.id)}>Remove</button></td>
                                </tr>
                                ))}
                            </table>




                        {/* </div> */}
                   
                </div>
            )}
        </div>
        
    );

};

export default AllUser;