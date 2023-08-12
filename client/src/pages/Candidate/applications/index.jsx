import React from 'react';
import Grid from '@mui/material/Grid';
import Card from './card';

const Applications = () => {
  const applicationData = [
    {
        id: 1,
        companyName: 'Company A',
        jobTitle: 'Frontend Developer',
        companyLogo: 'companyA-logo-url',
        salary: '$60,000',
        status: 'Pending',
        jobLink: 'job-link-url',
      },
      {
        id: 2,
        companyName: 'Company B',
        jobTitle: 'Backend Developer',
        companyLogo: 'companyB-logo-url',
        salary: '$70,000',
        status: 'Approved',
        jobLink: 'job-link-url',
      },
      {
        id: 1,
        companyName: 'Company A',
        jobTitle: 'Frontend Developer',
        companyLogo: 'companyA-logo-url',
        salary: '$60,000',
        status: 'Pending',
        jobLink: 'job-link-url',
      },
      {
        id: 2,
        companyName: 'Company B',
        jobTitle: 'Backend Developer',
        companyLogo: 'companyB-logo-url',
        salary: '$70,000',
        status: 'Approved',
        jobLink: 'job-link-url',
      },{
        id: 1,
        companyName: 'Company A',
        jobTitle: 'Frontend Developer',
        companyLogo: 'companyA-logo-url',
        salary: '$60,000',
        status: 'Pending',
        jobLink: 'job-link-url',
      },
      {
        id: 2,
        companyName: 'Company B',
        jobTitle: 'Backend Developer',
        companyLogo: 'companyB-logo-url',
        salary: '$70,000',
        status: 'Approved',
        jobLink: 'job-link-url',
      },
    // Sample data as before...
  ];
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: "10vh" }}>
        <Grid container spacing={4}>
          {applicationData.map((application) => (
            <Grid item key={application.id} xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                companyName={application.companyName}
                jobTitle={application.jobTitle}
                companyLogo={application.companyLogo}
                salary={application.salary}
                status={application.status}
                jobLink={application.jobLink}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
  
  export default Applications;
  
