import React from 'react';
import logo from './images/Skill edge logo-02.svg';
import './footer.css';


function Footer() {
  return (
    <footer>
       <div className='Logo'>
          <img src={logo} className="logo-icon" alt="logo"/>
          <h1>Skill Edge</h1>
       </div>
       <div className='category'>
         <h1>Category</h1>
         <div className='categories'>
              <div className='col1'>
                  <p>Dsign</p>
                  <p>Development</p>
                  <p>Marketing</p>
                  <p>Music</p>
              </div>
              <div className='col2'>
                 <p>Business</p>
                 <p>Lifestyle</p>
                 <p>Photography</p>
              </div>
         </div>
       </div>
       <div className='explores'>
          <h2>Explore</h2>
          <div>
             <p>Home</p>
             <p>About</p>
             <p>Course</p>
             <p>Blog</p>
             <p>Contact</p>
          </div>
       </div>
        <h3>Contact Us</h3>
        <p1>Email:abc@gmail.com</p1>
    </footer>
  )
}

export default Footer;
