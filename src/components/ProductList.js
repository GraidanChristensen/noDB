import React, { Component} from 'react';
import axios from 'axios';
import Products from './Products';

class ProductList extends Component{
    constructor(){
        super();

        this.state={
            displayProducts: []
        }
    }

    componentDidMount(){
        axios.get('/api/products')
        .then(res => {
            this.setState({
                displayProducts: res.data
            })
        })
    }


    render(){
    const mappedProducts=this.state.displayProducts.map(product => {return <Products key={product.id} product={product} addToCart={this.props.addToCart}/>});
        return(
             <ul className="products">{mappedProducts}</ul>
        )
    }

}

export default ProductList;