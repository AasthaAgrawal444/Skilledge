import React from "react";
import './navbar.css';
import cart from './images/cart icon.png';
import Search from './images/Search.png';
import logo from './images/Skill edge logo-02.svg';
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";

function Nav() {
  return(
    <nav>
        <div className = "navbar">
            <div className="logo">
             <img src={logo} className="logo-icon" alt="logo"/>
             <h1 className="skillhead">Skill Edge</h1>
            </div>
            <div className="search">
             <img src={Search} className="searchicon" alt="search"/>
             <input type="text" placeholder="Search" id="searches"/>
            </div>
            <img src={cart} className="cart-icon" alt="icon"/>
            <Link to='/signin'><button className="but1">Log in</button></Link>
            <Link to='/signup'><button className="but2">Sign up</button></Link>
        </div>
    </nav>
  );
}
 export default Nav;