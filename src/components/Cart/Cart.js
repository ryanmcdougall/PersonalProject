import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';
import CartItem from '../CartItem/CartItem'
import {actionCartChange} from '../../ducks/reducer'
import './Cart.css'


class Cart extends Component {
componentDidMount(){
    axios.get('/product/userCart').then( res => {
        this.props.actionCartChange(res.data)
    })
}

// onToken = (token) => {
//     fetch('/save-stripe-token', {
//       method: 'POST',
//       body: JSON.stringify(token),
//     }).then(response => {
//       response.json().then(data => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
//   }

onToken = (token, amount) => {
    token.card = void 0;
    console.log('token', token);
    console.log('token', amount);
    axios.post('http://localhost:3000/api/payment', { token, amount: amount + ".00"} ).then(response => {
        alert('we are in business')
    });
}


render(){
    console.log(this.props.cart)
    let cart = Array.from(this.props.cart);
        let mappedCart = cart.map( (product, i) => {
            return (
                <CartItem 
                    image={product.img} 
                    name={product.name} 
                    price={product.price}
                    id={product.id}
                    key={i}
                    amount={product.amount}
                />
            );
        });
        let total = this.props.cart.reduce((a,b) => a + (b.price * b.amount), 0)
        
        return(
            <div className="Cart">
                <br />
                {mappedCart}
                <br />
                ${total}
                <br />
                <StripeCheckout
                    token= {(t) => this.onToken(t, total)}
                    stripeKey="pk_test_3kGNKrGeKdxONcZOh7BJLhE0" 
                    amount={+(total + "00")}/>
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

export default connect(mapStateToProps, {actionCartChange})(Cart)