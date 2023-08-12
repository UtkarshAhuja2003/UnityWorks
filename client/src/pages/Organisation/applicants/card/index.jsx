import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';

const SmallCard = ({ name, email }) => {
  return (
    <Card sx={{ maxWidth: 200, marginBottom: 6, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {email}
        </Typography>
        <Button
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            backgroundColor: '#43b18d',
            color: '#fff',
            marginTop: 2,
            '&:hover': {
              backgroundColor: '#8cd4bc',
            },
          }}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
