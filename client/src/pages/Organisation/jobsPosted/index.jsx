import React from 'react';
import Card from "./card"; // Make sure to adjust the import path based on your project structure

const Jobs = () => {
  const jobData = [
    {
      id: 1,
      title: "Job Title 1",
      salary: "50k",
      applicantsLink: "#",
      jobLink: "#",
    },
    {
      id: 2,
      title: "Job Title 2",
      salary: "60k",
      applicantsLink: "#",
      jobLink: "#",
    },{
      id: 1,
      title: "Job Title 1",
      salary: "50k",
      applicantsLink: "#",
      jobLink: "#",
    },
    {
      id: 2,
      title: "Job Title 2",
      salary: "60k",
      applicantsLink: "#",
      jobLink: "#",
    },
    {
      id: 1,
      title: "Job Title 1",
      salary: "50k",
      applicantsLink: "#",
      jobLink: "#",
    },
    {
      id: 2,
      title: "Job Title 2",
      salary: "60k",
      applicantsLink: "#",
      jobLink: "#",
    },
    // Add more job objects as needed
  ];
  return (
    <div>
      {jobData.map(job => (
        <Card
          key={job.id}
          title={job.title}
          salary={job.salary}
          applicantsLink={job.applicantsLink}
          jobLink={job.jobLink}
        />
      ))}
    </div>
  );
}

export default Jobs;
