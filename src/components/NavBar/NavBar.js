import React from 'react'
import {Link} from 'react-router-dom'
import logo from './Logo.jpg'
import './NavBar.css'

export default function NavBar(){
    return(


        <div className="container">

        <img className="Logo" src={logo} alt="" />
            <nav className="nav">
                <ul className="List">
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
                    <a href="http://localhost:3005/auth/logout">
                        <li className="LineItem">Log Out</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}