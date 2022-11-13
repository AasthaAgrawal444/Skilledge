import React from 'react';
import './cartcard.css';
import Starimg from '../images/star.png'

function Cartcoursecard(props) {
  return (
    <>
    <div className='coursedatas'>
      <div className='course'>
        <img 
            src={props.thumbnail}
            className='courseimag'
            alt='courseimg'
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
      <div className='buyremovebuttons'>
        <button className='butbutton1'>Buy Now</button>
        <button className='remove'>Remove</button>
      </div>
    </div>
    </>
  )
}

export default Cartcoursecard;
