import React, { useState,useEffect } from 'react';
import Sitting from '../images/sitting.png';
import Hostcoursecard from './createcourse/hostedcoursecard';
import './eduhome.css';
import axios from 'axios';
import Edunavbar from './edunavbar';

function hosted(hoscourse){
    return(
      <Hostcoursecard 
      id={hoscourse.id}
      thumbnail={hoscourse.thumbnail}
    //   rating={reccourse.rating}
      topic={hoscourse.topic}
      short_description={hoscourse.short_description}
    //   price={reccourse.price}
    />
    );
  }

function Educatorhome() {



  const [is_educator, setIs_educator] = useState("");

  // const [resmsg, setMsg] =useState(null);
  const taketoken = localStorage.getItem("jwtToken");
  console.log("taketoken");
  const configuration = {
    headers:{
      Authorization: `Bearer ${taketoken}`
    }
  }

 

  useEffect(()=> {
     axios.put(
     "https://skilledge.herokuapp.com/educator/become_educator/", (""), configuration)
     .then(response=>{
       // setRequest(response.status);
       setIs_educator(response.data)
       console.log(response);
      //  if(response.status===200){
      //   Navigate('/hostcourse');
      //  }
      //  setMsg(response.data.msg)
       console.log(response.status);
   })
   .catch(e => {
     console.log(e);
     // setMsg(e.data.msg)
  });
 },[])

const [hoscourse, setHoscourse] = useState([

]);

const [resmsg, setMsg] =useState(null);
  const token = localStorage.getItem("jwtToken");
  console.log("token");
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(()=>{
    axios.get("https://skilledge.herokuapp.com/educator/become_educator/",config).then((response)=>{
     console.log(response);
     setHoscourse(response.data);
  //    setLoading(true);
    }).catch(err=>{
        console.log(err);
    })
  },[])



 



  return (
    <div>
    <Edunavbar/>
      <div className='educatorhome'>
        <div className='hostmap'>
           {hoscourse.map(hosted)}
        </div>
        <div className='fleximg'>
            <img src={Sitting} alt='' className='homeimg'/>
        </div>
      </div>
    </div>
  )
}

export default Educatorhome;
