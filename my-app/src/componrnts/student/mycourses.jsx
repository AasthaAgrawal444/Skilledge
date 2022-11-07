import React from 'react';
import Loginnav from './loginnavbar';
import courseimage from '../images/courseimg.png';
import Mycoursecard from './mycoursescards.jsx';
import starimg from '../images/star.png';
import './mycourses.css'

function Mycourses() {
  return (
    <div>
      <Loginnav/>
      <div className='mycourseshead'>
      <h1 className='mycourseshdng'>My Courses</h1>
    <div className='mycourseheadng'>
      <p className='allcourses'>All Courses</p>
      <p className='ongoing'>On Going</p>
      <p className='completed'>Completed</p>
    </div>
      </div>
      <div className='coursecard'>
      <div className='card1'>
             <Mycoursecard 
              img={courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
            />
            <Mycoursecard 
              img={courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
            />
        </div>
        <div className='card2'>
            <Mycoursecard 
              img={courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
            /> 
            <Mycoursecard 
              img={courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
            />
        </div>
            </div>
            <div className='mycoursesfooter'>
            {/* <Footer/> */}
            </div>
    </div>
  )
}

export default Mycourses;
