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
                    <button>Pumps</button>
                    </Link>
                    <Link to='/Item/hose'>
                    <button>Hose</button>
                    </Link>
                    <Link to='Item/attachments'>
                    <button>Attachments</button>
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