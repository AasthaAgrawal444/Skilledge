import React from 'react'
import Mycourses from './mycourses';
import Empty from '../images/empty.png';
import './nocourse.css';

function Nocourse() {
  return (
    <div>
      <Mycourses/>
      <img src={Empty} alt='empty' className='emptybox'/>
    </div>
  )
}

export default Nocourse;
