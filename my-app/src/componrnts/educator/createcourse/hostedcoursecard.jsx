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
    <div className='coursedatass'>
      <div className='cours'>
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
            <h2 className='coursenamed'>{props.topic}</h2>
            <p className='coursedesc'>{props.short_description}</p>
            <div className='buttondet'>
            {/* <p className='price'>{props.price}</p> */}
          {/* <Link to='/courseinfo'> */}
          <button className='expbutt' onClick={Opencourseinfo}>View Course</button>
         <Link to='/editcourse'> <button className='expbutton'>Edit</button></Link>
          {/* </Link> */}
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hostcoursecard;
