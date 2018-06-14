import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
        axios.post("/product/cart").then()
    }

    render(){
        console.log('props:', this.props)
        console.log('state:', this.state.products)
        let mapped = this.state.products.map( products => {
            return(
                <div key={products.id}>
                    <img src={products.img} alt='' width="200" />
                    <p>{products.name}</p>
                    <button onClick={() => this.pushToCart(products.id)}>Add item to Cart</button>
                </div>
            )
        })
        return(
            <div>
                <p>List of: {this.props.match.params.item} </p>
                {mapped}
                <br />
                <Link to='/Products'>
                <button>Back to Products</button>
                </Link>
            </div>
        )
    }
} 