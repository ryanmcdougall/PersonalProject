import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(){
    return(
        <div>
            <Link to='/'>
                <p>Home</p>
            </Link>
            <Link to='/Products'>
                <p>Products</p>
            </Link>
            <Link to='/Cart'>
                <p>Cart</p>
            </Link>
            <a href={process.env.REACT_APP_LOGIN}>
                        <button>Login</button>
            </a>
            <a href="http://localhost:3005/auth/logout">
                <button type="" className="">
                    Logout
                </button>
            </a>
        </div>
    )
}