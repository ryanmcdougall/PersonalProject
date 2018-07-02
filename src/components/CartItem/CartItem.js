import React, { Component } from 'react'
import axios from 'axios'
import Icon from '@material-ui/core/Icon'
import { connect } from 'react-redux'
import { actionCartChange } from '../../ducks/reducer'
import "./CartItem.css"


class CartItem extends Component {
    constructor(){
        super();

        this.state = {
            amount: 1
        }
        this.adjustQuantity = this.adjustQuantity.bind(this)
        this.deleteItem = this.deleteItem.bind( this )

    }
    componentDidMount(){
        this.setState({amount: this.props.amount});
    }

    adjustQuantity(e){
        this.setState({amount: +e.target.value})
        axios.put(`/product/cart/${this.props.id}`, {amount: +this.state.amount + 1}).then( res => {
            this.props.actionCartChange( res.data );
        })
    }

    deleteItem(id){
        axios.delete(`/product/cart/${id}`).then( res => {
            this.props.actionCartChange(res.data)
        })
    }

    render(){
        console.log("amount:", this.state.amount)
        return(
            <div key={this.props.i}>
            <br/>
                <img className="cartImg" src={this.props.image} alt='' width='100'/>
                <p>{this.props.name}</p>
                <p>${this.props.price} per day</p>
                <input 
                    style={{maxWidth: 35}}
                    type="number" 
                    value={this.state.amount} 
                    onChange={(e) => this.adjustQuantity(e)}/>
                <Icon className="deleteButton" onClick={() => {
                        this.deleteItem(this.props.id)
                    }
                } 
                    style={{color: "red", fontSize: ""}}
                >delete_forever</Icon>
                </div>
        )
    }
}

function mapStateToProps(state){
    return{
       cart: state.cart
    }
}


export default connect(mapStateToProps, { actionCartChange, })(CartItem)