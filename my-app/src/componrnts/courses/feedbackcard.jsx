import React from 'react'

function Feedbackcard(props) {
  return (
    <div>
      <div style={{background:"#293593", color:"#fff", height: "10vh", width:"15vw", borderRadius:"6px", marginLeft:"10vw"}}>
    {/* <img 
        src={props.thumbnail}
        alt=''
        className='userimg'
    /> */}
    <p style={{display:"none"}}>{props.course}</p>
    <p>{props.latest_review}</p>
    <p>{props.comment}</p>
    <p style={{display:"none"}}>{props.user}</p>
    <p style={{display:"none"}}>{props.sender}</p>
    <p>rating</p>
      </div>
    </div>
  )
}

export default Feedbackcard;
