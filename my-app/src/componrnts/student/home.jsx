import React, { useState, useEffect } from 'react';
// import './landingpg.css';
import './home.css';
import Landingimg from '../images/Landing image.png';
import arrow from '../images/Arrow.png';
import fwd from '../images/fwd.png';
import Coursecard from './coursecard';
import  bwd from '../images/bwd.png';
import Footer from '../footer';
import Loginnav from './loginnavbar';
// import carddata from './carddata';
// import popular from './popular';
import axios from 'axios';
import { createSEarchParams, Link, useNavigate} from "react-router-dom";


function recentcourse(reccourse){
  return(
    <Coursecard 
    id={reccourse.id}
    thumbnail={reccourse.thumbnail}
    rating={reccourse.rating}
    topic={reccourse.topic}
    short_description={reccourse.short_description}
    price={reccourse.price}
  />
  );
}

function popularcourse(popular){
  return(
    <Coursecard 
    id={popular.id}
    thumbnail={popular.thumbnail}
    rating={popular.rating}
    topic={popular.topic}
    short_description={popular.short_description}
    price={popular.price}
  />
  );
}

function Home() {

const [reccourse, setReccourse] = useState([

]);

const [popular,setPopular] = useState([

]);

// const [loading, setLoading] = useState(false);

const navigate = useNavigate();

const [i, setI]= useState(0);
const [j, setJ]= useState(4);
function increase(){
    setI(i+1);
    setJ(j+1);
}
function decrease(){
  if(i>0&&j>4){
    console.log(i,j);

  setI(i-1);
  setJ(j-1);
  }
}

const [x, setX]= useState(0);
const [y, setY]= useState(4);
function inc(){
    setX(x+1);
    setY(y+1);
}
function dec(){
  if(x>0&&y>4){
    console.log(x,y);

  setX(x-1);
  setY(y-1);
  }
}


const [resmsg, setMsg] =useState(null);
  const token = localStorage.getItem("jwtToken");
  console.log("token");
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(()=>{
    axios.get("https://skilledge.herokuapp.com/courses/course/",config).then((response)=>{
     console.log(response);
     setReccourse(response.data);
    
  //    setLoading(true);
    }).catch(err=>{
        console.log(err);
    })
  },[])

  useEffect(()=>{
    axios.get("https://skilledge.herokuapp.com/courses/view_filtered_courses/",config).then((response)=>{
     console.log(response);
     setPopular(response.data.results);
  //    setLoading(true);
    }).catch(err=>{
        console.log(err);
    })
  },[])


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
          <img src={bwd} alt='' className='bwdbutt' onClick={decrease}/>
          <img src={fwd} alt='' className='fwdbutt' onClick={increase}/>
          <div className='coursecard'>

          {reccourse.slice(i,j).map((recentcourse))};

          </div>
      </div>
          
       <div className='popularcourses'>
      <div className='popcourse'>
          <h1 className='courseheading'>Most Popular Courses</h1>
          <img src={bwd} alt='' className='bwdbutt' onClick={dec}/>
          <img src={fwd} alt='' className='fwdbutt' onClick={inc}/>
          <div className='coursecards'>
          <div className='coursecard'>  
          {popular.slice(x,y).map((popularcourse))};
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
