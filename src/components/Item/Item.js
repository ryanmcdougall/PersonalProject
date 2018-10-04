import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import './Item.css'

export default class Item extends Component {
    constructor(){
        super();

        this.state = {
            products: []
        }
        this.pushToCart = this.pushToCart.bind(this)
    }

    componentDidMount(){
        axios.get(`/product/${this.props.match.params.item}`).then( res => {
            this.setState({
                products: res.data
            })
        })
    }

    pushToCart(id){
        axios.post("/product/cart", {productId: id}).then()
    }

    render(){
        console.log('props:', this.props)
        console.log('state:', this.state.products)
        let mapped = this.state.products.map( products => {
            return(
                <div key={products.id}>
                    <br />
                    <img className="productImg" src={products.img} alt='' width="200" />
                    <p className="productname">{products.name}</p>
                    {console.log(this.state.products)} 
                    <Icon style={{color: "lightgreen"}} className="button" onClick={() => this.pushToCart(products.id)}>add_shopping_cart</Icon>
                    <br />
                </div>
            )
        })
        return(
            <div className="Items">
                <Link to='/Products'>
                    <Icon style={{color: "white"}}className="button">keyboard_backspace
                    </Icon>
                <div className="backButton">Go Back</div>
                </Link>
                {mapped}
                <br />
                <Link to='/Cart'>
                <div className="backButton" style={{color: "white"}}>View your</div>
                <Icon style={{color: "white"}}className="button">shopping_cart
                    </Icon>
                </Link>
            </div>
        )
    }
} 