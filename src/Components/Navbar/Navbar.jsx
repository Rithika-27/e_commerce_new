import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = ({ cartCount }) => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link style={{ texdecoration: 'none' }}to='/'>Shop</Link> {menu === "shop" ? <hr/>:<></>}
                </li>
        
                <li onClick={() => setMenu("men")}>
                    <Link style={{ texdecoration: 'none' }}to='/men'>men</Link>{menu === "men" ? <hr/>:<></>}
                </li>
                <li onClick={() => setMenu("women")}>
                    <Link style={{ texdecoration: 'none' }}to='/women'>women</Link>{menu === "women" ? <hr/>:<></>}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link style={{ texdecoration: 'none' }}to='/kids'>kids</Link>{menu === "kids" ? <hr/>:<></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'>
                    <button className="nav-login-cart-button">Login</button>
                </Link>
    
                <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                <div className="nav-cart-count">{cartCount}</div>
            
            </div>
        </div>
    );
}

export default Navbar;
