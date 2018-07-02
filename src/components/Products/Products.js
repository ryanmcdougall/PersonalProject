import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import Pic from './photo 1.JPG'
import './Products.css'
import '../NavBar/NavBar.css'

export default class Products extends Component{
    render(){
        return(
            <div className="products">
                  Products
                  <br />
                  <br />
                <div className="content">
                    <Link to='/Item/pumps'>
                    <div className="Pumps">
                    <Icon className="cartButton" style={{color: "Black", fontSize: "40px"}}>rv_hookup</Icon>
                    <p className="tag">Pumps</p>
                    </div>
                    </Link>
                    <Link to='Item/attachments'>
                    <div className="Attachments">
                    <Icon className="cartButton"style={{color: "black", fontSize: '40px'}}>merge_type</Icon>
                    <p className="tag">Attachments</p>
                    </div>
                    </Link>
                    <Link to='/Item/hose'>
                    <div className="Hose">
                    <Icon className="cartButton"style={{color: "black", fontSize: "40px"}}>all_inclusive</Icon>
                    <p className="tag">Hose</p>
                    </div>
                    </Link>
                    </div>
                    <br />
                    <hr />
                    <div className="TextBox">
                        Create a system that is right for YOU. <br /><br />
                        Choose from these 3 categories (as shown above) to build a system that fits your specific need.
                    </div>
                    <br />
                    <br />
                    <Link to='/Cart'>
                <div className="Button">View your</div>
                <Icon style={{color: "white"}} className="button">shopping_cart
                    </Icon>
                </Link>
                <hr className="theBar"/>
                <div>
                    <img className="picture" src={Pic} alt=''/>
                </div>
                </div>
        )
    }

}