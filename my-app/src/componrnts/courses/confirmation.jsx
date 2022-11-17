import React from 'react';
import { renderMatches } from 'react-router-dom';
import confirmed from '../images/confirmed.png';
import Next from '../images/next.png';
import {Link} from 'react-router-dom';

function Confirmation() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
    <p className='courseconftext' style={{fontSize:"48px"}}>Your Course is Confirmed</p>
    <p style={{fontSize:"27px", marginTop:"-5vh"}}>Thank you for taking the course</p>
      <div style={{deisplay:"flex", alignItems:"center", justifyContent:"center"}}>
      <img src={confirmed} alt='' className='confcourse' style={{height:"80vh", width:"70vw"}} />
     <Link to='/allcourses'> <img src={Next} alt='' style={{position:"relative", top:"-40vh", left:"-15vw"}} /></Link>
      </div>
    </div>
  )
}

export default Confirmation;
