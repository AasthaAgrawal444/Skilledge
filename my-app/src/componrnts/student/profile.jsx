import React,{useEffect, useState} from 'react';
import './profile.css';
import courseimage from '../images/courseimg.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
// import CustomSelect from './dropdown';
import Nav from '../navbar';
import Footer from '../footer';

function Profile() {
  const Navigate=useNavigate();
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [email,setEmail] = useState("");
  const [countrycode,setCountrycode] = useState("");
  const [phno,setPhno] = useState("");
  const [dob, setDob] = useState("");
  const [gender,setGender] = useState("");
  const [proimg, setProimg] = useState("");
  const [user,setUser] = useState("");
  
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
  setProimg(e.target.files[0]);
 
}

useEffect(()=> {
  var Username = localStorage.getItem("username");
  setUser(Username);
},[]);

  // const [selectValue, setSelectValue] = useState("");
  const [resmsg, setMsg] =useState(null);
  const token = localStorage.getItem("jwtToken");
  console.log("token");
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }


  //  var userinfo={

  //   "name":fname+lname,
  //   "user_name":username,
  //   // "picture":fd,
  //   "gender":gender,
  //   "dateOfBirth":dob,
  //   "mobile":phno,
  //   // "is_educator":""
  // };

  function handlecontinue(event){
     console.log(dob);
     console.log(gender);
     const fd= new FormData;
   
    //  // setImage(e.target.files);
     fd.append("picture",proimg);
     fd.append("name",fname+lname);
    //  fd.append("lname",lname);
     fd.append("user_name",user);
     fd.append("gender",gender);
     fd.append("dateOfBirth",dob);
     fd.append("mobile",phno);
     var object = {};
     fd.forEach((value,key)=> (object[key]=value));
     console.log(object);
    //  console.log(fd);
     event.preventDefault();

     
   axios.put(
    "https://skilledge.herokuapp.com/api/profile_details/",fd,config)
    .then(response=>{
      console.log(response);
      if(response.status===200){
        Navigate("/interest");}
    })
    .catch(err => {
      console.log(err);
      // console.log(err.response.data.msg);
    });
  }
    // const [data,setData] = useState({
    //     firstname:"",
    //     lastname:"",
    //     Emails:"",
    //     Countrycode: "",
    //     Phoneno:"",
    //     Gender:""
    //   })
    //   function validated(values){
    //     const x={};
    //     if(!values.firstname){
    //       x.firstname ='First name is necessary';
    //     }
    //     if(!values.lastname){
    //       x.lastname = 'Last Name is a necessary';
    //     }
    //     if(!values.Emails){
    //       x.Emails ='Enter an email';
    //     }
    //     if(!values.Countrycode){
    //       x.Countrycode = 'Enter country code';
    //     }
    //     if(!values.Phoneno){
    //       x.Phoneno = 'Phone no. is necessary';
    //     }
    //     if(!values.Gender){
    //       x.Gender = 'Gender is necessary';
    //     }
    //     return x;
    //   }
    //   const [gendata, setGendata] = useState("");
    //   function handlegenderdata(){
    //     setGendata(value);
        
    //   }
      // const options = [
      //   { key: 1, value: "Male"},
      //   { key: 2, value: "Female"},
      //   { key: 3, value: "Others"}
      // ];
      // const [record , setRecord]= useState([]);
      // const [errors, setErrors]= useState({});
      // const[ , setIsSigned]= useState(false);
    // function handleInputs(e){
    //   const name=e.target.name;
    //   const value=e.target.value;
    //   localStorage.setItem('mymail',setData.Emails);
    //   setErrors(validated(data));
    //   setData({...data,[name]:value});
    // }

    // function handleSubmits(e){
    //   e.preventDefault();
    //   const newRecord ={data};
    //   setRecord([...record, newRecord]);
    //   console.log(record);
    //   setErrors(validated(data));
    //   setIsSigned(true);
    // }


    
  return (
    <div>
    <Nav/>
      <form id='form2'>
      <input type='file' className='proiimg' name='image' onChange={handleInput8}></input>

             <input type='text' placeholder='First Name' name='fname' id='fname' value={fname} onChange={handleInput1}>
               
              </input>
               {/* <p id='error3'>{errors.fname}</p> */}
               <input type='text' placeholder='Last Name' name='lname' id='lname' value={lname} onChange={handleInput2}>
              
               </input>
               {/* <p id='error4'>{errors.lname}</p> */}
               <input type='email' placeholder='Email' name='email' id='emails' value={email} onChange={handleInput3}>
              
               </input>
               {/* <p id='error6'>{errors.emails}</p> */}
               <input type='text' placeholder=' ' name='code' id='code' value={countrycode} onChange={handleInput4}>
               
               </input>               
               {/* <p id='error5'>{errors.code}</p> */}
               <input type='text' placeholder='Phone number' name='phno' id='phno' value={phno} onChange={handleInput5}>
              
               </input>
               <input type='text' placeholder='dob' name='dob' id='dob' value={dob} onChange={handleInput7}>
               </input>

               <select className='city'   onChange={handleInput6}> 
                <option value={'M'}  className='opt1'
                // onClick={()=>{
                //   setSelectValue("Male")
                // }} 
                >Male</option>
                <option value={'F'}  className='opt2' 
                //  onClick={()=>{
                //   setSelectValue("Female")
                // }} 
                >Female</option>
                <option value={'O'} className='opt2'
                // onClick={()=>{
                //   setSelectValue("Others")
                // }} 
                >Others</option>
               </select>
               {/* {console.log(selectValue)} */}
               {/* <p id='error7'>{errors.phno}</p> */}
               {/* <select id="gender" >
                {/* <option className='opt1' onClick={()=>{
                  setGender("Male")
                }}>Male</option>                <option className='opt2' value="Female">Female</option>
                <option className='opt3' value="Others">Others</option>
               </select> */}
               {/* <CustomSelect/> */}
               {/* <selectComponent 
               options={options}
               onChange={(item) => setSelectedOption(item)}
               selectedKey={selectedOption}
               placeholder={"Gender"}
               /> */}

            
               {/* <input type='gender' placeholder='Gender' name='gender' id='gender'
               value={data.Gender}
               </input>*/}
               {/* <p id='error8'>{errors.gender}</p>  */}
               </form>
               <button type='submit' className='continuebutton' onClick={handlecontinue}>Continue</button>
              <Footer/>
    </div>
  )
}

export default Profile;
