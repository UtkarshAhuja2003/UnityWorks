import React from 'react';
import { Card, CardActionArea, CardContent, Typography, Button, Avatar } from '@mui/material';

const JobCard = ({ companyName, jobTitle, companyLogo, salary, status, jobLink }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Pending':
        return '#f39c12'; // Yellow color for pending status
      case 'Accepted':
        return '#43b18d'; // Green color for accepted status
      case 'Rejected':
        return '#e74c3c'; // Red color for rejected status
      default:
        return '#000000'; // Default color
    }
  };

  return (
    <div>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 350,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <Avatar
          alt={companyName}
          src={companyLogo}
          sx={{
            width: 90,
            height: 90,
            borderRadius: '50%',
            margin: '10px',
            alignSelf: 'flex-start',
          }}
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: '#43b18d' }}>
            {companyName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {jobTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Salary: {salary}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: getStatusColor() }}>
            Status: {status}
          </Typography>
          <Button
            href={jobLink}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#43b18d',
              color: 'white',
              '&:hover': {
                backgroundColor: '#8cd4bc',
              },
              marginTop: '10px',
            }}
          >
            Open Job Link
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobCard;
