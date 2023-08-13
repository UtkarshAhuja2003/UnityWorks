import React from 'react'
import Navbar from '../../Components/Common/Navbar'
import Footer from '../../Components/Common/Footer'
import About from '../../Components/Home/About'

import Hero from '../../Components/Home/Hero'
import JobList from '../../Components/Home/JobList'
const Home = () => {
  return (
    <div>
      <Hero/>
      <JobList/>
      <About/>
    </div> 
  )
}

export default Home