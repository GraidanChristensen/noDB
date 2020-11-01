import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart'

class App extends Component{
  constructor(){
    super();

    this.state = {
      cart: []
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
    axios.post(`/api/cart/${id}`)
    .then(res => {
      this.setState({
        cart: res.data
      });
    }).catch(err => console.log(err));
  }

  //remove button on CartProduct removes that product from cart array
  removeFromCart = (index) => {
    axios.delete(`/api/cart/${index}`)
    .then(res => {
      this.setState({
        cart: res.data
      })
    }).catch(err => console.log(err));
  }

  editQuantity = (index, quantity) => {
    axios.put( `/api/cart/${index}`, {quantity})
    .then(res => {
      this.setState({
        cart: res.data
      })
    }).catch(err => console.log(err));
  }

  editSize = (index, size) => {
    axios.put(`/api/cart/size${index}`,{size})
    .then(res => {
      this.setState({
        cart: res.data
      })
    }).catch(err => console.log(err));
  }
  
  render(){
    return (
      <div>
        <Header/>
        <main className='mainContent'>
          <ProductList addToCart={this.addToCart}/>
          <Cart className="cart" cart={this.state.cart} removeFromCart={this.removeFromCart} editQuantity={this.editQuantity} editSize={this.editSize}/>
        </main>
      </div> 
    );
  }
}

export default App;
