import React from 'react';
import './mycoursescards.css';

function Mycoursecard(props) {
  return (
    <>
    <div className='coursedatas'>
      <div className='course'>
        <img 
            src={props.img}
            className='courseimag'
            alt='courseimg'
        />
      </div>
            <img 
                src={props.image}
                className='stars'
                alt='stars'
            />
            <p className='rating'>{props.rating}</p>
        <div className='coursescontent'>
            <h2 className='coursesnames'>{props.name}</h2>
            <p className='coursesdescript'>{props.description}</p>
      </div>
    </div>
    </>
  )
}

export default Mycoursecard;
