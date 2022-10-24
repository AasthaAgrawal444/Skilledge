import React from "react";
import './navbar.css';
import cart from './images/cart icon.png';
import logo from './images/Skill edge logo-02.svg';
//import {Link} from "react-router-dom";
import {Link} from "react-router-dom";

function Nav() {
  return(
    <nav>
        <div className = "navbar">
            <div className="logo">
             <img src={logo} className="logo-icon" alt="logo"/>
             <h1>Skill Edge</h1>
            </div>
            <div className="search">
             <img src="" alt=""/>
             <input type="text" placeholder="search"/>
            </div>
            <img src={cart} className="cart-icon" alt="icon"/>
            <Link to='/signin'><button className="but1">Log in</button></Link>
            <button className="but2">Sign in</button>
        </div>
    </nav>
  );
}
 export default Nav;