import React, { useState,useEffect } from 'react';
import Sitting from '../images/sitting.png';
import Hostcoursecard from './createcourse/hostedcoursecard';
import './eduhome.css';
import axios from 'axios';

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

function Eduhome() {

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
      <div className='educatorhome'>
        <div>
           {hoscourse.map(hosted)}
        </div>
        <div>
            <img src={Sitting} alt='' className='homeimg'/>
        </div>
      </div>
    </div>
  )
}

export default Eduhome;
