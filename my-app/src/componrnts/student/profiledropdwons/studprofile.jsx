import React,{useEffect, useState} from 'react';
import './studprofile.css';
// import courseimage from '../images/courseimg.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
// import CustomSelect from './dropdown';
import Edit from '../../images/edit.png';
import Nav from '../../navbar';
import Loginnav from '../loginnavbar';
import Footer from '../../footer';
import Profile from '../../images/profile.png'

function Studprofile() {
  const fd= new FormData;
  const Navigate=useNavigate();
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [email,setEmail] = useState("");
  const [countrycode,setCountrycode] = useState("");
  const [phno,setPhno] = useState("");
  const [dob, setDob] = useState("");
  const [gender,setGender] = useState("");
  const [profimg,setProfimg] = useState("");


//   const [editable, setEditable] = useState("");
//   const[show, setShow] = useState("");
//   const[show1,setShow1] = useState("");
//   const[show2,setShow2] = useState("");
  
  function handleInput1(e){
    setFname(e.target.value);
  }
  function handleInput2(e){
    setLname(e.target.value);
  }
  function handleInput3(e){
    setEmail(e.target.value);
  }
  function handleInput4(e){
    setCountrycode(e.target.value);
  }
  function handleInput5(e){
    setPhno(e.target.value);
  }
  function handleInput6(e){
    setGender(e.target.value);
    console.log(gender)
  }
  function handleInput7(e){
    setDob(e.target.value);
    
  }
  // const [image, setImage]= useState("");
function handleInput8(e){
  console.log(e.target.files); 
  const files=e.target.files
  // setImage(e.target.files);
  fd.append('image',files[0])
  console.log(fd);
}
  // const [selectValue, setSelectValue] = useState("");
  const [resmsg, setMsg] =useState(null);
  const token = localStorage.getItem("jwtToken");
  console.log("token");
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }

  useEffect(()=>{
    axios.get("https://skilledge.herokuapp.com/api/profile_details/",config).then((response)=>{
     console.log(response);
     setFname(response.data.name);
     setLname(response.data.name);
     setPhno(response.data.mobile);
     setProfimg(response.data.picture);
     setDob(response.data.dateOfBirth);
     setGender(response.data.gender);
    }).catch(err=>{
        console.log(err);
    })
  },[])

   var userinfo={
    "name":fname+lname,
    "user_name":localStorage.getItem("username"),
    "picture":fd,
    "gender":gender,
    "dateOfBirth":dob,
    "mobile":phno,
    "is_educator":" "
  };

  function handlecontinue(event){
    // event.preventDefault();
     console.log(dob);
     console.log(gender);
//     setFname("")
//     setLname("")
//     setEmail("")
//     setCountrycode("")
//    setPhno("")
//    setDob("")
//    setGender("")
   axios.put(
    "https://skilledge.herokuapp.com/api/profile_details/",JSON.stringify(userinfo),config)
    .then(response=>{
console.log("jsdkjbv")
console.log(response.data)
        setFname(response.data.split(" ").name);
        setLname(response.data.split(" ").name);
        setPhno(response.data.mobile);
        fd(response.data.picture);
        setDob(response.data.dateOfBirth);
        setGender(response.data.gender);
        localStorage.setItem("profile", response.data.picture);
    //   console.log(response);
    //   if(response.status===200){
    //     Navigate("/interest");}
    }).catch((err)=>{
        console.log(err);
    })
  }
   
        
   

    
  return (
    <div>
    {/* <Loginnav/> */}
      <form id='form20'>
      <img src={profimg} className='editprof'/>
      <input type='file' className='proimgg' name='image' onChange={handleInput8}></input>
            <img src={Edit} alt='' className='editimg' style={{height:"30px", width:"30px"}} />
              <div className='namesedit'>
             <input type='text' placeholder='First Name' name='fname' id='fnames' value={fname} onChange={handleInput1}>
               
              </input>
               {/* <p id='error3'>{errors.fname}</p> */}
               <input type='text' placeholder='Last Name' name='lname' id='lnames' value={lname} onChange={handleInput2}>
              
               </input>
               </div>
               {/* <p id='error4'>{errors.lname}</p> */}
               {/* <input type='email' placeholder='Email' name='email' id='emails' value={email} onChange={handleInput3}>
              
               </input> */}
               {/* <p id='error6'>{errors.emails}</p> */}
               {/* <input type='text' placeholder=' ' name='code' id='code' value={countrycode} onChange={handleInput4}>
               
               </input>                */}
               {/* <p id='error5'>{errors.code}</p> */}
               <input type='text' placeholder='Phone number' name='phno' id='phnos' value={phno} onChange={handleInput5}>
              
               </input>
               <input type='text' placeholder='dob' name='dob' id='dobs' value={dob} onChange={handleInput7}>
               </input>

               <select className='cities'   onChange={handleInput6}> 
                <option value={'M'}  className='opt1'
              
                >Male</option>
                <option value={'F'}  className='opt2' 
                
                >Female</option>
                <option value={'O'} className='opt2'
              
                >Others</option>
               </select>
               <button type='submit' className='continuebuttonn' onClick={handlecontinue}>Continue</button>

               </form>
               <div className='editfooter' style={{marginTop:"10vh"}}>
            <Footer/> 
            </div> 
    </div>
  )
}

export default Studprofile;
