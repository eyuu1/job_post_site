import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmpSignup = () => {

    const navigate = useNavigate();
    // const [employe , setEmploye] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     cPassword: ""
    // });

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCpassword] = useState('');
    const [cv, setCv] = useState('');



    let employee = { "firstName": fname, "lastName": lname, "email": email, "password": password, "cv":cv }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const url = "http://localhost:8080/api/v1/jobseekers/add";
        try {
            fetch(url, {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(employee)
    
            }).then((res) => {
                if(res.ok){
                alert("sucessfully registered")
                navigate("/emp_signin")
                }
                else{
                    alert("user already exist. please sign in")
                    navigate("/signin")
                }
            
            })

        } catch(error){
                 alert("try again server connection error");
        }
    };

    console.log(employee)
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-10">
            <div className="w-full max-w-lg bg-white">
            <h1 className='flex justify-center mt-2 font-sans font-semibold text-[#52BFBF]'>Submit your CV & create your profile</h1>
                <form onSubmit={handleSubmit} className=" shadow-md rounded px-8 py-6">
                    <div className='flex justify-between'>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fname">
                                First Name
                            </label>
                            <input
                                className=" shadow appearance-none text-sm border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="fname"
                                type="text"
                                placeholder="fname"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                            />
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                                Last Name
                            </label>
                            <input
                                className="text-sm shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lname"
                                type="text"
                                placeholder="last name"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpassword">
                            Confirm Password
                        </label>
                        <input
                            className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirm-password"
                            type="password"
                            placeholder="Confirm Password"
                            value={cPassword}
                            onChange={(e) => setCpassword(e.target.value)}
                            pattern={password}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
                            Upload CV
                        </label>
                        <input
                            className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cv"
                            type="file"
                            placeholder=""
                            value={cv}
                            onChange={(e) => setCv(e.target.value)}
                            pattern={password}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="http://localhost:5173/emp_signin"
                        >
                            Already have an account? Sign in.
                        </a>
                    </div>
                </form>
            </div>
        </div>

    );

};

export default EmpSignup;