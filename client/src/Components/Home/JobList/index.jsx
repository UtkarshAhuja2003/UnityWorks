import React from 'react'
import Card from "../../../pages/Organisation/jobsPosted/card"; 


const index = () => {
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
