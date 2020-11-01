import React from 'react';

const Products = (props) => {
    return <li>
        <h1>{props.product.name}</h1>
        <h4>${props.product.price}</h4>
        <button onClick={() => props.addToCart(props.product.id)}>Add To Cart</button>
    </li>
};

export default Products;