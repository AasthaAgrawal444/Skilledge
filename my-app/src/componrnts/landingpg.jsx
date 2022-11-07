import React from 'react';
import landingimg from './images/Landing image.png';
import './landingpg.css';
import arrow from './images/Arrow.png';
import mentorimg from './images/mentorimg.png';
import Mentors from './student/mentors';
import courseimage from './images/courseimg.png';
import Coursecard from './student/coursecard';
import starimg from './images/star.png';
import Footer from './footer';
 import Nav from './navbar';


function Landingpg() {
  // const join = {
  //   color : "#586AF5",
  // }
  return (
    <div>
    <Nav/>
      <div className='head'>
          <div className='quote'>
            <h1 className='joinhead'>Join<span style={{color : "#586AF5", fontWeight : "600", fontSize : "40px"}}>World's largest</span>learning platform today</h1>
            <p>Start learning by registerning for free</p>
          </div>
          <div className='signin'>
             <p className='sign3'>Sign in as Student</p>
            <p className='sign4'>Sign in as Mentor</p> 
          </div>
      </div>
      <img src={landingimg} className="landing" alt='land'/>
      <div className='bar'>
        <div className='over1'>
          <p className='over50'>Over 50 Courses</p>
          <img src={arrow} className='bararr' alt='arrow'/>
        </div>
        <div className='over2'><p className='over1500'>Over 1500 Students</p>
          <img src={arrow} className='bararr' alt='arrow'/></div>
        <div className='over3'><p className='over500'>Over 500 Mentors</p>
          <img src={arrow} className='bararr' alt='arrow'/></div>
      </div>
      <div className='topcategories'>
        <h3 id='topcat'>Top categories</h3>
        <div className='cat1'>
          <div className='category1'>Design
          <img src='' alt=''/></div>
          <div className='category2'>Marketing
          <img src='' alt=''/></div>
          <div className='category3'>Finance
          <img src='' alt=''/></div>
          <div className='category4'>Data Science
          <img src='' alt=''/></div>
        </div>
        <div className='cat1'>
          <div className='category5'>Department
          <img src='' alt=''/></div>
          <div className='category6'>Music 
          <img src='' alt=''/></div>
          <div className='category7'>Business
          <img src='' alt=''/></div>
          <div className='category8'>Photography
          <img src='' alt=''/></div>
        </div>
     </div>

      <div className='popular'>
          <h3 className='pop'>Popular Courses</h3>
          <div className='coursecard'>
            <Coursecard 
              img={courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />
            <Coursecard 
              img={courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />
            <Coursecard 
              img={courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />
            <Coursecard 
              img={courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />
            <Coursecard 
              img={courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />
            <Coursecard 
              img={courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />
          </div>
      </div>

      <div className='mentor'>
      <div className='mentors'>
          <h3 className='mentorhead'>Courses Taught by Real Mentors</h3>
          <p className='instruct'>Instructors from around the world teach millions of Students</p>
          <div className='mencards'>
          <Mentors
            img={mentorimg}
            title="Title"
            subhead="Subhead"
          />
           <Mentors
            img={mentorimg}
            title="Title"
            subhead="Subhead"
          />
           <Mentors
            img={mentorimg}
            title="Title"
            subhead="Subhead"
          />
           <Mentors
            img={mentorimg}
            title="Title"
            subhead="Subhead"
          />
        <Mentors
            img={mentorimg}
            title="Title"
            subhead="Subhead"
          />
          </div>
      </div>
      </div>
      <div className='landingfooter'>
      <Footer/>
      </div>
    </div>
  )
}

export default Landingpg;
