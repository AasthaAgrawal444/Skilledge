import React from 'react'
import logo from '../images/Skill edge logo-02.svg';
import {Link} from "react-router-dom";
import './edunavbar.css';
import { useState } from "react";
import Profile from '../images/profile.png';

function Edunavbar() {
    const [visdropdown, setVisdropdown] =useState(false);
    function dropdown(){
        console.log(visdropdown);
      if(!visdropdown){
      setVisdropdown(true);
      document.getElementById('dropdown').style.display="block";
      }
      else{
        setVisdropdown(false);
        document.getElementById('dropdown').style.display="none";
      }
    }
  return (
    <div>
       <div className = "loginnavbar">
            <div className="logo">
             <img src={logo} className="logo-icon" alt="logo"/>
             <h1 className="skillhead">Skill Edge</h1>
            </div>
            {/* <div className="searchbar">
             <img src={Search} className="searchingicon" alt="search"/>
             <input type="text" placeholder="search" id="loginsearches"/>
            </div> */}
            <div className='buttonsbar'>
            <Link to='/home'><button className="homepg" >Home</button></Link>
            <Link to='/hostcourse'><button className="mycoursespg" >Hostcourse</button></Link>
            <div className="studentprofile">
            <img src={Profile} id="profilefornav" alt="profilefornav" onClick={dropdown}/>
            <div id="dropdown">
              <div className="profiledropimage" id="drop_content"><img src={Profile} alt="" className="profiledropdownimage"/></div>
              <div className="editprofiledrop" id="drop_content">Edit Profile</div>
              <Link to='/home'> <div className="switchtoedudrop" id="drop_content">Switch to Student</div></Link>
              <div className="walletdrop" id="drop_content">Wallet</div>
              <div className="privacydrop" id="drop_content"> Privacy</div>
              <div className="helpdrop" id="drop_content">Help</div>
              <div className="logoutdrop" id="drop_content">Logout</div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Edunavbar;
