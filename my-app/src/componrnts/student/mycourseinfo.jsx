import React, { useState, useEffect } from 'react';
// import Course from '../images/courseimage.png';
import '../courses/courseinfo.css';
import Coursecard from '../student/coursecard';
import Courseimage from '../images/courseimg.png';
import starimg from "../images/star.png";
import axios from 'axios';
// import Buycoursecard from './buycoursecard';
import { useLocation , useNavigate} from "react-router-dom";
import Loginnav from '../student/loginnavbar';

function Mycourseinfo(){

    const navigate=useNavigate();
    const history=useLocation();

    console.log(history);

    useEffect(()=>{

    setThumbnail(history.state.thumbnail);
    setTopic(history.state.topic);
    setPrice(history.state.price);
    setRating(history.state.rating);
    // setId(history.state.id);
     localStorage.setItem('courseid', history.state.id);
    setShort_descripttion(history.state.short_description);
    },[])

const [id, setId] = useState("");
const [thumbnail, setThumbnail] = useState("");
const [topic, setTopic] = useState("");
const [short_description, setShort_descripttion] = useState("");
const [price, setPrice] = useState("");
const [rating, setRating]= useState("");


return(
        <>
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
          </div>
          <div className='allcontents'>
            <p className=''></p>
          </div>
          </div>
        </>
    )
}

export default Mycourseinfo;