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
          title: "Auditor",
          salary: "20k",
          location: "Delhi",
          company: "Facebook",
          category:"ASD"

        },
        {
          id: 1,
          title: "Technician",
          salary: "60k",
          location: "Delhi",
          company: "Facebook",
          category:"ASD"

        },
        {
          id: 1,
          title: "Carpenter",
          salary: "30k",
          location: "Delhi",
          company: "Facebook",
          category:"ASD"

        },
        {
          id: 2,
          title: "Music Teacher",
          salary: "25k",
          location: "Delhi",
          company: "KV school",
          category:"Blindness"

        },
        {
          id: 2,
          title: "Voice Actor",
          salary: "60k",
          location: "Delhi",
          company: "T series",
          category:"Blindness"

        },
        {
          id: 2,
          title: "Call center operator",
          salary: "6k",
          location: "Delhi",
          company: "Facebook",
          category:"Blindness"

        },
        {
          id: 2,
          title: "Radio Host",
          salary: "115k",
          location: "Mumbai",
          company: "RedFM",
          category:"Blindness"

        },
        {
          id: 3,
          title: "Video Editor",
          salary: "60k",
          location: "Delhi",
          company: "T series",
          category:"Deaf"

        },
        {
          id: 3,
          title: "Sign Language Teacher",
          salary: "50k",
          location: "Delhi",
          company: "KV school",
          category:"Deaf"

        },
        {
          id: 3,
          title: "Graphic Designer",
          salary: "70k",
          location: "Delhi",
          company: "Uber",
          category:"Deaf"

        },
        {
          id: 3,
          title: "Writer",
          salary: "50k",
          location: "Delhi",
          company: "T series",
          category:"Deaf"

        },
        {
          id: 3,
          title: "Social Media Manager",
          salary: "60k",
          location: "Delhi",
          company: "Facebook",
          category:"Deaf"

        },
        {
          id: 3,
          title: "Artist",
          salary: "60k",
          location: "Banglore",
          company: "Pixels",
          category:"Dyslexia"

        },
        {
          id: 3,
          title: "Visual Artist",
          salary: "80k",
          location: "Mumbai",
          company: "Canva",
          category:"Dyslexia"

        },
        {
          id: 3,
          title: "Photographer",
          salary: "80k",
          location: "Chennai",
          company: "Adobe",
          category:"Dyslexia"

        },
        {
          id: 3,
          title: "Interior Designer",
          salary: "40k",
          location: "Delhi",
          company: "ArchTech",
          category:"Dyslexia"

        },
        {
          id: 2,
          title: "Captioner",
          salary: "19k",
          location: "Delhi",
          company: "Mr. Beast",
          category:"Mute"
        },
        {
          id: 2,
          title: "Sales Marketing",
          salary: "26k",
          location: "Delhi",
          company: "Vijay Sales",
          category:"Mute"
        },
        {
          id: 2,
          title: "Cab Driver",
          salary: "27k",
          location: "Delhi",
          company: "Ola",
          category:"Mute"
        },
        {
          id: 2,
          title: "Craftman",
          salary: "18k",
          location: "Delhi",
          company: "Agricultural Products Pvt. Ltd.",
          category:"Parkinson"
        },
        {
          id: 2,
          title: "Potter",
          salary: "15k",
          location: "Haryana",
          company: "Agricultural Products Pvt. Ltd.",
          category:"Parkinson"

        },
        {
          id: 2,
          title: "LED Tester",
          salary: "15k",
          location: "Delhi",
          company: "Havells",
          category:"Parkinson"

        },
        {
          id: 2,
          title: "Receptionist",
          salary: "25k",
          location: "Bengaluru",
          company: "City Healthcare",
          category:"Physical Disorder"
        },
        {
          id: 2,
          title: "Cashier",
          salary: "20k",
          location: "Chennai",
          company: "The Bakers",
          category:"Physical Disorder"
        },
        {
          id: 2,
          title: "Voice Artist",
          salary: "35k",
          location: "Mumbai",
          company: "T-Series",
          category:"Physical Disorder"
        },
      ];
  const [jobsList, setJobsList] = useState(jobData);

    let categories =[
      {name:"All",id:0},
        {name:"ASD",id:1},
        {name:"Blindness",id:2},
        {name:"Deaf",id:3},  
        {name:"Dyslexia",id:4},
        {name:"Mute",id:5},
        {name:"Parkinson",id:6},
        {name:"Physical Disorder",id:7}  
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
    {newJobsList = jobsList.filter(data => data.category == "ASD");}
    else if(currentCategory == 2)
    {newJobsList = jobsList.filter(data => data.category == "Blindness");}
    else if(currentCategory == 3)
    {newJobsList = jobsList.filter(data => data.category == "Deaf");}
    else if(currentCategory == 4)
    {newJobsList = jobsList.filter(data => data.category == "Dyslexia");}
    else if(currentCategory == 5)
    {newJobsList = jobsList.filter(data => data.category == "Mute");}
    else if(currentCategory == 6)
    {newJobsList = jobsList.filter(data => data.category == "Parkinson");}
    else if(currentCategory == 7)
    {newJobsList = jobsList.filter(data => data.category == "Physical Disorder");}
    else {newJobsList = jobsList.filter(data => data.category == categories[currentCategory].name);}
    
    


  return (
    <div className='font-defaultFont'>
      <Navbar />
      <div className=''></div>
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
                    salary={data.salary}
                />
              ))
            }
            </div>

        </div>
      </div>
    </div>
  )
}