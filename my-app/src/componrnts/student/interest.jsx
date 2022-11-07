import React, { useState } from "react";
import courseimage from "../images/courseimg.png";
import "./interest.css";
import Nib from "../images/PenNib.png";
import html from "../images/FileHtml.png";
import mike from "../images/mike.png";
import music from "../images/music.png";
import briefcase from "../images/Briefcase.png";
import camera from "../images/Camera.png";
import graph from "../images/Graph.png";
import arrows from "../images/Arrows.png";
import Axios from "axios";

function Interest() {
  const [mark1, setMark1] = useState(false);
  const [mark2, setMark2] = useState(false);
  const [mark3, setMark3] = useState(false);
  const [mark4, setMark4] = useState(false);
  const [mark5, setMark5] = useState(false);
  const [mark6, setMark6] = useState(false);
  const [mark7, setMark7] = useState(false);
  const [mark8, setMark8] = useState(false);
  const [mark9, setMark9] = useState(false);
  const [mark10, setMark10] = useState(false);
  const [mark11, setMark11] = useState(false);

  // var value1,value2,value3;
  function change1() {
    console.log(mark1);
    if (!mark1) {
      setMark1(true);
      document.getElementById("categ1").style.backgroundColor = "#DEE1FD";
    } else {
      setMark1(false);
      document.getElementById("categ1").style.backgroundColor = "#FFFFFF";
    }
  }
  function change2() {
    console.log(mark2);
    if (!mark2) {
      setMark2(true);
      document.getElementById("categ2").style.backgroundColor = "#DEE1FD";
    } else {
      setMark2(false);
      document.getElementById("categ2").style.backgroundColor = "#FFFFFF";
    }
  }
  function change3() {
    console.log(mark3);
    if (!mark3) {
      setMark3(true);
      document.getElementById("categ3").style.backgroundColor = "#DEE1FD";
    } else {
      setMark3(false);
      document.getElementById("categ3").style.backgroundColor = "#FFFFFF";
    }
  }
  function change4() {
    console.log(mark4);
    if (!mark4) {
      setMark4(true);
      document.getElementById("categ4").style.backgroundColor = "#DEE1FD";
    } else {
      setMark4(false);
      document.getElementById("categ4").style.backgroundColor = "#FFFFFF";
    }
  }
  function change5() {
    console.log(mark5);
    if (!mark5) {
      setMark5(true);
      document.getElementById("categ5").style.backgroundColor = "#DEE1FD";
    } else {
      setMark5(false);
      document.getElementById("categ5").style.backgroundColor = "#FFFFFF";
    }
  }
  function change6() {
    console.log(mark6);
    if (!mark6) {
      setMark6(true);
      document.getElementById("categ6").style.backgroundColor = "#DEE1FD";
    } else {
      setMark6(false);
      document.getElementById("categ6").style.backgroundColor = "#FFFFFF";
    }
  }
  function change7() {
    console.log(mark7);
    if (!mark7) {
      setMark7(true);
      document.getElementById("categ7").style.backgroundColor = "#DEE1FD";
    } else {
      setMark7(false);
      document.getElementById("categ7").style.backgroundColor = "#FFFFFF";
    }
  }
  function change8() {
    console.log(mark8);
    if (!mark8) {
      setMark8(true);
      document.getElementById("categ8").style.backgroundColor = "#DEE1FD";
    } else {
      setMark8(false);
      document.getElementById("categ8").style.backgroundColor = "#FFFFFF";
    }
  }
  function change9() {
    console.log(mark9);
    if (!mark9) {
      setMark9(true);
      document.getElementById("categ9").style.backgroundColor = "#DEE1FD";
    } else {
      setMark9(false);
      document.getElementById("categ9").style.backgroundColor = "#FFFFFF";
    }
  }
  function change10() {
    console.log(mark10);
    if (!mark10) {
      setMark10(true);
      document.getElementById("categ10").style.backgroundColor = "#DEE1FD";
    } else {
      setMark10(false);
      document.getElementById("categ10").style.backgroundColor = "#FFFFFF";
    }
  }
  function change11() {
    console.log(mark11);
    if (!mark11) {
      setMark11(true);
      document.getElementById("categ11").style.backgroundColor = "#DEE1FD";
    } else {
      setMark11(false);
      document.getElementById("categ11").style.backgroundColor = "#FFFFFF";
    }
  }
  const [resmsg, setMsg] =useState(null);
  const token = localStorage.getItem("jwtToken");
  console.log("token");
  const configure = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }
  async function handleinterestapi(){
     const object = {
       Interest1:(mark1)?"True":"False",
       Interest2:mark2?"True":"False",
       Interest3:mark3?"True":"False",
       Interest4:mark4?"True":"False",
       Interest5:mark5?"True":"False",
       Interest6:mark6?"True":"False",
       Interest7:mark7?"True":"False",
       Interest8:mark8?"True":"False",
       Interest9:mark9?"True":"False",
       Interest10:mark10?"True":"False",
       Interest11:mark11?"True":"False"
     };
     console.log(object);
     await Axios.put(
      "https://skilledge.herokuapp.com/courses/add_category/",JSON.stringify(object),configure)
      .then(response=>{
        // setRequest(response.status);
        
        console.log(response);
        setMsg(response.data.msg)
        console.log(response.status);
    })
    .catch(e => {
      console.log(e);
      // setMsg(e.data.msg)
   });
  }
  // function change(value1,value2,value3){
  // console.log(mark1);
  // console.log(mark2);
  // if(!value1){
  //   value2(true);
  //  document.getElementById('value3').style.backgroundColor="#DEE1FD";
  // }
  // else if(!mark2){
  //   setMark2(true)
  //   document.getElementById('categ2').style.backgroundColor="#DEE1FD";
  // }
  // else{
  //   value2(false);
  //   document.getElementById('value3').style.backgroundColor="#FFFFFF";
  // setMark2(false)
  // document.getElementById('categ2').style.backgroundColor="#FFFFFF";
  // }

  // }
  return (
    <div>
      <h3 className="chooseint">Choose Your Interest</h3>
      <img src={courseimage} alt="profile img" className="profileimage" />
      {/* <p className="backendinterestmsg">{resmsg}</p> */}
      <div className="intcategories">
        <div className="cat3">
          <div id="categ1" onClick={change1}>
            <img src={html} className="nib" alt="" />
            Personal & Development
          </div>
          <div id="categ2" onClick={change2}>
            <img src={arrows} className="html" alt="" />
            Teaching & Academics
          </div>
        </div>
        <div className="cat4">
          <div id="categ3" onClick={change3}>
            <img src={html} className="mike" alt="" />
            Development
          </div>
          <div id="categ4" onClick={change4}>
            <img src={html} className="music" alt="" />
            Health & Fitness
          </div>
          <div id="categ5" onClick={change5}>
            <img src={Nib} className="camera" alt="" />
            Productivity
          </div>
        </div>
        <div className="cat5">
          <div id="categ6" onClick={change6}>
            <img src={mike} className="brief" alt="" />
            Marketing
          </div>
          <div id="categ7" onClick={change7}>
            <img src={music} className="graph" alt="" />
            Music
          </div>
          <div id="categ8" onClick={change8}>
            <img src={camera} className="arrows" alt="" />
            IT & Software
          </div>
        </div>
        <div className="cat6">
          <div id="categ9" onClick={change9}>
            <img src={briefcase} className="brief" alt="" />
            Business
          </div>
          <div id="categ10" onClick={change10}>
            <img src={graph} className="graph" alt="" />
            Finance
          </div>
          <div id="categ11" onClick={change11}>
            <img src={Nib} className="arrows" alt="" />
            Design
          </div>
        </div>
      </div>
      <div className="intbuttons">
        <button className="intcont" onClick={handleinterestapi}>Continue</button>
        <button className="intback">Back</button>
      </div>
      <p className="backendinterestmsg">{resmsg}</p>
    </div>
  );
}

export default Interest;
