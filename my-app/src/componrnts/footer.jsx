import React from "react";
import logo from "./images/Skill edge logo-02.svg";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="Logo">
        <img src={logo} className="logo-icon" alt="logo" />
        <h1 className="edgehead">Skill Edge</h1>
      </div>
      <div className="category">
        <h1 className="cat">Category</h1>
        <div className="categories">
          <div className="col1">
            <p className="c1">Dsign</p>
            <p className="c1">Development</p>
            <p className="c1">Marketing</p>
            <p className="c1">Music</p>
          </div>
          <div className="col2">
            <p className="c2">Business</p>
            <p className="c2">Lifestyle</p>
            <p className="c2">Photography</p>
          </div>
        </div>
      </div>
      <div className="explores">
        <h1 className="exp">Explore</h1>
        <div>
          <p>Home</p>
          <p>About</p>
          <p>Course</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="contus">
      <h3 className="conthead">Contact Us</h3>
      <p className="contactid">Email: skilledge.contactus@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
