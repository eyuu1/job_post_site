import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Jobs from './pages/jobs'
import { Routes, Route} from 'react-router-dom'


const App = () => {


  return (

    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='jobs' element={<Jobs/>}  />     
    </Routes>
    </>

  )
}

export default App