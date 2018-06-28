import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import './Products.css'
import '../NavBar/NavBar.css'

export default class Products extends Component{
    render(){
        return(
            <div className="products">
                <br />
                  Products
                  
                <div>
                    <Link to='/Item/pumps'>
                    <Icon style={{color: "white", fontSize: "40px"}}>rv_hookup</Icon>
                    </Link>
                    <Link to='/Item/hose'>
                    <Icon style={{color: "white", fontSize: "40px"}}>all_inclusive</Icon>
                    </Link>
                    <Link to='Item/attachments'>
                    <Icon style={{color: "white", fontSize: '40px'}}>merge_type</Icon>
                    </Link>
                    <div className="datTextBox">
                        Create a system that is right for you. Choose from these 3 categories shown above to build a system that fits your specific need.
                    </div>
                    <br />
                    <br />
                    <br />
                    <Link to='/Cart'>
                <div className="datButton">View your</div>
                <Icon style={{color: "white"}}className="button">shopping_cart
                    </Icon>
                </Link>
                </div>
            </div>
        )
    }

}