import react from 'react';
import './signin.css';
import {Link} from "react-router-dom";
import Inputs from "./signininputs.jsx"

const Signin = () => {
  const [values,setValues] = react.useState({
    email:"",
    password:""
  })

  const inputs = [
    {
      id: 1,
      name:"email",
      type:"email",
      placeholder:"example@gmail.com",
      errorMessage:"Enter a valid email address",
      label:"email",
      required: true
    },
    {
      id: 2,  
      name:"password",     
      type:"password", 
      placeholder:"********", 
      errorMessage:"Password should be between 8-12 characters and include atleast 1 letter, 1 number and 1 special character",
      label:"password",
      required: true
    }
  ]

  function handleSubmit(e){
    e.preventDefault();
    console.log(values);
  }
  
  function onChange(e){
    setValues({...values,[e.target.name]:e.target.value});
  }
    return(
      <div className="Signin">
         <div className="content">
              <div className="welcome">
                <h1>Welcome Back!</h1>
                <p>Please Log in in to your account with given details to continue</p>
              </div>
              <div className='newacc'>
                <h3>New here?Create an account</h3>
                <button className='but'>Sign Up</button>
              </div>
         </div>

         <div className="form">
            <form id='form1' onSubmit={handleSubmit}>
             <h3>Log In account</h3>
             {inputs.map((input) => (
              <Inputs key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
             ))}

             <Link to='/forgot' id='forgot'><p>Forgot Password</p></Link>
             <button type='submit' >Log In</button>
            </form>
          </div>
     </div>
    );
}

export default Signin;