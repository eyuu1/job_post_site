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
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<SharedNav />}>
    //       <Route index element={<Home />} />
    //       <Route path="jobs" element={<Jobs />} />
    //       <Route path="jobs/:jobId" element={<Detail />} />
    //       <Route path="aboutus" element={<About />} />
    //       <Route path="contactus" element={<Contact />} />
    //       <Route path="*" element={<PageNotFound />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <Signup/>
  )
}

export default App


