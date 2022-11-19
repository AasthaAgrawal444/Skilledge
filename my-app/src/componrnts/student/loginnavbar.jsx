import React from "react";
import cart from '../images/cart icon.png';
import Search from '../images/Search.png';
import Profile from '../images/profile.png';
import logo from '../images/Skill edge logo-02.svg';
import {Link,useNavigate} from "react-router-dom";
import './loginnavbar.css';
import { useState } from "react";
import axios from "axios";

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

    function subsearch(){
      Navigate('/search');
    }

const Navigate= useNavigate();

var pro = localStorage.getItem("profile")
  
// const [is_educator, setIs_educator] = useState("");

//     // const [resmsg, setMsg] =useState(null);
//     const taketoken = localStorage.getItem("jwtToken");
//     console.log("taketoken");
//     const configuration = {
//       headers:{
//         Authorization: `Bearer ${taketoken}`
//       }
//     }

   

  //   async function handleinterestapi(){
  //     await axios.put(
  //      "https://skilledge.herokuapp.com/educator/become_educator/", (""), configuration)
  //      .then(response=>{
  //        // setRequest(response.status);
  //        setIs_educator(response.data)
  //        console.log(response);
  //        if(response.status===200){
  //         Navigate('/hostcourse');
  //        }
  //       //  setMsg(response.data.msg)
  //        console.log(response.status);
  //    })
  //    .catch(e => {
  //      console.log(e);
  //      // setMsg(e.data.msg)
  //   });
  //  }

  
    function logout (){
      localStorage.removeItem('Token');
    }

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
             <input type="text" placeholder="search" id="loginsearches" onClick={subsearch}/>
            </div>
            <Link to='/fullcart'><img src={cart} className="carticon" alt="icon"/></Link>
            <Link to='/home'><button className="homepg">Home</button></Link>
            <Link to='/allcourses'><button className="mycoursespg">My courses</button></Link>
            <div className="studentprofile">
            <img src={pro} id="profilefornav" alt="profilefornav" onClick={dropdown}/>
            <div id="dropdown" style={{display:"none"}}>
              <div className="profiledropimage" id="drop_content"><img src={pro} alt="" className="profiledropdownimage"/></div>
            <Link to='/editstudprofile'>  <div className="editprofiledrop" id="drop_content">Edit Profile</div></Link>
             {/* <Link to='/hostcourse'>  */}
             <Link to='/educatorhome'><p className="switchtoedudrop" id="drop_content" >Switch to Educator</p></Link>
             {/* </Link> */}
              <div className="walletdrop" id="drop_content">Wallet</div>
              <div className="privacydrop" id="drop_content"> Privacy</div>
              {/* <div className="helpdrop" id="drop_content">Help</div> */}
             <Link to='/landingpg'> <div className="logoutdrop" id="drop_content" onClick={logout}>Logout</div></Link>
            </div>
            </div>
        </div>
    </nav>
  );
}
 export default Loginnav;