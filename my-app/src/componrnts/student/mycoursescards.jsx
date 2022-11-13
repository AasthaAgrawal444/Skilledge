import React from 'react';
import './mycoursescards.css';
import Starimg from '../images/star.png';
import { Link, useNavigate } from 'react-router-dom';
import Mycourseinfo from './mycourseinfo';

function Mycoursecard(props) {
  const navigate = useNavigate();

  const viewcourse = () => {
    //  navigate({
    //   pathname: "/courseinfo",
    //   state:{id:id} 
    //   })
    console.log(props.thumbnail);
      navigate('/mycourseinfo',{state:{thumbnail:props.thumbnail,
        id:props.id,
      topic:props.topic,
    short_description:props.short_description,
  price:props.price,
rating:props.rating,
educator_name:props.educator_name} });
     }
  return (
    <>
    <div className='coursedatas'>
      <div className='course'>
        <img 
            src={props.thumbnail}
            className='courseimag'
            alt='courseimg'
            onClick={viewcourse}

        />
      </div>
            <img 
                src={Starimg}
                className='stars'
                alt='stars'
            />
            <p className='rating'>{props.rating}</p>
        <div className='coursescontent'>
            <h2 className='coursesnames'>{props.topic}</h2>
            <p className='coursesdescript'>{props.short_description}</p>
            
      </div>
    </div>
    </>
  )
}

export default Mycoursecard;
