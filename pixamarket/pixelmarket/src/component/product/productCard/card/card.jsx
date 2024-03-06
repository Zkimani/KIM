import React from 'react'
import Data from '../../../../data/productData/ProductData'
import "./card.css"
export const Card = () => {
    return (
        <div className='container'>
            {
                Data.map(({id, name, title ,description,price, image}) => (
                    <div className='box' key={id}>
                        <div className='card'>
                            <div className='img'>
                                <img src={image} alt={`product image ${name}`}/>
                                <div className='badge'>New</div>

                            </div>
                            <div className='desc'>
                                <div className='card-title'>{name}</div>
                                <div className='card-text'>{description}</div>
                                <div className='card-price'>{price}</div>
                            </div>
                            <button className='btn' >add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}