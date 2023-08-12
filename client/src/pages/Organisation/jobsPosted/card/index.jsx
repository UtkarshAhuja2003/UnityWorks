import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import {CiLocationOn} from 'react-icons/ci'
import {BsStack} from 'react-icons/bs'

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  color: '#333',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  width: '80%', // Set the width to 80%
  margin: '0 auto', // Center the card horizontally
  marginTop: theme.spacing(3), // Add top margin
  // marginBottom: theme.spacing(3), // Add bottom margin
}));

const Title = styled(Typography)({
  fontSize: '25px',
  // fontWeight: 'bold',
  marginBottom: '8px',
});

const Details = styled(Typography)({
  fontSize: '20px',
  marginBottom: '8px',
});


const JobCard = ({ title, salary, applicantsLink, location, company }) => {
  return (
    <StyledCard>
      <CardContent className='ml-6'>
        <Title>{title}</Title>
        <Details >Salary: {salary}</Details>
        <div className="md:flex mt-3 justify-between w-[90%] ">
          <div className='flex text-gray-500 text-xl mt-1'>
          <BsStack className='mt-1'/>
            <h1 className='ml-1'>{company}</h1>
            <CiLocationOn className='mt-1 ml-4'/>
            <h1 className='ml-1'>{location}</h1>
          </div>  
            <button href={applicantsLink}  className="flex border border-1 ease-in-out duration-300 border-[#43b18d] hover:text-[#43b18d] items-center py-2 px-4 bg-[#43b18d] hover:bg-white text-white rounded">
              Apply 
            </button>
            </div>
      </CardContent>
    </StyledCard>
  );
};

export default JobCard;