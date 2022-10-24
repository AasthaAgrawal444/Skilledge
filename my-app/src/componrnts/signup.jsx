// import react from 'react';
// import './signup.css';
// //import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";

// function Signup(){
//     const [userSignup,setuserSignup] = react.useState({
//       firstname:"",
//       lastname:"",
//       Username:"",
//       Emails: "",
//       passwords:""
//     })
//     const [record , setRecord]= react.useState([]);
  
//     const [errors, setErrors]= react.useState({});
  
//     const[isSubmitted , setIsSubmitted]=react.useState(false);
//     function handleInputs(e){
//       const name=e.target.name;
//       const value=e.target.value;
//       setuserSignup({...userSignup,[name]:value});
//     }
//     function handleSubmits(e){
//       e.preventDefault();
//       const newRecord ={userSignup};
//       setRecord([...record, newRecord]);
//       console.log(record);
//       setErrors(validated(userSignup));
//       setIsSubmitted(true);
//     }
    
//     function validated(values){
//       const errors={};
//       if(!values.firstname){
//         errors.firstname ='First name is a required field';
//       }
//       if(!values.lastname){
//         errors.lastname = 'Last Name is a required field';
//       }
//       if(!values.Username){
//         errors.Username ='Username is required';
//       }
//       if(!values.Emails){
//         errors.Emails = 'Email is a required field';
//       }
//       if(!values.passwords){
//         errors.passwords = 'Password is required';
//       }
//       else if(values.passwords.length<5){
//         errors.passwords ='Password must be more than 5 characters!';
//       }
//       else if(values.passwords.length>8){
//         errors.passwords ='Password must be less than 8 characters!';
//       }
//       return errors;
//     }
  
//       return(
//         <div className="Signup">
//            <div className="contents">
//               <div className="welcomed">
//                 <div>
//                   <h1>Welcome</h1>
//                   <p>Please Log in in to your account with given details to continue</p>
//                 </div>
//                 <div>
//                   <h3>Already have an account</h3>
//                   <button>Log in</button>
//                 </div>
//               </div>
//            </div>
  
//            <div className="form">
//              <h3>Create account</h3>
//              <form id='form2' onSubmit={handleSubmits}>
//              <input type='text' placeholder='First Name' name='firstname' id='firstname'
//                value={userSignup.firstname}
//                onChange={handleInputs}></input>
//                <p id='error'>{errors.firstname}</p>
//                <input type='text' placeholder='Last Name' name='lastname' id='lastname'
//                value={userSignup.lastname}
//                onChange={handleInputs}></input>
//                <p id='error'>{errors.lastname}</p>
//                <input type='text' placeholder='Username' name='Username' id='Username'
//                value={userSignup.Username}
//                onChange={handleInputs}></input>
//                <p id='error'>{errors.Username}</p>
//                <input type='email' placeholder='Email' name='Emails' id='Emails'
//                value={userSignup.Emails}
//                onChange={handleInputs}></input>
//                <p id='error'>{errors.Emailsls}</p>
//                <input type='password' placeholder='********' name='passwords' id='passwords'
//                value={userSignup.passwords}
//                onChange={handleInputs}></input>
//                <p id='error'>{errors.passwords}</p>
//                <Link to='/forgot' id='forgot'><p>Forgot Password</p></Link>
//                <button type='submit'>Log In</button>
//               </form>
//             </div>
//        </div>
//       );
//   }
  
//   export default Signup;
