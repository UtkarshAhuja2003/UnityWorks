import React from 'react'
import Navbar from '../../Components/Common/Navbar'
import Footer from '../../Components/Common/Footer'

import Hero from '../../Components/Home/Hero'
import JobList from '../../Components/Home/JobList'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobList/>
      <Footer/>
    </div> 
  )
}

export default Home