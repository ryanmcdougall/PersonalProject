import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';
import {actionCartChange} from '../../ducks/reducer'
import {actionDeleteCart} from '../../ducks/reducer'
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
            return (
                <div key={i}>
                <img src={products.img} alt='' width='100'/>
                <p>{products.name}</p>
                <p>${products.price} per day</p>
                <button onClick={() => this.deleteItem(products.id)}>X</button>
                </div>

            );
        });
        let total = this.props.cart.reduce((a,b) => a + b.price, 0)
        console.log(total)

        return(
            <div className="Cart">
                {mappedCart}
                ${total}
                <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_3kGNKrGeKdxONcZOh7BJLhE0" />
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("cart:", state.cart)
    console.log("total:", state.total)
    return{
       cart: state.cart,
       prices: state.prices,
       total: state.total
    }
}

export default connect(mapStateToProps, {actionCartChange, actionDeleteCart})(Cart)