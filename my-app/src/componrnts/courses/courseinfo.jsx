import React from 'react';
// import Course from '../images/courseimage.png';
import Coursecard from '../student/coursecard';
import courseimage from '../images/courseimg.png';
import starimg from "../images/star.png";
function Courseinfo() {
  return (
    <div>
       <div className='courseinfohead'>
        <img src={courseimage} className='infoimage' alt='infohead'/>
          <div className='infocontent'>
          Become a Certified HTML, CSS, JavaScript Web Developer 
          </div>
          <div className='desc'>
            <p>Info</p>
            <p>Catalog</p>
            <p>Reviews</p>
          </div>
          
       </div> 
       <div>
       <h1 className='recent'>Explore More</h1>
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
 </div>
  )
}

export default Courseinfo;
