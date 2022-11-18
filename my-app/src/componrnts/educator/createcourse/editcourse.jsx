import React,{useState} from 'react';
import Courseimg from '../../images/courseimg.png';
import './createcourse.css';
import axios from 'axios';
import {Link,useNavigate}from "react-router-dom";


function Editcourse() {


  const fd= new FormData;
  const Navigate = useNavigate();
  const [hostlesson, setHostlesson] = useState("");
  const [topic, setTopic] = useState("");

  function handleData3(e){
      setTopic(e.target.value)
      console.log(topic);
  }
  function handleData4(e){
      console.log(e.target.files); 
      setHostlesson(e.target.files[0]);
  }

  const [resmsg, setMsg] =useState(null);
  const token = localStorage.getItem("jwtToken");
  console.log("token");
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }


  async function submits() {

      var id=localStorage.getItem('hostcourseid');

      console.log(id);
      fd.append("topic",id);
      fd.append("description",topic);
      fd.append("lesson",hostlesson);
      var object = {};
      fd.forEach((value,key)=> (object[key]=value));
      console.log(object);
      console.log(fd);
    await axios.post("https://skilledge.herokuapp.com/courses/lesson/", fd,config).then(response=>{
      setMsg(response.data.msg);
      console.log(response); 
      if(response.status===200){
        Navigate("/educatorhome");}
       
        })
    .catch(err => {
    console.log(err);
  //   console.log(err.data.msg);
  //   setMsg(err.data.msg)
    });
   
   }

  return (
    <div>
      <div className='lessons'>
        <img src={Courseimg} alt='' className='' style={{height:"40vh", width:"25vw"}}/>
       
        <div className='createlesson'>
            <p className='createlessontext'>Edit Lessons</p>
            <input type='text' placeholder='Name of Lesson' className='lesson' name='topic' value={topic} onChange={handleData3}/>
            {/* <input type='text' placeholder='Duration' className='duration'/> */}
            <div className='upload'>
               <div className='add'>
                  <p className='addvideo'>+</p>
                  <p>Upload Video</p>
                </div>
                {/* <p className='addlessons'>Add More Lesson</p> */}
                <input type='file' className='addlesson' name='lesson' onChange={handleData4} ></input>
                <button className='hostbutton' type='submit' onClick={submits}>Host Course</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Editcourse;
