import React, { Component} from 'react';
import '../App.css';

class Header extends Component {
    constructor(){
        super();

        this.state = {
            toggle: false
        }
    }

    handleClick = () => {
        this.setState({
            toggle: !this.state.toggle
        })

    }

    render(){
        return(
            <div>
                <header>
                    <h1>Store</h1>
                    <img onClick={this.handleClick} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfR23dO6uwt7vkLOYSiroyqjfGcc6x3Cv4pg&usqp=CAU" alt="Shopping bag"/>
                </header>

                <div className={`dropDown ${this.state.toggle ? "showDropDown" : ""}`}>
                    <h4>Amount of Products: {this.props.productTotal}</h4>
                    <h4>Total Price: ${this.props.priceTotal.toFixed(2)}</h4>
                </div>
            </div>
        )
    }   
}

export default Header;
