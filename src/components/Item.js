import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Item extends Component {
    constructor(){
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get(`/product/${this.props.match.params.item}`).then( res => {
            this.setState({
                products: res.data
            })
        })
    }

    render(){
        console.log('props:', this.props)
        console.log('state:', this.state.products)
        let mapped = this.state.products.map( products => {
            return(
                <div key={products.id}>
                    <img src={products.img} alt='' width="200" />
                    <p>{products.name}</p>
                    
                </div>
            )
        })
        return(
            <div>
                <p>List of: {this.props.match.params.item} </p>
                {mapped}
                <Link to='/Products'>
                <button>Add to Cart</button>
                </Link>
            </div>
        )
    }
} 