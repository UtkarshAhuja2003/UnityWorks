import React from 'react'
import Card from "../../../pages/Organisation/jobsPosted/card"; 


const index = () => {
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
  
          }
        ];
  return (
    <div>
      <h1 className=' text-center mt-28 text-4xl'>Recent<span className='font-[700]'> Jobs</span></h1>
      {jobData.map(job => (
        <Card
          key={job.id}
          title={job.title}
          salary={job.salary}
          applicantsLink={job.applicantsLink}
          jobLink={job.jobLink}
          location = {job.location}
          company={job.company}
        />
      ))}
    </div>
  )
}

export default index
