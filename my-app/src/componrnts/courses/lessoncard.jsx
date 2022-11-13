import React from 'react'

function Lessoncard(props) {
  return (
    <>
    <div className='lessons' style={{height:"8vh", width:"30vw", padding:"2px",border:"1px solid black" }}>
    {/* <p>{props.width}</p> */}
      <p className='less5'>{props.lessonName}</p>
      <p className='less1' style={{display:"none"}}>{props.id}</p>
      <p className='less2' style={{display:"none"}}>{props.length}</p>
      <p className='less3' style={{display:"none"}}>{props.file}</p>
      <p className='less4' style={{display:"none"}}>{props.topic}</p>

    </div>
    </>
  )
}

export default Lessoncard;
