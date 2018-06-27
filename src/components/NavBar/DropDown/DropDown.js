import React from 'react';
import './DropDown.css'

export default (props) => {
    return (
        <div>
            <div className={props.drawerToggle ? 'dropDown' : 'dropDown hiddenDD'}>
                <section className='dropDownContent'>
                    <div>Home</div>
                    <div>Products</div>
                    <div>Cart</div>
                    <div>Login</div>
                    <div>Logout</div>
                </section>
            </div>
        </div>
    )
};