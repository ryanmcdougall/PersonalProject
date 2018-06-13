import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Products extends Component{
    render(){
        return(
            <div>
                Products
                <br />
                <div>
                    <Link to='/Item/pumps'>
                    Pumps
                    </Link>
                    <Link to='/Item/hose'>
                    Hose
                    </Link>
                    <Link to='Item/attachments'>
                    Attachments
                    </Link>
                    <br />
                    <Link to='/Cart'>
                    <button>Proceed to Check Out</button>
                    </Link>
                </div>
            </div>
        )
    }

}