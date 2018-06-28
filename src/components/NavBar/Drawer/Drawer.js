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
      <hr />
      <Link to='/Products'>         
        <div>Products</div>
      </Link>
      <hr />
      <Link to='/Cart'>
        <div>Cart</div>
      </Link>
      <hr />
      <a href={process.env.REACT_APP_LOGIN}>
        <div>Login</div>
      </a>
      <hr />
      <a href="http://localhost:3005/auth/logout">
        <div>Logout</div>
      </a>
      <hr />
      </section>
    </div>
  )
};
