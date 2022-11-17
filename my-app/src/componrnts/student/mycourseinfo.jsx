import React, { useState, useEffect } from 'react';
// import Course from '../images/courseimage.png';
import '../courses/courseinfo.css';
import './mycoursesinfo.css';
import Coursecard from '../student/coursecard';
import Courseimage from '../images/courseimg.png';
import starimg from "../images/star.png";
import axios from 'axios';
// import Buycoursecard from './buycoursecard';
import { useLocation , useNavigate} from "react-router-dom";
import Loginnav from '../student/loginnavbar';
import Lessoncard from '../courses/lessoncard';
import Star1 from '../images/stars.png';
import Star from '../images/star.png';


function lessons(vieww){
  return(
    <Lessoncard
      key={vieww.id}
      // id={vieww.id}
      lessonName={vieww.lessonName}
      topic={vieww.topic}
      length={vieww.length}
      file={vieww.file}
    />
  )
}


function Mycourseinfo(){

    const navigate=useNavigate(); 
    const history=useLocation();
    console.log(history);

 
    const [giverev, setGiverev] = useState("");
  
     const [i, setI] = useState(1);
    const [vieww, setVieww] = useState([ ]);

    const [id, setId] = useState("");
const [thumbnail, setThumbnail] = useState("");
const [topic, setTopic] = useState("");
const [short_description, setShort_descripttion] = useState("");
const [price, setPrice] = useState("");
const [rating, setRating]= useState("");

    function handlerev(e){
      setGiverev(e.target.value);
    }
    
    function handledata1(){
     document.getElementById('info0').style.display="block";
     document.getElementById("info00").style.display="none";
    }

    function handledata2(){
      document.getElementById('info0').style.display="none";
      document.getElementById("info00").style.display="block";
    }

    function rate1(){
      document.getElementById("rate02").style.display="none";
      document.getElementById("rate01").style.display="block";
      setI(i+1);
      console.log(i);
    }

    function rate2(){
      document.getElementById("rate04").style.display="none";
      document.getElementById("rate03").style.display="block";
      setI(i+1);
      console.log(i);
    }

    function rate3(){
      document.getElementById("rate06").style.display="none";
      document.getElementById("rate05").style.display="block";
      setI(i+1);
      console.log(i);
    }

    function rate4(){
      document.getElementById("rate08").style.display="none";
      document.getElementById("rate07").style.display="block";
      setI(i+1);
      console.log(i);
    }

    function rate5(){
      document.getElementById("rate010").style.display="none";
      document.getElementById("rate09").style.display="block";
      setI(i+1);
      console.log(i);
    }

    const token = localStorage.getItem("jwtToken");
    console.log("token");
    const config = {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }

    useEffect(()=>{

    setThumbnail(history.state.thumbnail);
    setTopic(history.state.topic);
    setPrice(history.state.price);
    setRating(history.state.rating);
    setId(history.state.id)
    // setId(history.state.id);
     localStorage.setItem('coursesidd', history.state.id);
    setShort_descripttion(history.state.short_description);
    },[])

    var myid = localStorage.getItem("coursesidd");


useEffect(()=>{
    axios.post("https://skilledge.herokuapp.com/courses/view_specific_lesson/",{
    "topic":myid
  },config).then((response)=>{
    // console.log(response);
    setVieww(response.data);
    console.log(vieww);
    console.log(myid);
    // setLessonName(response.data.results.lessonName)
})
.catch(err=>{
  console.log(err);
})
},[])

axios.post("https://skilledge.herokuapp.com/courses/rate_course/",{
  "course":myid,
  "latest_review":{i},
  "comment":giverev,
},config).then((response)=>{
  console.log(response);
  console.log(myid);
  // setLessonName(response.data.results.lessonName)
})
.catch(err=>{
console.log(err);
})




    var user = localStorage.getItem("username");
    var proimg = localStorage.getItem("proimg");
console.log(myid);



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
            <p className='inf1' onClick={handledata1}>Info</p>
            <p className='inf2' onClick={handledata2}> Catalog</p>
          </div>
          <div>
            <div id='info0'>{short_description}</div>
            <div id='info00'>{vieww.map(lessons)}</div>
          </div>
          <div className='revcontent'>
          <p className='alllcntent'>Reviews</p>
          <div className='rev'>
          <div className='aboutuser'>
            {user}
          </div>
          <div className='ratin'>
          <p>Rate</p>
          <div className='raters'>
         
          <div className='rates'>
          <img src={Star} alt='' id='rate01'/>
          <img src={Star} alt='' id='rate03'/>
          <img src={Star} alt='' id='rate05'/>
          <img src={Star} alt='' id='rate07'/>
          <img src={Star} alt='' id='rate09'/>
          </div>
          <div className='rates1'>
          <img src={Star1} alt='' id='rate02' onClick={rate1}/>
          <img src={Star1} alt='' id='rate04'  onClick={rate2}/>
          <img src={Star1} alt='' id='rate06'  onClick={rate3}/>
          <img src={Star1} alt='' id='rate08'  onClick={rate4}/>
          <img src={Star1} alt='' id='rate010' onClick={rate5}/>
          </div>
          </div>
          </div>
          <p className='giverev'>Comments</p>
          <input type='text' name='giverev' value={giverev} id='giverev' onChange={handlerev} />
          </div>
          </div>
          </div>
        </>
    )
}

export default Mycourseinfo;