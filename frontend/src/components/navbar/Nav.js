import React from 'react';
import Button from '../Button/Button';
import "./Nav.css"


const Nav = (props) => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src="LOGO.png" alt='logo' width={30}></img>
                <h3 style={{color : props.color}}>ShopMart</h3>
            </div>
            <div className='center' style={{color : props.color}}>
                <Button text="New" />
                <Button text="Top" />
                <Button text="Kids" />
                <Button text="Womens" />
                <Button text="Mens" />
                <Button text="Collections" />
            </div>
            <div className='user' style={{color : props.color}}>
                <i class='bx bx-search-alt-2'></i>
                <i class='bx bxs-cart'></i>
                <i class='bx bx-laptop'></i>
            </div>
        </div>
    )
}

export default Nav