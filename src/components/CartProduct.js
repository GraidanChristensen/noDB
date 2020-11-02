import React, {Component} from 'react';


//TODO MAKE EDIT SIZE BUTTON 
//LEFT OFF AT PASSING EDITSIZE FUNCTION IN AS A PROP FROM CART.JS
//HAVEN'T TOUCHED THIS FILE


class CartProduct extends Component{
    constructor(props){
        super(props);

        this.state ={
            quantityInput: props.product.quantity,
            sizeInput: '',
            toggleEdit: false
        }
    }

    handleChange = (e) =>{
        this.setState({
            quantityInput: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState({
            toggleEdit: !this.state.toggleEdit
        })
    }

    render(){
        const {product} = this.props;
        return (
          <li className="cartProduct">
              <h1>{product.name}</h1>

              {this.state.toggleEdit ? (
                <input
                    value={this.state.quantityInput}
                    onChange={this.handleChange}
                />
              ): <h4>Quantity: {product.quantity}</h4>}

                {this.state.toggleEdit ? 
                <div><button 
                    onClick={() => {
                        this.props.editQuantity(this.props.index, this.state.quantityInput)
                        this.toggleEdit();
                    }}>
                    Save
                </button>
                <button onClick={() => {
                    this.setState({quantityInput: product.quantity})
                    this.toggleEdit();
                }}>
                    Cancel
                </button>
                </div> 
                : null}

              {/* <h4>Size: {product.size}</h4> */}
              <h4>{product.price}</h4>
              <button onClick ={this.toggleEdit}>Edit</button>
              <button onClick={() => this.props.removeFromCart(this.props.index)}>Remove</button>
          </li>
        )
    }
}

export default CartProduct;