import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Recent from './components/recentJobs/Recent'
import JobCategory from './components/jobCategory/JobCategory'
import Footer from './components/footer'



const App = () => {


  return (

    <>
      <Nav/>
    
      <Header/>

      <Recent/>

      <JobCategory/>

      <Footer/>
    </>

  )
}

export default App