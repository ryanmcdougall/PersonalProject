import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from './Logo.png'
import Drawer from './Drawer/Drawer'
// import DropDown from './DropDown/DropDown';
import './NavBar.css'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          drawerToggle: false,
        }
        this.handleHam = this.handleHam.bind(this)
      }
    
      handleHam() {
        this.setState({ drawerToggle: !this.state.drawerToggle })
      }
    
      render() {
        return (
          <div>
            <nav className='header row'>
              <div className='ham' onClick={this.handleHam}>
                <div className={this.state.drawerToggle ? 'bar bar1' : 'bar'}></div>
                <div className={this.state.drawerToggle ? 'bar bar2' : 'bar'}></div>
                <div className={this.state.drawerToggle ? 'bar bar3' : 'bar'}></div>
              </div>
              <img className="Logo" src={logo} alt="" />
              <section className="List">
                <Link to='/'>
                        <li className="LineItem">Home</li>
                    </Link>                
                <Link to='/Products'>
                        <li className="LineItem">Products</li>
                    </Link>
                <Link to='/Cart'>
                        <li className="LineItem">Cart</li>
                    </Link>                
                <a href={process.env.REACT_APP_LOGIN}>
                        <li className="LineItem">Login</li>
                    </a>                
                <a href={process.env.REACT_APP_LOGOUT}>
                        <li className="LineItem">Log Out</li>
                    </a>              
                </section>
            </nav>
            <Drawer
              drawerToggle={this.state.drawerToggle}
            />
            {/* <DropDown
              drawerToggle={this.state.drawerToggle}
            /> */}
          </div>
        )
      }
    };
//     return(


//         <div className="container">

//         <img className="Logo" src={logo} alt="" />
//             <nav className="nav">
//                 <ul className="List">
//                     <Link to='/'>
//                         <li className="LineItem">Home</li>
//                     </Link>
//                     <Link to='/Products'>
//                         <li className="LineItem">Products</li>
//                     </Link>
//                     <Link to='/Cart'>
//                         <li className="LineItem">Cart</li>
//                     </Link>
//                     <a href={process.env.REACT_APP_LOGIN}>
//                         <li className="LineItem">Login</li>
//                     </a>
//                     <a href="http://localhost:3005/auth/logout">
//                         <li className="LineItem">Log Out</li>
//                     </a>
//                 </ul>
//             </nav>
//         </div>
//     )
// }