import React from 'react';
import Card from './card';

const Applicants = () => {
  // Sample data for multiple cards
  const cardData = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Alice Johnson', email: 'alice@example.com' },
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Alice Johnson', email: 'alice@example.com' },
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' }
    // ... add more card data
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16,marginLeft:"70px"}}>
      {cardData.map((card, index) => (
        <Card key={index} name={card.name} email={card.email} />
      ))}
    </div>
  );
};

export default Applicants;
