import React, { useState } from 'react';
import Landingpg from '../landingpg';
import './hostcourse.css';
import Hostimg from '../images/host.png';
import Edunavbar from './edunavbar';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
// import Loginnav from '../student/loginnavbar';
// import Edunavbar from './edunavbar';
import Footer from '../footer';


function Hostcourse() {
    const fd= new FormData;
    const Navigate=useNavigate();
    const [createtopic, setCreatetopic] = useState("");
    const [topicdes, setTopicdes] = useState("");
    const [price, setPrice] = useState("");
    const [coursecateg, setCoursecateg] = useState("");
    const [image, setImage] = useState("");

    function handleData1(e){
        console.log(e.target.files); 
        setImage(e.target.files[0]);
        // setImage(e.target.files);
        // fd.append('image',files[0])
        // console.log(fd);
    }
    function handleData2(e){
        setCreatetopic(e.target.value)
    }
function handleData3(e){
    setTopicdes(e.target.value)
}
function handleData4(e){
    setPrice(e.target.value)
}

function handleoptions(e){
setCoursecateg(e.target.value)
}

const [hostedcourseid, setHostedcourseid] = useState("");
const [resmsg, setMsg] =useState(null);
const token = localStorage.getItem("jwtToken");
const config = {
  headers:{
    Authorization: `Bearer ${token}`
  }
}

// var hostinfo={
//     "category":coursecateg,
//     "topic":createtopic,
//     "thumbnail":fd,
//     "short_description":topicdes,
//     "price":price,
//   };

  function handlecontinue(event){
    event.preventDefault();
    fd.append("thumbnail",image);
     fd.append("topic",createtopic);
     fd.append("category",coursecateg);
     fd.append("price",price);
     fd.append("short_description",topicdes);
     var object = {};
     fd.forEach((value,key)=> (object[key]=value));
     console.log(object);
   
   axios.post(
    "https://skilledge.herokuapp.com/courses/course/",fd,config)
    .then(response=>{

      console.log(response.data);
      setHostedcourseid(response.data.id);
      localStorage.setItem("hostcourseid",response.data.id);
      setMsg(response.data.msg)
       if(response.status===200){
         Navigate("/createcourse");
        }
    })
    .catch(err => {
      console.log(err);
    //   if(response.status===200){
            // Navigate("/home");
            
        // }

    //   console.log(err.data.msg);
    //   setMsg(err.response.data.msg);
    });
  }
  localStorage.getItem("hostcourseid",hostedcourseid);

    // const [data,setData] = useState({


  return (
    <div>
    <Edunavbar/>

    <div className='hostcoursespg'>
    <img src={Hostimg} alt='' className='hostcourseimg'/>
      <div className='host'>
         <div className='thumbnailbox'>
         <div className='thumbbox'>
            <div className='Addsign'>+</div>
            <input type='file' id='topicimg' name='image' onChange={handleData1}></input>
            <div className='addtext'>Add Thumbnails</div>
          </div>
         </div>
         <div className='createcoursetopic'>
            <p>Topic</p>
            <input type='text' name='createtopic'  id='createtopic' value={createtopic} placeholder='Create a topic for the course' onChange={handleData2}></input>
         </div>
         <div className='topicdescription'>
            <p>Description</p>
            <input type='text' name='topicdes' id='topicdes' value={topicdes} placeholder='Create a description for the course' onChange={handleData3}></input>
         </div>
         <div className='coursecategory'>
         <select name='coursecateg' id='coursecateg' placeholder='Categories'
          onChange={handleoptions}>
            <option value={1}>Development</option>
            <option value={2}>Business</option>
            <option value={3}>Finance & Accounting</option>
            <option value={4}>IT & Software</option>
            <option value={5}>Office Productivity</option>
            <option value={6}>Personal Development</option>
            <option value={7}>Design</option>
            <option value={8}>Marketing</option>
            <option value={9}>Health & Fitness</option>
            <option value={10}>Music</option>
            <option value={11}>Teaching & Academics</option>
            </select>
         </div>
         <div className='addpricecategory'><input type='text' name='price' value={price} id='addprice' placeholder='Add Price' onChange={handleData4}></input></div>
         <button className='coursecontinue' onClick={handlecontinue}>Continue</button>
         <p className='hostmsg'>{resmsg}</p>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Hostcourse;
