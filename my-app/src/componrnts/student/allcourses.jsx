import React, { useState, useEffect } from 'react';
import courseimage from '../images/courseimg.png';
import Mycoursecard from './mycoursescards.jsx';
import starimg from '../images/star.png';
import './mycourses.css'
import Mycourses from './mycourses';
import Loginnav from './loginnavbar';
import Footer from '../footer';
import axios from 'axios';

function Allcourse(course){
    return(
        <Mycoursecard 
        thumbnail={course.thumbnail}
        rating={course.rating}
        topic={course.topic}
        short_description={course.short_description}
      />
    )
}

function Allcourses(){

    const [course, setCourse]= useState([ ]);
    const [id,setId] = useState("")
    const [cat, setCat] = useState("")
    const [top, setTop] = useState("")
    const [educator_mail, setEducator_mail] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [eduname, setEduname] = useState("")


    const token = localStorage.getItem("jwtToken");
    console.log("token");
    const config = {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
  
    useEffect(()=>{
      axios.get("https://skilledge.herokuapp.com/courses/purchased_courses/",config).then((response)=>{
       console.log(response);
       setCourse(response.data);
       setId(response.data.id);
       setCat(response.data.category);
       setTop(response.data.topic);
       setEducator_mail(response.data.educator_mail);
       setDesc(response.data.short_description);
       setImg(response.data.thumbnail);
       setPrice(response.data.price);
       setRating(response.data.rating);
       setEduname(response.data.educator_name);

      }).catch(err=>{
          console.log(err);
      })
    },[])

    return(
        <>
        {/* <Loginnav/> */}
        <Mycourses/>
<div className='coursecard'>
<div className='card1' style={{display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}>
      {course.map(Allcourse)};
  </div>
      </div>
      <div className='mycoursesfooter' style={{marginTop:"70vh"}}>
      <div>
      <Footer/>
      </div>
      </div>
      </>
    )
}
export default Allcourses;