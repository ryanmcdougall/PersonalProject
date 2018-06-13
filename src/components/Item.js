import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Item extends Component {
    render(){
        console.log('props:', this.props)
        return(
            <div>
                <p>List of: {this.props.match.params.item} </p>
                <Link to='/Products'>
                <button>Add to Cart</button>
                </Link>
            </div>
        )
    }
} 