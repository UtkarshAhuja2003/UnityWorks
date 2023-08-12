import React from 'react'
import Navbar from "../../Components/Common/Navbar";
import Footer from '../../Components/Common/Footer';
import Card from '../Organisation/jobsPosted/card';
import { useState , useEffect} from 'react';
import {URL} from "../../App"
import SearchBar from '../../Components/Jobs/SearchBar';

export default function Index() {

    const jobData = [
        {
          id: 1,
          title: "Job Title 1",
          salary: "50k",
          applicantsLink: "#",
          jobLink: "#",
          location: "Delhi",
          company: "Facebook",
        },
        {
          id: 2,
          title: "Job Title 2",
          salary: "60k",
          applicantsLink: "#",
          jobLink: "#",
          location: "Delhi",
          company: "Facebook",
        },{
          id: 1,
          title: "Job Title 1",
          salary: "50k",
          applicantsLink: "#",
          jobLink: "#",
          location: "Delhi",
          company: "Facebook",
        },
        {
          id: 2,
          title: "Job Title 2",
          salary: "60k",
          applicantsLink: "#",
          jobLink: "#",
          location: "Delhi",
          company: "Facebook",
        },
        {
          id: 1,
          title: "Job Title 1",
          salary: "50k",
          applicantsLink: "#",
          jobLink: "#",
          location: "Delhi",
          company: "Facebook",
        },
        {
          id: 2,
          title: "Job Title 2",
          salary: "60k",
          applicantsLink: "#",
          jobLink: "#",
          location: "Delhi",
          company: "Facebook",

        },
        // Add more job objects as needed
      ];
  const [jobsList, setJobsList] = useState(jobData);

    let categories =[
        {name:"Latest",id:0},
        {name:"Full Time",id:1},
        {name:"Part Time",id:2},
      ];

    const [currentCategory, change] = useState(0);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchSubmit = (event) => {
      console.log(searchKey);
      event.preventDefault();
      handleSearchResults();
    }
    var filteredEventsList;
    var newJobsList;
    
  // blogs by category
    const handleSearchResults = () =>{
      change(-1);
    }

    const handleCategoryClick = (e) => {
      change(e.target.id);
    }

    let correctedCategory;
    if(currentCategory == -1)
    {
      correctedCategory = 0;
    }
    else
    {
      correctedCategory = currentCategory;
    }


    function cat(category,i) {
      if (correctedCategory == category.id) {
        return <button key={i} id={category.id} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#B1DDC0] border-l-[5px] w-full text-left border-[#43b18d]'>{category.name}</button>
      }
      return <button key={i} id={category.id} onClick={(handleCategoryClick)} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#D5EBE4] border-l-[5px] w-full text-left border-[#D5EBE4] hover:border-[#43b18d]'>{category.name}</button>
    }

    
    if(currentCategory == -1)
    {
      newJobsList = jobsList.filter((data) => 
      data.title.toLowerCase().includes(searchKey.toLowerCase().trim()));
      console.log(searchKey + " old");    
    }
    else if(currentCategory == 0)
    {newJobsList = jobsList;}
    else if(currentCategory == 1)
    {newJobsList = jobsList.filter(data => data.status == "Past");}
    else if(currentCategory == 2)
    {newJobsList = jobsList.filter(data => data.status == "Upcoming");}
    else {newJobsList = jobsList.filter(data => data.category == categories[currentCategory].name);}
    
    


  return (
    <div className='font-defaultFont'>
      <Navbar />
      <div className='h-[75px] md:h-[140px]'></div>
      <div className='w-[100%] md:w-[80%] mx-auto'>
        <div className='md:flex'>
            <div className='w-[80%] md:w-[27%] mx-auto'>
                <div>
                <SearchBar
                  value={searchKey} 
                  formSubmit={handleSearchSubmit}
                  handleSearchKey ={e=>setSearchKey(e.target.value)}
                />
                <div className='mt-6'>
                  <h1 className='text-2xl text-[#064663] '>Jobs Categories</h1>
                  <div className='w-32 h-[2px] ml-8 mt-2 rounded bg-[#064663]'></div>

                </div>

                <div className='pt-4'>
                    {
                        categories.map((category,i)=>(
                          cat(category,i)
                        ))
                    }
                </div>
                </div>
            </div>
            <div className='w-[90%] md:w-[73%] p-0 md:p-4 mx-auto'>
            {
              newJobsList.map((data) => (
                <Card
                    id = {data.id}
                    title = {data.title}
                    applicantsLink={data.applicantsLink}
                    jobLinks ={data.jobLinks}
                    location={data.location}
                    company = {data.company}
                />
              ))
            }
            </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}