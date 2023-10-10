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
import EmpSignup from './pages/EmpSignup';
import EmpSignin from './pages/EmpSignin';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import JobDescriptionPopup from './pages/Admin/JobDescriptionPopup';


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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="emp_signup" element={<EmpSignup />} />
          <Route path="emp_signin" element={<EmpSignin />} />
          <Route path="descriptionPopup" element={<JobDescriptionPopup />} />
        </Route>
      </Routes>
    </BrowserRouter> 

 
  )
}

export default App


