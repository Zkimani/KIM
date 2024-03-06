import React from 'react';
import MainSection from './mainSection';
const HomePage = () => {
  // Example product data
  const products = [
    {
      name: 'Product 1',
      image: 'product1.jpg',
      description: 'Description of product 1',
      price: 19.99,
    },
    {
      name: 'Product 2',
      image: 'product2.jpg',
      description: 'Description of product 2',
      price: 24.99,
    },
    // Add more products as needed
  ];

  return (
    <div>
      <MainSection title="Featured Products" products={products} />
    </div>
  );
};

export default HomePage;
