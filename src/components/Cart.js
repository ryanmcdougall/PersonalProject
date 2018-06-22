import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {actionCartChange} from '../ducks/reducer'
import {actionDeleteCart} from '../ducks/reducer'


class Cart extends Component {
componentDidMount(){
    axios.get('/product/userCart').then( res => {
        this.props.actionCartChange(res.data)
    })
}

    render(){
        let mappedCart = this.props.cart.map( (products, i) => {
            console.log("the cart:", this.props.cart)
            return (
                <div key={i}>
                <img src={products.img} alt='' width='100'/>
                <p>{products.name}</p>
                <p>${products.price} per day</p>
                <button onClick={() => this.props.actionDeleteCart(products.id)}>X</button>
                </div>

            );
        });
        return(
            <div>
                {mappedCart}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
       cart: state.cart
    }
}

export default connect(mapStateToProps, {actionCartChange, actionDeleteCart})(Cart)