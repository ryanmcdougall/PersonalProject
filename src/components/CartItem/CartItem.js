import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { actionCartChange } from '../../ducks/reducer'


class CartItem extends Component {
    constructor(){
        super();

        this.state = {
            amount: 1
        }
        this.adjustQuantity = this.adjustQuantity.bind(this)
    }
    componentDidMount(){
        this.setState({amount: this.props.amount});

    }

    adjustQuantity(e){
        this.setState({amount: +e.target.value})
        axios.put(`/product/cart/${this.props.id}`, {amount: this.state.amount}).then( res => {
            this.props.actionCartChange( res.data )
        })
    }

    render(){
        console.log("amount:", this.state.amount)
        return(
            <div key={this.props.i}>
                <img src={this.props.image} alt='' width='100'/>
                <p>{this.props.name}</p>
                <p>${this.props.price} per day</p>
                <input 
                    type="number" 
                    value={this.state.amount} 
                    onChange={(e) => this.adjustQuantity(e)}/>
                <button onClick={() => {
                        this.props.delete(this.props.id)
                    }
                }>X</button>
                </div>
        )
    }
}

function mapStateToProps(state){
    return{
       cart: state.cart
    }
}


export default connect(mapStateToProps, { actionCartChange })(CartItem)