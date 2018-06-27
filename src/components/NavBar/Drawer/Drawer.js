import React from 'react';
import { Link } from 'react-router-dom'
import './Drawer.css'

export default (props) => {
  return (
    <div className={props.drawerToggle ? 'drawer' : 'drawer hidden'}>
      <section className='drawerContent'>
      <Link to='/'>
          <div className="LineItem">Home</div>
      </Link>
      <Link to='/Products'>         
        <div>Products</div>
      </Link>
      <Link to='/Cart'>
        <div>Cart</div>
      </Link>
      <a href={process.env.REACT_APP_LOGIN}>
        <div>Login</div>
      </a>
      <a href="http://localhost:3005/auth/logout">
        <div>Logout</div>
      </a>
      </section>
    </div>
  )
};
