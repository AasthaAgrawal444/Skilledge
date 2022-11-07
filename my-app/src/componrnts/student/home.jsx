import React from 'react';
// import './landingpg.css';
import './home.css';
import Landingimg from '../images/Landing image.png';
import arrow from '../images/Arrow.png';
import courseimage from '../images/courseimg.png';
import Coursecard from './coursecard';
import starimg from '../images/star.png';
import Footer from '../footer';
import Loginnav from './loginnavbar';

function Home() {
  return (
    <div>
    <Loginnav/>
      <div className='homehead'>
          <h5 id='startlearn'>Start Learning</h5>
          <h1 className='newskill'>New Skills</h1>
          <p className='skillcon'>Learn almost any skill a comfort</p> <p className='skillcon2'>to your home with SkillEdge</p>
      </div>
      <img src={Landingimg} className="landingimage" alt='land'/>
      <div className='barr'>
        <div className='over1'>
          <p className='over50'>Over 50 Courses</p>
          <img src={arrow} className='bararr' alt='arrow'/>
        </div>
        <div className='over2'><p className='over1500'>Over 1500 Students</p>
          <img src={arrow} className='bararr' alt='arrow'/></div>
        <div className='over3'><p className='over500'>Over 500 Mentors</p>
          <img src={arrow} className='bararr' alt='arrow'/></div>
      </div>
      <div className='coursesview'>
        <div className='recentcourses'>
          <h1 className='recent'>Recently Added Courses</h1>
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

      <div className='popularcourses'>
      <div className='popcourse'>
          <h1 className='courseheading'>Most Popular Courses</h1>
          <div className='coursecards'>
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
            /> <Coursecard  
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
      </div>
      </div>
      <div className='homefooter'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home;
