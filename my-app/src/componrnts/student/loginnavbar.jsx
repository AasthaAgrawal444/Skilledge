import React from "react";
import cart from '../images/cart icon.png';
import Search from '../images/Search.png';
import Profile from '../images/profile.png';
import logo from '../images/Skill edge logo-02.svg';
import {Link} from "react-router-dom";
import './loginnavbar.css';
import { useState } from "react";

function Loginnav() {
    // const [isdropdownvisible, setIsdropdownvisible] = useState(false);
    // const showdropdown = () => {
    //     setIsdropdownvisible(true);
    // }
    // const hidedropdown = () => {
    //     setIsdropdownvisible(false);
    // }
    
    // const [itemsList, setItemsList] = useState([
    //     {

    //     }
    // ])
    const [visdropdown, setVisdropdown] =useState(false);
    function dropdown(){
      if(!visdropdown){
      setVisdropdown(true);
      document.getElementById('dropdown').style.display="block";
      }
      else{
        setVisdropdown(false);
        document.getElementById('dropdown').style.display="none";
      }
    }

  return(
    <nav>
        <div className = "loginnavbar">
            <div className="logo">
             <img src={logo} className="logo-icon" alt="logo"/>
             <h1 className="skillhead">Skill Edge</h1>
            </div>
            <div className="searchbar">
             <img src={Search} className="searchingicon" alt="search"/>
             <input type="text" placeholder="search" id="loginsearches"/>
            </div>
            <img src={cart} className="carticon" alt="icon"/>
            <Link to='/home'><button className="homepg">Home</button></Link>
            <Link to='/mycourses'><button className="mycoursespg">My courses</button></Link>
            <div className="studentprofile">
            <img src={Profile} id="profilefornav" alt="profilefornav" onClick={dropdown}/>
            <div id="dropdown">
              <div className="profiledropimage" id="drop_content"><img src={Profile} alt="" className="profiledropdownimage"/></div>
              <div className="editprofiledrop" id="drop_content">Edit Profile</div>
              <div className="switchtoedudrop" id="drop_content">Switch to Educator</div>
              <div className="walletdrop" id="drop_content">Wallet</div>
              <div className="privacydrop" id="drop_content"> Privacy</div>
              <div className="helpdrop" id="drop_content">Help</div>
              <div className="logoutdrop" id="drop_content">Logout</div>
            </div>
            </div>
        </div>
    </nav>
  );
}
 export default Loginnav;