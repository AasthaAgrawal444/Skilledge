import React from 'react';
import Studprofile from './studprofile';
import Nav from '../../navbar';

function Editstudprofile() {
  return (
    <div>
    <Nav/>
        <h5 className='editstudprofilepg'>Edit Your Profile</h5>
        <Studprofile/>
    </div>
  )
}

export default Editstudprofile;
