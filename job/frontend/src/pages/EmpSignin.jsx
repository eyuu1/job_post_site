import React from 'react'
import { useState } from 'react';

const EmpSignin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  let employee = { "email": email, "password": password }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // console.log(employee)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white ">

        <h1 className='flex justify-center mt-2 font-sans font-semibold'>Sign in</h1>
        <form onSubmit={handleSubmit} className="shadow-md rounded px-8 py-6">



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



          <div className="flex flex-col justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>




            <p className=' text-xs text-end mt-2'>Don't have an account yet?<a
              className=" font-bold  text-blue-500 hover:text-blue-800"
              href="#"
            >
              create account here.
            </a> </p>


          </div>
        </form>
      </div>
    </div>

  );
}

export default EmpSignin