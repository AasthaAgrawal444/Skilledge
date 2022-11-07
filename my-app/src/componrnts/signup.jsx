import React,{useState} from 'react';
import './signup.css';
import Axios from 'axios';
import {Link,useNavigate}from "react-router-dom";
var er;

function Signup(){
    const [userSignup,setuserSignup] = useState({
      firstname:"",
      lastname:"",
      Username:"",
      Emails: "",
      passwords:"",
      cpasswords:""
    })
    const Navigate=useNavigate();
    function validated(values){
      const x={};
      if(!values.firstname){
        x.firstname ='First name is necessary';
      }
      if(!values.lastname){
        x.lastname = 'Last Name is a necessary';
      }
      if(!values.Username){
        x.Username ='Username is necessary';
      }
      if(!values.Emails){
        x.Emails = 'Enter an email';
      }
      if(!values.passwords){
        x.passwords = 'Password is necessary';
      }
      else if(values.passwords.length<8){
        x.passwords ='Password must be more than 8 characters!';
      }
      er=Object.keys(x).length;
    console.log(x);
    (er!==0)?isValue(false):isValue(true);
      return x;
    }

    async function submit(){
      const obj=
      {
        "name":userSignup.firstname+userSignup.lastname,
        "user_name":userSignup.Username, 
        "email":userSignup.Emails ,
        "password":userSignup.passwords, 
        "confirm_password":userSignup.passwords
        }

        console.log(obj);
        console.log(value);
        if(value){
        await Axios.post(
          "https://skilledge.herokuapp.com/api/new_user_registration/",obj)
          .then(response=>{
            setMsg(response.data.msg);
            console.log(response);
            if(response.status===200){
            Navigate("/otpcreate");}
            // setRequest(response.status);
            console.log(response.status);
        })
        .catch(err1 => {
          console.log(err1);
          console.log(err1.response.data.msg);
          setMsg(err1.response.data.msg)
        });
      }
    
   
    }
    const [record , setRecord]= useState([]);
    const [errors, setErrors]= useState({});
    const [resmsg, setMsg]= useState(null);
    const [value, isValue] = useState(false);

    const[ , setIsSigned]= useState(false);
    function handleInputs(e){
      const name=e.target.name;
      const value=e.target.value;
      localStorage.setItem('mymail',userSignup.Emails);
      setErrors(validated(userSignup));
      setuserSignup({...userSignup,[name]:value});
    }

    
   
    function handleSubmits(e){
      e.preventDefault();
      const newRecord ={userSignup};
      setRecord([...record, newRecord]);
      console.log(record);
      setErrors(validated(userSignup));
      setIsSigned(true);
    }

      return(
        <div className="Signup">
           <div className="contents">
              <div className="welcomed">
                <div>
                  <h1 className='welcom'>Welcome</h1>
                  <p className='please'>Please Log in in to your account with given details to continue</p>
                </div>
                <div>
                  <h4>Already have an account</h4>
                  <Link to='/Signin'><button className='lo'>Log in</button></Link>
                </div>
              </div>
           </div>

           <div className="form0">
             <h3 className='accoun'>Create account</h3>
             <p className='backmsg'>{resmsg}</p>
             <form id='form2' onSubmit={handleSubmits}>
             <input type='text' placeholder='First Name' name='firstname' id='firstname'
               value={userSignup.firstname}
               onChange={handleInputs}></input>
               <p id='error3'>{errors.firstname}</p>
               <input type='text' placeholder='Last Name' name='lastname' id='lastname'
               value={userSignup.lastname}
               onChange={handleInputs}></input>
               <p id='error4'>{errors.lastname}</p>
               <input type='text' placeholder='Username' name='Username' id='Username'
               value={userSignup.Username}
               onChange={handleInputs}></input>
               <p id='error5'>{errors.Username}</p>
               <input type='email' placeholder='Email' name='Emails' id='Emails'
               value={userSignup.Emails}
               onChange={handleInputs}></input>
               <p id='error6'>{errors.Emailsls}</p>
               <input type='password' placeholder='Password' name='passwords' id='passwords'
               value={userSignup.passwords}
               onChange={handleInputs}></input>
               <p id='error7'>{errors.passwords}</p>
               <input type='password' placeholder='confirm Password' name='cpasswords' id='cpasswords'
               value={userSignup.cpasswords}
               onChange={handleInputs}></input>
               <p id='error8'>{errors.cpasswords}</p>
               <button className='creates' type="submit" onClick={submit}>Sign Up as Student</button>
               
               <Link to= '/otpcreate'><button className='createm' type="submit">Sign Up as Mentor</button></Link>
              </form>
            </div>
       </div>
      );
  }

export default Signup;
