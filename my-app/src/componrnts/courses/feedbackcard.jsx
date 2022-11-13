import React from 'react'

function Feedbackcard(props) {
  return (
    <div>
      <div style={{background:"blue", color:"#fff", height: "10vh", width:"15vw"}}>
    <img 
        src={props.thumbnail}
        alt=''
        className='userimg'
    />
    <p>{props.latest_review}</p>
    <p>{props.comment}</p>
    <p>rating</p>
      </div>
    </div>
  )
}

export default Feedbackcard;
