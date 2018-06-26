import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'


class CartItem extends Component {

    adjustQuantity(e, id){
        axios.put(`/product/cart/${id}`, {amount: +e.target.value}).then()

    }

    render(){
        console.log("cart as props:", this.props.cart)
        return(
            <div key={this.props.i}>
                <img src={this.props.image} alt='' width='100'/>
                <p>{this.props.name}</p>
                <p>${this.props.price} per day</p>
                <input type="number" value={this.props.cart.amount} onChange={(e) => this.adjustQuantity(e, this.props.id)}/>
                <button onClick={() => this.props.delete(this.props.id)}>X</button>
                </div>
        )
    }
}

function mapStateToProps(state){
    return{
       cart: state.cart
    }
}


export default connect(mapStateToProps)(CartItem)