import react from 'react';
import { Link } from 'react-router-dom';
import './forgot.css';


function Forgot(){
    const [Forgot,setForgot] = react.useState({
      emailed:"" })
      const [errors,setErrors]=react.useState({});
      const[ , setIsSubmits]=react.useState(false);
      function handleInputt(e){
        const name=e.target.name;
        const value=e.target.value;
        setForgot({...Forgot,[name]:value});  
        }
        function handleSubmitt(e){
            e.preventDefault();
           setErrors(validates(Forgot));
           setIsSubmits(true);
        }
        function validates(values){
          const error={};
          if(!values.email){
            error.emailed ='Enter an email!';   
           }
           return error;
          }
  return(
    <>
     <form className='form3' onSubmit={handleSubmitt}>
          <h5>Forgot Password</h5>
          <p className='femail'>Email</p>
          <input type='email' placeholder="example@gmail.com"
          id='emailed' name='emailed'
          value={Forgot.emailed}
          onChange={handleInputt}>
          </input>
          <p id='error'>{errors.emailed}</p>
        <Link to='/otpreset'><button type='submit' className='rese'>Reset Password</button></Link>
        </form>
       <Link to='/signin'><button type='submit' className='back' >Back to Login</button></Link>
      </>
  );
  }
  export default Forgot;
