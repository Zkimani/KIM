import React, { Component } from 'react';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Example Product',
            price: '$0.00',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        };
    }

    handleClick = () => {
        alert('Product clicked!');
    }

    render() {
        const { name, price, description } = this.state;

        return (
            <div className="product-card" onClick={this.handleClick}>
                <h2>{name}</h2>
                <p><strong>Price:</strong> {price}</p>
                <p><strong>Description:</strong> {description}</p>
            </div>
        );
    }
}

export default ProductCard;