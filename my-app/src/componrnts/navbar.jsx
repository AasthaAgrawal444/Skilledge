import React from "react";
import './navbar.css';
import cart from './images/cart icon.png';
import logo from './images/Skill edge logo-02.svg';


function Nav() {
  return(
    <nav>
        <div className = "navbar">
            <div className="logo">
             <img src={logo} className="logo-icon" alt="logo"/>
             <h1>Skill Edge</h1>
            </div>
            <input type="text" placeholder="search"/>
            <img src={cart} className="cart-icon" alt="icon"/>
            <button className="but1">Log in</button>
            <button className="but2">Sign in</button>
        </div>
    </nav>
  );
}
 export default Nav;