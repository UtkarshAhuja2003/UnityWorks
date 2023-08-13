import React from 'react';
// import "./app.css"
import { Route, Routes } from 'react-router-dom';
import Home from "../src/pages/home"
import OrgLogin from "./pages/Organisation/orgLogin"
import CandLogin from "../src/pages/Candidate/candidateLogin"
import CandRegister from "../src/pages/Candidate/candidateSignup"
import OrgRegister from "../src/pages/Organisation/orgSignup"
import PostJob from '../src/pages/Organisation/postJob';
import OrgProfile from '../src/pages/Organisation/profile';
import CandProfile from '../src/pages/Candidate/profile';
import CandApplications from "../src/pages/Candidate/applications"
import JobsPosted from '../src/pages/Organisation/jobsPosted';
import Applicants from '../src/pages/Organisation/applicants';
import Jobs from '../src/pages/Jobs';
import Navbar from '../src/Components/Common/Navbar';
import Footer from '../src/Components/Common/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-32'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/oganisation/login' element={<OrgLogin/>} />
        <Route path='/candidate/login' element={<CandLogin/>} />
        <Route path='/candidate/register' element={<CandRegister/>} />
        <Route path='/organisation/register' element={<OrgRegister/>} />
        <Route path='/organisation/postjob' element={<PostJob/>} />
        <Route path='/organisation/dashboard' element={<OrgProfile/>} /> 
        <Route path='/candidate/dashboard' element={<CandProfile/>} /> 
        <Route path='/candidate/applications' element={<CandApplications/>} />
        <Route path='/organisation/jobs' element={<JobsPosted/>} />
        <Route path='/organisation/applicants' element={<Applicants/>} />
        <Route path='/jobs' element={<Jobs/>} />
      </Routes>
        </div>      
      <Footer/>
    </div>
  );
};

export default App;

