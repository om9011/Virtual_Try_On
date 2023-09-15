import React from 'react';
import "./Header.css";
import Nav from "../navbar/Nav.js";
import Company from '../companies/company.js';


const url = [
    "https://i.pinimg.com/originals/9c/d1/bf/9cd1bf6c2d1a88e8ac473f62a2898c62.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/800px-Adidas_logo.png", 
    "https://www.logo.wine/a/logo/H%26M/H%26M-Logo.wine.svg", 
    "https://i.pinimg.com/originals/6d/2c/cd/6d2ccd795e409bb68eec5db364e797ef.png"]

    
const Header = () => {
    return (
        <div className='landing_page'>
            <section className='landing'>
                <div className='header'>
                    <Nav 
                    color = "white" 
                    />
                </div>
                <div className='landing1'>
                    <h1>ShopMart</h1>
                    <p>With Virtual TRY-ON Feature : 'Try Before You Buy!'</p>
                </div>
            </section>
            <div className='companies'>
                {url.map((product) => (
                    <Company link={product} />
                ))}
            </div>
        </div>
    );
}

export default Header;
