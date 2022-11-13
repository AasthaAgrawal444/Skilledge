import React from 'react';
import Courseimg from '../../images/courseimg.png';
import './createcourse.css'


function Editcourse() {
  return (
    <div>
      <div className='lessons'>
        <img src={Courseimg} alt='' className='' style={{height:"40vh", width:"25vw"}}/>
       
        <div className='createlesson'>
            <p className='createlessontext'>Edit Lessons</p>
            <input type='text' placeholder='Name of Lesson' className='lesson'/>
            {/* <input type='text' placeholder='Duration' className='duration'/> */}
            <div className='upload'>
               <div className='add'>
                  <p className='addvideo'>+</p>
                  <p>Upload Video</p>
                </div>
                {/* <p className='addlessons'>Add More Lesson</p> */}
                <input type='file' className='addlesson' name='' ></input>
                <button className='hostbutton' type='submit'>Host Course</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Editcourse;
