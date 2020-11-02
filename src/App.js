import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

class App extends Component{
  constructor(){
    super();

    this.state = {
      cart: [],
      cartToggle: false,
      productTotal: 0,
      priceTotal: 0
    }
  }

  componentDidMount(){
    axios.get('/api/cart')
    .then(res => {
      this.setState({
        cart: res.data
      });
    }).catch(err => console.log(err));
  }

  //button in Product.js that passes the id parameter in 
  //then that product is added to cart array
  addToCart = (id) => {
    axios.get(`/api/products/${id}`)
    .then (res => {
      this.setState({
        priceTotal: (parseFloat(res.data.price) + this.state.priceTotal),
        productTotal: this.state.productTotal+=1
      })
    })

    axios.post(`/api/cart/${id}`)
    .then(res => {
      this.setState({
        cart: res.data
      });
    }).catch(err => console.log(err));
  }

  //remove button on CartProduct removes that product from cart array
  removeFromCart = (index) => {
    this.setState({
      productTotal: this.state.productTotal - this.state.cart[index].quantity,
      priceTotal: (this.state.priceTotal - (parseFloat(this.state.cart[index].price) * this.state.cart[index].quantity))

    })

    axios.delete(`/api/cart/${index}`)
    .then(res => {
      this.setState({
        cart: res.data
      })
    }).catch(err => console.log(err));
  }

  editQuantity = (index, quantity) => {
    const priceChange = parseFloat((this.state.cart[index].price) * (quantity - this.state.cart[index].quantity));
    const quantityChange = quantity - (this.state.cart[index].quantity)
    this.setState({
        priceTotal: this.state.priceTotal + priceChange,
        productTotal: this.state.productTotal + quantityChange
    })

    axios.put( `/api/cart/${index}`, {quantity})
    .then(res => {
      this.setState({
        cart: res.data
      })
    }).catch(err => console.log(err));
  }

  
  render(){
    return (
      <div>
        <Header priceTotal={this.state.priceTotal} productTotal={this.state.productTotal}/>
        <main className='mainContent'>
        <div>
            <h1 className="productTitle">Products</h1>
            <ProductList addToCart={this.addToCart}/>
        </div>
          <Cart className="cart" cart={this.state.cart} removeFromCart={this.removeFromCart} editQuantity={this.editQuantity} editSize={this.editSize} cartToggle={this.state.cartToggle}/>
        </main>
      </div> 
    );
  }
}

export default App;
