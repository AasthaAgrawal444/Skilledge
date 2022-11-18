// import React from 'react'
import React, { useState, useEffect } from 'react';
// import Course from '../images/courseimage.png';
import Hostcoursecard from './createcourse/hostedcoursecard';
// import './courseinfo.css';
import Courseimage from '../images/courseimg.png';
import './hostedcourseinfo.css';
import starimg from "../images/star.png";
import axios from 'axios';
// import Buycoursecard from './buycoursecard';
import { useLocation , useNavigate} from "react-router-dom";
import Loginnav from '../student/loginnavbar';
import Hostedlessoncard from './hostedlessoncard';
import Lessoncard from '../courses/lessoncard';
import Feedbackcard from '../courses/feedbackcard';

 function Hostedcourseinfo() {
 function Hostedinfo(hosts){
  return(
  <Hostcoursecard
  key={hosts.id}
  id={hosts.id}
    thumbnail={hosts.thumbnail}
    // rating={hosts.rating}
    topic={hosts.topic}
    short_description={hosts.short_description}
    // price={explored.price}
/>
  )
}

function lesson(view){
  return(
    <Lessoncard
      key={view.id}
      id={view.id}
      lessonName={view.lessonName}
      topic={view.topic}
      length={view.length}
      file={view.file}
    />
  )
}


function hosted(hosteddata){
  return(
    <Hostedlessoncard
      key={hosteddata.id}
      lesson={hosteddata.lesson}
      lessonName={hosteddata.lessonName}
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
      user={views.user}
      sender={views.sender}
    />
  )
  
}

const [views, setViews] = useState([]);

    const [view, setView] = useState([]);
    const [hosteddata, setHosteddata] = useState([])
    const [hosts, setHosts] = useState("");
    const [id, setId] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [topic, setTopic] = useState("");
    const [short_description, setShort_descripttion] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating]= useState("");
    
    const token = localStorage.getItem("jwtToken");
    const config = {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
  
   
  
    const history=useLocation();
    useEffect(()=>{

    console.log(history.state);

    setThumbnail(history.state.thumbnail);
    setTopic(history.state.topic);
    // setPrice(history.state.price);
    // setRating(history.state.rating);
    setId(history.state.id);
     localStorage.setItem('courseid', history.state.id);
    setShort_descripttion(history.state.short_description);
    },[])

    var hostid = localStorage.getItem('courseid');

    useEffect(()=>{
      axios.post("https://skilledge.herokuapp.com/courses/view_specific_lesson/",{
      "topic":hostid
    },config).then((response)=>{
      // console.log(response);
      setView(response.data);
      console.log(view);
      console.log(hostid);
      // setLessonName(response.data.results.lessonName)
  })
  .catch(err=>{
    console.log(err);
  })
  },[])

  useEffect(()=>{
    console.log("hello");
    axios.get(`https://skilledge.herokuapp.com/courses/course_feedback/${hostid}/`,config).then((response)=>{
      console.log(response);
      setViews(response.data);
      console.log(views);
  })
  .catch(err=>{
    console.log(err);
  })
},[])
  

  return (
    <>
    <div>
      <div className='courseinfohead'>
        <div className='courseinfo'>
        <img src={thumbnail} alt='' className='courseinfoimg'/>
          <div className='coursedescriptioninfo'>
         <h4 className='topicname'>{topic}</h4>
          <p className='descriptofcourse'>{short_description}</p>
          </div>
          </div>
         </div>
         <div className='hostedcoursesinfo'>
            <div style={{marginLeft:"10vw"}}>
                <h2 className='hostcourseinfo'>Info</h2>
                <h2 style={{marginLeft:"-78vw"}}>Description</h2>
                <p style={{marginLeft:"-80vw"}}>{short_description}</p>
            </div>
            <div className='hostedlsn' style={{marginLeft:"10vw"}}>
                <h2 style={{marginLeft:"-78vw",  color: "#293593", marginTop:"8vh"}}>Catalog</h2>
                {view.map(lesson)}
            </div>
            <div>
                <h2 style={{marginLeft:"-78vw",  color: "#293593", marginTop:"8vh", marginLeft:"-65vw"}}>Student Feedback</h2>
                {views.map(userreview)}
            </div>
         </div>
    </div>
    </>
  )
}

export default Hostedcourseinfo;
