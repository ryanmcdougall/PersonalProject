import React, { Component } from 'react'
import mtshasta from './mtshasta.jpg'
import "./Home.css"


export default class Home extends Component{
    render(){
        return(
            <div>
                <div className="imageTextBox">
                    <img className="homePic" src={mtshasta} alt=""/>
                    <div className="textBox" style={{fontSize: 10}}>
                        <h1 className="headingBox">MPS. Services for you.</h1>
                        <p>some quote in the future</p>
                        <div className="block"></div>
                    </div>
                </div>
            </div>
        )
    }

}
