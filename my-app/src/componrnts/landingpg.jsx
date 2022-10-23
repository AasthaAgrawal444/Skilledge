import React from 'react';
// import landingimg from './images/Landing image.png';
import './landingpg.css';

function Landingpg() {
  return (
    <div>
      <div className='head'>
          <div className='quote'>
            <h1>Join World's largest learning platform today</h1>
            <p>Start learning by registerning for free</p>
          </div>
          <div className='signin'>
            <button className='but3'>Sign in as Student</button>
            <button className='but4'>Sign in as Mentor</button>
          </div>
      </div>
      {/* <img src={landingimg} className="landing" alt='land'/> */}
    </div>
  )
}

export default Landingpg;
