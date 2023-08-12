import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  color: '#333',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  width: '80%', // Set the width to 80%
  margin: '0 auto', // Center the card horizontally
  marginTop: theme.spacing(3), // Add top margin
  marginBottom: theme.spacing(3), // Add bottom margin
}));

const Title = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '8px',
});

const Details = styled(Typography)({
  fontSize: '16px',
  marginBottom: '8px',
});

const ActionButton = styled(Button)({
  color: '#43b18d',
  borderColor: '#43b18d',
  marginRight: '8px',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#43b18d',
    color: 'white',
  },
});

const JobCard = ({ title, salary, applicantsLink, jobLink }) => {
  return (
    <StyledCard>
      <CardContent>
        <Title>{title}</Title>
        <Details>Salary: {salary}</Details>
        <ActionButton href={applicantsLink} target="_blank" rel="noopener noreferrer">
          View Applicants
        </ActionButton>
        <ActionButton href={jobLink} target="_blank" rel="noopener noreferrer">
          View Job
        </ActionButton>
      </CardContent>
    </StyledCard>
  );
};

export default JobCard;
