import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';
import {actionCartChange} from '../../ducks/reducer'
import {actionDeleteCart} from '../../ducks/reducer'
import {getPrices} from '../../ducks/reducer'
import './Cart.css'


class Cart extends Component {
componentDidMount(){
    axios.get('/product/userCart').then( res => {
        this.props.actionCartChange(res.data)
    })
}

deleteItem(id){
    axios.delete(`/product/cart/${id}`).then( res => {
        this.props.actionDeleteCart(res.data)
    })
}

recieveTotal(){
    this.props.getPrices().then( 
        console.log(this.props.prices)
    )
}

onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 


    render(){
        let cart = Array.from(this.props.cart);
        let mappedCart = cart.map( (products, i) => {
            console.log("the prices:", this.props.prices)
            return (
                <div key={i}>
                <img src={products.img} alt='' width='100'/>
                <p>{products.name}</p>
                <p>${products.price} per day</p>
                <button onClick={() => this.deleteItem(products.id)}>X</button>
                </div>

            );
        });
        console.log("prices:", this.props.prices)
        return(
            <div className="Cart">
                {mappedCart}
                <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_3kGNKrGeKdxONcZOh7BJLhE0" />
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("cart:", state.cart)
    return{
       cart: state.cart,
       prices: state.prices
    }
}

export default connect(mapStateToProps, {actionCartChange, actionDeleteCart, getPrices})(Cart)