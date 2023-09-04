import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import SharedNav from './pages/SharedNav'
import Home from './pages/Home'
import Jobs from './pages/jobs'
import About from './pages/About'
import Contact from './pages/Contact'
import Detail from "./pages/Detail"
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateJob from './pages/createJob';
import Signin from './pages/Signin';
import Signup from './pages/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedNav />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:jobId" element={<Detail />} />
          <Route path="aboutus" element={<About />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="createJob" element={<CreateJob />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter> 

 
  )
}

export default App


