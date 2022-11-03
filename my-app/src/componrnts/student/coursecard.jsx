import React from 'react';
import './coursecard.css';

function Coursecard(props) {
  return (
    <>
    <div className='coursedata'>
      <div className='course'>
        <img 
            src={props.img}
            className='courseimg'
            alt='courseimg'
        />
        <div className='coursecont'>
            <img 
                src={props.image}
                className='star'
                alt='stars'
            />
            <p className='rate'>{props.rating}</p>
            <h2 className='coursename'>{props.name}</h2>
            <p className='coursedes'>{props.description}</p>
            <div className='pricedet'>
            <p className='price'>{props.price}</p>
            <button className='expbut'>{props.explore}</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Coursecard;
