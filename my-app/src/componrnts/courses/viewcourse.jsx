import React, { useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';


function Viewcourse() {

    const [id, setId] = useState("");
    const [file, setFile] = useState("");
    const [lessonName, setLessonName] = useState("");


    const history=useLocation();
    useEffect(()=>{
        console.log("hello");
      console.log(history);
      setId(history.state.id);
      setLessonName(history.state.lessonName);
      setFile(history.state.file);
});
  return (
    <div>
    {lessonName}
      {/* {file} */}
      <iframe className='less3'
       src={file} style={{height:"50vh", width:"50vw"}}
      ></iframe>

    </div>
  )
}

export default Viewcourse;
