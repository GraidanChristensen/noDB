import React from 'react';
import CartProduct from './CartProduct';

const Cart = (props) => {
    // map through cart array for each object in array pass it as a prop to CartProduct
    const cartProducts = props.cart.map((product, index) => {
        return <CartProduct 
        key={`${product.id}:${index}`} 
        product={product} 
        index={index}
        removeFromCart={props.removeFromCart}
        editQuantity={props.editQuantity}
        editSize={props.editSize}
        />
    });
    return (
        <ul className="cartList">{cartProducts}</ul>  //return new array of CartProducts
    )
}

export default Cart;