import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';
import CartItem from '../CartItem/CartItem'
import {actionCartChange} from '../../ducks/reducer'
import {actionDeleteCart} from '../../ducks/reducer'
import './Cart.css'


class Cart extends Component {
    constructor(){
        super();

        this.deleteItem = this.deleteItem.bind( this )
    }
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

adjustQuantity(e, id){
    this.setState({ itemAmount: e.target.value }, () => {
        axios.put(`/product/cart/${id}`, {amount: +this.state.itemAmount}).then()
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
 
//create cartItem component to have its own state return the div below 

    render(){
        console.log(this.props.cart)
        let cart = Array.from(this.props.cart);
        let mappedCart = cart.map( (products, i) => {
            return (
                <CartItem 
                    image={products.img} 
                    name={products.name} 
                    price={products.price}
                    id={products.id}
                    key={i}
                    delete={this.deleteItem}
                    />
            );
        });
        let total = this.props.cart.reduce((a,b) => a + (b.price * b.amount), 0)
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
    return{
       cart: state.cart,
    }
}

export default connect(mapStateToProps, {actionCartChange, actionDeleteCart})(Cart)