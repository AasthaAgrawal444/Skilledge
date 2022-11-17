import React from 'react';
import Play from '../images/play.png';
import { Link, useNavigate } from 'react-router-dom';
import Viewcourse from './viewcourse';

function Lessoncard(props) {

  const navigate = useNavigate();
  const play = () => {
    console.log(props.file);
      navigate('/viewcourse',{state:{file:props.file,
        id:props.id,
      lessonName:props.lessonName,
    topic:props.topic,
    } });
    }
  


  return (
    <>
    <div className='lessons' style={{height:"7vh",paddingLeft:"2vw", width:"30vw",border:"1px solid black", dislay:"flex",justifyContent:"flex-start",alignItems:"flex-start", marginTop:"2vh"}}>
    {/* <p>{props.width}</p> */}
      <p className='less5'>{props.lessonName}</p>
      <p className='less1' style={{display:"none"}}>{props.id}</p>
      <p className='less2'>{props.length}</p>
      <img src={Play} alt='' style={{height:"4vh", width:"2vw", position:"absolute" , marginTop:"1.5vh", marginLeft:"25vw"}} onClick={play}/>
      {/* <iframe className='less3'
       src={props.file} style={{height:"40vh", width:"20vw"}}
      ></iframe> */}
      <p className='less4' style={{display:"none"}}>{props.topic}</p>

    </div>
    </>
  )
}

export default Lessoncard;
