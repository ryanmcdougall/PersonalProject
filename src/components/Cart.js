import React, { Component } from 'react'

class Cart extends Component {
    constructor(){
        super();

        this.state = {
            cartItems: []
        }
    }

    componentDidMount(){
        
    }

    render(){
        console.log(this.state.cartItems)
        return(
            <div>
                cart
            </div>
        )
    }
}

export default Cart