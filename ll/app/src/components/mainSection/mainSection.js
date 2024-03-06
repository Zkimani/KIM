import React from 'react';
import ProductCard from './productCard/ProductCard';
//import proptypes
import PropTypes from 'prop-types';
import './mainSection.css'

const MainSection = ({ title, products }) => {
  return (
    <div className="main-section">
      <h2>{title}</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} alt={product.name} />
            <ProductCard/>
            <span>${product.price}</span>
            <span>{product.rating}</span>
            <button>Add to Cart</button>
          </div>
        ))}

      </div>
    </div>
  );
  
};
MainSection.defaultProps = {
      rating:'990'
  }
MainSection.propTypes = {
    // Define prop types here type of rating
    title: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })).isRequired    
    }
export default MainSection;
