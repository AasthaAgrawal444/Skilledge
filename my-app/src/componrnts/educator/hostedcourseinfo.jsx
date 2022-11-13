// import React from 'react'
import React, { useState, useEffect } from 'react';
// import Course from '../images/courseimage.png';
import Hostcoursecard from './createcourse/hostedcoursecard';
// import './courseinfo.css';
import Courseimage from '../images/courseimg.png';
import starimg from "../images/star.png";
import axios from 'axios';
// import Buycoursecard from './buycoursecard';
import { useLocation , useNavigate} from "react-router-dom";
import Loginnav from '../student/loginnavbar';
import Hostedlessoncard from './hostedlessoncard';


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

function hosted(hosteddata){
  return(
    <Hostedlessoncard
      key={hosteddata.id}
      lesson={hosteddata.lesson}
      lessonName={hosteddata.lessonName}
    />
  )
}

    const [hosteddata, setHosteddata] = useState([])
    const [hosts, setHosts] = useState("");
    const [id, setId] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [topic, setTopic] = useState("");
    const [short_description, setShort_descripttion] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating]= useState("");
    
    const token = localStorage.getItem("jwtToken");
    console.log("token");
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
    // setId(history.state.id);
     localStorage.setItem('courseid', history.state.id);
    setShort_descripttion(history.state.short_description);
    },[])

    useEffect(()=>{
      axios.get()
    })

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
         <div className=''>
            <div>
                <h2 className='hostcourseinfo'>Info</h2>
                <p>Description</p>
                <p>{short_description}</p>
            </div>
            <div>
                <p>Catalog</p>
                {hosteddata.map(hosted)}
            </div>
            <div>
                <p>Student Feedback</p>

            </div>
         </div>
    </div>
    </>
  )
}

export default Hostedcourseinfo;
