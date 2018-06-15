import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {actionCartChange} from '../ducks/reducer'

class Cart extends Component {
componentDidMount(){
    axios.get('/product/cart').then( res => {
        this.props.actionCartChange(res.data)
    })
}



    render(){
        console.log(this.props.cart)
        return(
            <div>
                {this.props.cart}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        state
    }
}

export default connect(mapStateToProps, {actionCartChange})(Cart)