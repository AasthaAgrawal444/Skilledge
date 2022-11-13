import React, { useState, useEffect } from 'react';
// import Course from '../images/courseimage.png';
import './courseinfo.css';
import Coursecard from '../student/coursecard';
import Courseimage from '../images/courseimg.png';
import starimg from "../images/star.png";
import axios from 'axios';
// import Buycoursecard from './buycoursecard';
import { useLocation , useNavigate} from "react-router-dom";
import Loginnav from '../student/loginnavbar';
import Lessoncard from './lessoncard';
import Feedbackcard from './feedbackcard';
import Footer from '../footer';

function explore(explored){
  return(
  <Coursecard
  key={explored.id}
  id={explored.id}
    thumbnail={explored.thumbnail}
    rating={explored.rating}
    topic={explored.topic}
    short_description={explored.short_description}
    price={explored.price}
/>
  )
}

function lesson(view){
  return(
    <Lessoncard
      key={view.id}
      lessonName={view.lessonName}
      topic={view.topic}
      length={view.length}
      file={view.file}
    />
  )
}

function userreview(views){
  return(
    <Feedbackcard
      key={views.course}
      course={views.course}
      latest_review={views.latest_review}
      comment={views.comment}
    />
  )
  
}

function Courseinfo() {

  const Navigate= useNavigate();
  const [view, setView] = useState([]);
  const [views, setViews] = useState([]);

const [lessonName, setLessonName] = useState("")
  const [buy, setBuy] = useState([]);
const[explored, setExplored] = useState([]);
const [show1, setShow1] = useState(true);
const [show2, setShow2] = useState(false);
const[show3, setShow3] = useState(false);
// localStorage.setItem('courseid', key);
const [id, setId] = useState("");
const [thumbnail, setThumbnail] = useState("");
const [topic, setTopic] = useState("");
const [short_description, setShort_descripttion] = useState("");
const [price, setPrice] = useState("");
const [rating, setRating]= useState("");

// const history=useHistory

function handleinfo1(){
  // setShow1(true);
  document.getElementById("display1").style.display='block';
  document.getElementById("display2").style.display='none';
  document.getElementById("display3").style.display='none';
}

function handleinfo2(){
  // se/tShow2(true);
  document.getElementById('display2').style.display='block';
  document.getElementById('display1').style.display='none';
  document.getElementById('display3').style.display='none';
}

function handleinfo3(){
  // setShow3(true);
  document.getElementById('display3').style.display='block';
  document.getElementById('display2').style.display='none';
  document.getElementById('display1').style.display='none';
}

// if(show1==true){

// }

// if(show2==true){
 
// }

// if(show3==true){
 
// }


const [resmsg, setMsg] =useState(null);
  const token = localStorage.getItem("jwtToken");
  console.log("token");
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }

  var ide= localStorage.getItem('courseid');


  const history=useLocation();
  useEffect(()=>{
    console.log(history);
    setThumbnail(history.state.thumbnail);
    setTopic(history.state.topic);
    setPrice(history.state.price);
    setRating(history.state.rating);
    // setId(history.state.id);
     localStorage.setItem('courseid', history.state.id);
    setShort_descripttion(history.state.short_description);

    console.log(history.state.thumbnail);
    axios.get("https://skilledge.herokuapp.com/courses/view_filtered_courses/",config).then((response)=>{
     console.log(response);
     console.log(history.state.id);
     setId(history.state.id);
     console.log(id);
     setExplored(response.data.results);

  //    setLoading(true);
    }).catch(err=>{
        console.log(err);
    })
  },[])

  useEffect(()=>{
    axios.get(`https://skilledge.herokuapp.com/courses/course_feedback/${ide}/`,config).then((response)=>{
      console.log(response);
      setViews(response.data);
      console.log(view);
  })
  .catch(err=>{
    console.log(err);
  })
},[])

