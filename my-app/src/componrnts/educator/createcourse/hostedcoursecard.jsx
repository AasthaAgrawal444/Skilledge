import React from 'react';
import './hostedcoursecard.css';
// import starimg from '../images/star.png';
import { Link, useNavigate } from 'react-router-dom';
import Hostedcourseinfo from '../hostedcourseinfo';

function Hostcoursecard(props){
const navigate = useNavigate();

  const Opencourseinfo = () => {
    //  navigate({
    //   pathname: "/courseinfo",
    //   state:{id:id} 
    //   })
    console.log(props.thumbnail);
      navigate('../hostedcourseinfo',{state:{thumbnail:props.thumbnail,
        id:props.id,
      topic:props.topic,
    short_description:props.short_description,
} });
}


  
  return (
    <>
    <div className='coursedata'>
      <div className='course'>
        <img 
            src={props.thumbnail}
            className='courseimg'
            alt='courseimg'
        />
        <div className='coursecont'>
            {/* <img 
                src={starimg}
                className='star'
                alt='stars'
            /> */}
            <p style={{display:"none"}}>{props.id}</p>
            {/* <p className='rate'>{props.rating}</p> */}
            <h2 className='coursename'>{props.topic}</h2>
            <p className='coursedes'>{props.short_description}</p>
            <div className='buttondet'>
            {/* <p className='price'>{props.price}</p> */}
          {/* <Link to='/courseinfo'> */}
          <button className='expbut' onClick={Opencourseinfo}>View Course</button>
         <Link to='/editcourse'> <button className='expbut'>Edit</button></Link>
          {/* </Link> */}
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hostcoursecard;
