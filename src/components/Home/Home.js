import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import mtshasta from './mtshasta.jpg'
import pipes from './171.JPG'
import pumps from './photo 2 (10).JPG'
import "./Home.css"


export default class Home extends Component{
    render(){
        return(
            <div className="Home">
                <div className="imageTextBox">
                    <img className="homePic" src={mtshasta} alt=""/>
                    <div className="textBox" style={{fontSize: 15}}>
                         <h1 className="headingBox">Services for you.</h1>
                        <p>The road to success is always under construction.</p>
                        <div className="block"></div>
                    </div>
                </div>
                <div className='homeContent'>
                <div className="details">
                    <img className="pipeImg" src={pipes} alt=''/>
                <a href={process.env.REACT_APP_LOGIN}>
                    <div className="loginButton">Login</div>
                    </a>
                </div>
                <br />
                <div className="details2">
                    <img className="pumpImg" src={pumps} alt=""/>
                    <Link to="/Products">
                    <div className="productsButton">Products</div>
                    </Link>
                </div>
                </div>
                <div className="space"> :)))) </div>
            </div>
            
        )
    }
    
}