// async function submits() {

  // const obj= {
  //   "topic":ide
  // }
  axios.post("https://skilledge.herokuapp.com/courses/view_specific_lesson/",{
    "topic":ide
  },config).then((response)=>{
    // console.log(response);
    setView(response.data);
    console.log(views);
    // setLessonName(response.data.results.lessonName)
})
.catch(err=>{
  console.log(err);
})
// }



  var id1 = localStorage.getItem('courseid');

  // var id2 = ide.replaceAll('"' , '');

  const buytoken = localStorage.getItem("jwtToken");
  console.log("buytoken");
  const configuration = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }

  function buyapi(){
    // event.preventdefault();
    axios.put(
      `https://skilledge.herokuapp.com/wallet/buy_course/${ide}/`,{},configuration)
      .then(response=>{
        console.log(response);
        if(response.status===200){
          Navigate("/confirmation");}
      })
      .catch(err => {
        console.log(err);
        // console.log(err.response.data.msg);
      });
  }

  const tokeens = localStorage.getItem("jwtToken");
  console.log("tokens");
  const configure = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }

  function cartapi(){
    const obj = {
      "course": id1
    }
    axios.put("https://skilledge.herokuapp.com/cart/cart/",obj,configure)
    .then(response=>{
      console.log(response);
     
    })
    .catch(err => {
      console.log(err);
      // console.log(err.response.data.msg);
    });
  }
  

  return (
    <div>
    <Loginnav/>
       <div className='courseinfohead'>
        <div className='courseinfo'>
        <img src={thumbnail} alt='' className='courseinfoimg'/>
          <div className='coursedescriptioninfo'>
         <h4 className='topicname'>{topic}</h4>
          <p className='descriptofcourse'>{short_description}</p>
          <div className='rated'>
          <img src={starimg} alt='' className='ratestar'/>
          <p className='ratingtag'>{rating}</p>
          </div>
          </div>

          <div className='buycoursecard'>
            <img src={thumbnail} alt='' className='courseimg'/>
            <p className='pricetag'>{price}</p>
            <div className='buttontobuynaddtocart'>
              <button className='buybutton' onClick={buyapi}>Buy Now</button>
              <button className='cartbutton' onClick={cartapi}>Add to Cart</button>
            </div>
             {/* <div className='know'>
            <p style={{fontSize:"20px"}}> This course includes</p>
            <p> 9.5 hours on-demand video</p>
            <p>Full lifetime access</p>
            <p>Access on mobile and TV</p>
            </div> */}
            </div> 

        </div>
          <div className='desc'>
            <div id='info1' onClick={handleinfo1}>Info</div>
            <p id='info2' onClick={handleinfo2}>Catalog</p>
            <p id='info3' onClick={handleinfo3}>Reviews</p>
          </div>
          <div className='display'>
            <div id='display1'>
               <h2>Description</h2>
               <p style={{marginLeft:"83vw", width: "60vw"}}>{short_description}</p>
            </div>
            <div id='display2' className='less' >
              {view.map(lesson)}
            </div>
            <div id='display3'>
              <div className='reviewbox'>
                <h2>Students Feedback</h2>
                {views.map(userreview)}
              </div>
            </div>

          </div>

          
       </div> 
       <div>
{/* 
<div className='buycourse'>
  {buy.map((buycourse))};
</div> */}

       <h1 className='recent'>Explore More</h1>
          <div className='coursecard'>
          {explored.map((explore))}
             {/* <Coursecard 
              img={Courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />
            <Coursecard 
              img={Courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />
            <Coursecard 
              img={Courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />  */}
            {/* <Coursecard 
              img={Courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />
            <Coursecard 
              img={Courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />
            <Coursecard 
              img={Courseimage}
              image={starimg}
              rating="4.5"
              name="Become a Certified HTML, CSS, JavaScript Web Developer"
              description="Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications"
              price="499 $"
              explore="Explore"
            />  */}
            </div>
            </div>
            <div className='infofooter'>
            <Footer/>
            </div>
 </div>
  )
}

export default Courseinfo;
