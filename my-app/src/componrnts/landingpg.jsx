import React , {useState , useEffect} from 'react';
import landingimg from './images/Landing image.png';
import './landingpg.css';
import arrow from './images/Arrow.png';
import mentorimg from './images/mentorimg.png';
import Mentors from './student/mentors';
import courseimage from './images/courseimg.png';
import Coursecard from './student/coursecard';
import starimg from './images/star.png';
import Nib from './images/PenNib.png';
import Arro from './images/Arrows.png';
import Brief from './images/Briefcase.png';
import Cam from './images/Camera.png';
import File from './images/FileHtml.png';
import Graph from './images/Graph.png';
import Mike from './images/mike.png';
import Music from './images/music.png';
// import Nib from './images/PenNib.png';
// import Nib from './images/PenNib.png';
// import Nib from './images/PenNib.png';
// import Nib from './images/PenNib.png';
// import Nib from './images/PenNib.png';


import Footer from './footer';
 import Nav from './navbar';
 import carddata from './student/carddata';
 import mentors from './student/mentor';
 import axios from 'axios';
 import {Link,useNavigate}from "react-router-dom";

//  function mentored(mentors){
//   return(
//   <Mentors
//             key={mentors.id}
//             img={mentors.img}
//             title={mentors.title}
//             subhead={mentors.subhead}
//           />
//   );
//  }


function popularcourse(popular){
  return(
    <Coursecard 
    key={popular.id}
    thumbnail={popular.thumbnail}
    rating={popular.rating}
    topic={popular.topic}
    short_description={popular.short_description}
    price={popular.price}
  />
  );
}


function Landingpg() {
  // const join = {
  //   color : "#586AF5",
  // }

 
  const [popular,setPopular] = useState([
  
  ]);
  
  const [resmsg, setMsg] =useState(null);
    const token = localStorage.getItem("jwtToken");
    console.log("token");
    const config = {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
  
    useEffect(()=>{
      axios.get("https://skilledge.herokuapp.com/courses/view_filtered_courses/",config).then((response)=>{
       console.log(response);
       setPopular(response.data.results);
    //    setLoading(true);
      }).catch(err=>{
          console.log(err);
      })
    },[]);
  return(
    <>
    <div>
    <Nav/>
      <div className='head'>
          <div className='quote'>
            <h1 className='joinhead'>Join</h1><span style={{color : "#586AF5", fontWeight : "600", fontSize : "40px"}}>World's largest</span><h1 className='platform'>learning platform today</h1>
            <p className='registering'>Start learning by registerning for free</p>
          </div>
          <div className='signin'>
             <Link to='/signup'><button className='sign3'>Get Started</button></Link>
            {/* <p className='sign4'>Sign in as Mentor</p>  */}
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
          <div className='category1'>
          <img src={Nib} alt='' style={{height:"5vhh", width:"1.7vw"}}/>
          <p>Design</p> 
          <img src={arrow} className='bararr' alt='arrow'/>
          {/* <img src={arrow} alt='' style={{height:"4vh", width:"1vw"}}/> */}
          </div>
          <div className='category2'>
          <img src={Mike} alt='' style={{height:"5vh", width:"1.7vw"}}/>
          <p>Marketing</p> 
          <img src={arrow} className='bararr' alt='arrow'/>
          </div>
          <div className='category3'>
          <img src={Graph} alt='' style={{height:"5vh", width:"1.7vw"}}/>
          <p>Finance</p> 
          <img src={arrow} className='bararr' alt='arrow'/>
          </div>
          <div className='category4'>
          <img src={Arro} alt='' style={{height:"5vh", width:"1.7vw"}}/>
          <p>Data Science</p> 
          <img src={arrow} className='bararr' alt='arrow'/>
          </div>
        </div>
        <div className='cat1'>
          <div className='category5'>
          <img src={File} alt='' style={{height:"5vh", width:"1.7vw"}}/>
          <p>Development</p> 
          <img src={arrow} className='bararr' alt='arrow'/>
          </div>
          <div className='category6'>
          <img src={Music} alt='' style={{height:"5vh", width:"1.7vw"}}/>
          <p>Music</p> 
          <img src={arrow} className='bararr' alt='arrow'/>
          </div>
          <div className='category7'>
          <img src={Brief} alt='' style={{height:"5vh", width:"1.7vw"}}/>
          <p>Business</p> 
          <img src={arrow} className='bararr' alt='arrow'/>
          </div>
          <div className='category8'>
          <img src={Cam} alt='' style={{height:"5vh", width:"1.7vw"}}/>
          <p>Photography</p> 
          <img src={arrow} className='bararr' alt='arrow'/>
          </div>
        </div>
     </div>

      <div className='popular'>
          <h3 className='pop'>Popular Courses</h3>
          <div className='coursecard'>
          {popular.map(popularcourse)}; 
          </div>
      </div>
      <div className='landingfooter'>
      <Footer/>
      </div>
    </div>
    </>
  );
}

export default Landingpg;
