import React, { useState } from 'react';
import Courseimg from '../../images/courseimg.png';
import './createcourse.css';
import axios from 'axios';


function Createcourse() {

    const fd= new FormData;
    const [hostlesson, setHostlesson] = useState("");
    const [topic, setTopic] = useState("");

    function handleData3(e){
        setTopic(e.target.value)
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
        const obje=
        {
            "topic":id,
            // "description": 
            // "lesson": 
        }
          console.log(obje);
        //   console.log(value);
        
      await axios.post("https://skilledge.herokuapp.com/courses/lesson/", fd,config).then(response=>{
        
        // if(response.status===200){
        //   Navigate("/");}
          setMsg(response.data.msg);
          console.log(response); 
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
      <p>{resmsg}</p>
        <img src={Courseimg} alt='' className='' style={{height:"40vh", width:"25vw"}}/>
       
        <div className='createlesson'>
            <p className='createlessontext'>Create Lessons</p>
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

export default Createcourse;
