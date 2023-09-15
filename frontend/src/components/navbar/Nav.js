import React from 'react';
import Button from '../Button/Button';
import "./Nav.css"
import { useNavigate } from 'react-router-dom';


const Nav = (props) => {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className='logo' onClick={()=>{ navigate("/")}}>
                <img src="https://img.pikbest.com/png-images/20191028/little-boy-pushing-a-shopping-cart-to-buy-things-gif_2515305.png!bw700" alt='logo' width={80}></img>
                <h1>ShopMart</h1>
            </div>
            <div className='center'>
                <Button text="New" />
                <Button text="Top" />
                <Button text="Kids" />
                <Button text="Womens" />
                <Button text="Mens" />
                <Button text="Collections" />
            </div>
            <div className='user'>
                <i className='bx bx-search-alt-2'></i>
                <i className='bx bxs-cart'></i>
                <i className='bx bx-laptop'></i>
            </div>
        </div>
    )
}

export default Nav