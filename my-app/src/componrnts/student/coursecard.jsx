import React from 'react';
import './coursecard.css';
import starimg from '../images/star.png';
import { Link, useNavigate } from 'react-router-dom';

function Coursecard(props){
const navigate = useNavigate();

  const Opencourse = () => {
    //  navigate({
    //   pathname: "/courseinfo",
    //   state:{id:id} 
    //   })
    console.log(props.thumbnail);
      navigate('/courseinfo',{state:{thumbnail:props.thumbnail,
        id:props.id,
      topic:props.topic,
    short_description:props.short_description,
  price:props.price,
rating:props.rating,
educator_name:props.educator_name} });
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
            <img 
                src={starimg}
                className='star'
                alt='stars'
            />
            <p style={{display:"none"}}>{props.id}</p>
            <p className='rate'>{props.rating}</p>
            <h2 className='coursename'>{props.topic}</h2>
            <p className='coursedes'>{props.short_description}</p>
            <div className='pricedet'>
            <p className='price'>{props.price}</p>
          {/* <Link to='/courseinfo'> */}
          <button className='expbut' onClick={Opencourse}>Explore</button>
          {/* </Link> */}
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Coursecard;
