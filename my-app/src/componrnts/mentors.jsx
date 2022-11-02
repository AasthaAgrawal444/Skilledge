import React from 'react'

function Mentors(props) {
  return (
    <>
    <div className='mentordata'>
      <img 
        src={props.img}
        className='mentor'
        alt='mentorimg'
      />
      <p className='mentitle'>{props.title}</p>
      <p className='mensubhead'>{props.subhead}</p>
    </div>
    </>
  )
}

export default Mentors
