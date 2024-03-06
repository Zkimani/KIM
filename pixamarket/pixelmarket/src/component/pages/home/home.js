import React from 'react';
import Header from '../../common/header/header/header';
import ProductCard from '../../product/productCard/ProductCard';


function Home() {
  // Dummy data for featured products

  return (
    <div className="container">
      <Header />
      <h1>Welcome to Pixel Market!</h1>
      <p>Discover amazing pixel art creations and bring them to life!</p>
      <div className="row">
        {/* Render each featured product using ProductCard component */}
        <ProductCard/>
      </div>
    </div>
  );
}

export default Home;
