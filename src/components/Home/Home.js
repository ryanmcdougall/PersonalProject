import React, { Component } from 'react'
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
                    <div className="textBox" style={{fontSize: 10}}>
                         <h2 className="headingBox">Services for you.</h2>
                        <p>some quote in the future</p>
                        <div className="block"></div>
                    </div>
                </div>
                <div className='homeContent'>
                <div className="details">
                    <img className="pipeImg" src={pipes} alt=''/>
                    <p className="firstText">
                    MPS is a construction company at its core.
                    Having a main specialty in sewer bypass. 
                    This is a process neccessary to make changes or improvements to specific sytems without having to shut down the entire sewer line.
                    </p>
                </div>
                <br />
                <div className="details">
                    <p className="firstText">
                    Here is an example of some high end pumps that are used to transport many heads of water over large distances.
                    </p>
                    <img className="pipeImg" src={pumps} alt=""/>
                </div>
                </div>
            </div>
        )
    }

}
