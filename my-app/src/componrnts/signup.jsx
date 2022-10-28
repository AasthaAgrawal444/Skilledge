import react from 'react';
import './signup.css';
import Axios from 'axios';
import {Link} from "react-router-dom";

function Signup(){
    const [userSignup,setuserSignup] = react.useState({
      firstname:"",
      lastname:"",
      Username:"",
      Emails: "",
      passwords:"",
      cpasswords:""
    })
    async function submit(){
      const obj=
      {
        "name":userSignup.firstname+userSignup.lastname,
        "user_name":userSignup.Username, 
        "email":userSignup.Emails ,
        "password":userSignup.passwords, 
        "confirm_password":userSignup.passwords
        }
    
    const response = await Axios.post("https://skilledge.herokuapp.com/api/new_user_registration/", obj);
    console.log(response);
    }
    const [record , setRecord]= react.useState([]);

    const [errors, setErrors]= react.useState({});

    const[ , setIsSigned]=react.useState(false);
    function handleInputs(e){
      const name=e.target.name;
      const value=e.target.value;
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

    function validated(values){
      const errors={};
      if(!values.firstname){
        errors.firstname ='First name is necessary';
      }
      if(!values.lastname){
        errors.lastname = 'Last Name is a necessary';
      }
      if(!values.Username){
        errors.Username ='Username is necessary';
      }
      if(!values.Emails){
        errors.Emails = 'Enter an email';
      }
      if(!values.passwords){
        errors.passwords = 'Password is necessary';
      }
      else if(values.passwords.length<5){
        errors.passwords ='Password must be more than 5 characters!';
      }
      else if(values.passwords.length>8){
        errors.passwords ='Password must be less than 8 characters!';
      }
      return errors;
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
             <form id='form2' onSubmit={handleSubmits}>
             <input type='text' placeholder='First Name' name='firstname' id='firstname'
               value={userSignup.firstname}
               onChange={handleInputs}></input>
               <p id='error'>{errors.firstname}</p>
               <input type='text' placeholder='Last Name' name='lastname' id='lastname'
               value={userSignup.lastname}
               onChange={handleInputs}></input>
               <p id='error'>{errors.lastname}</p>
               <input type='text' placeholder='Username' name='Username' id='Username'
               value={userSignup.Username}
               onChange={handleInputs}></input>
               <p id='error'>{errors.Username}</p>
               <input type='email' placeholder='Email' name='Emails' id='Emails'
               value={userSignup.Emails}
               onChange={handleInputs}></input>
               <p id='error'>{errors.Emailsls}</p>
               <input type='password' placeholder='Password' name='passwords' id='passwords'
               value={userSignup.passwords}
               onChange={handleInputs}></input>
               <p id='error'>{errors.passwords}</p>
               <input type='password' placeholder='confirm Password' name='cpasswords' id='cpasswords'
               value={userSignup.cpasswords}
               onChange={handleInputs}></input>
               <p id='error'>{errors.cpasswords}</p>
               <Link to= '/otpcreate'><button className='creates' onClick={submit}>Sign Up as Student</button></Link>
               <Link to= '/otpcreate'><button className='createm' onClick={submit}>Sign Up as Mentor</button></Link>
              </form>
            </div>
       </div>
      );
  }

export default Signup;
