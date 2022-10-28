import react from 'react';
import { Link } from 'react-router-dom';
import './forgot.css';
import Axios from 'axios';


function Forgot(){
    const [Forgot,setForgot] = react.useState({
      emailed:"" })
      async function submitapi4() {
        const obje=
        {
          "email":Forgot.emailed
        }
      
      const responds = await Axios.post("https://skilledge.herokuapp.com/api/reset_password/", obje);
      console.log(responds);
      }
    
      const [errors,setErrors]=react.useState({});
      const[ , setIsSubmits]=react.useState(false);
      function handleInputt(e){
        const name=e.target.name;
        const value=e.target.value;
        localStorage.setItem('mail',Forgot.emailed);
        setForgot({...Forgot,[name]:value});  
        }
        function handleSubmitt(e){
            e.preventDefault();
           setErrors(validates(Forgot));
           setIsSubmits(true);
        }
        function validates(values){
          const errors={};
          if(!values.emailed){
            errors.emailed ='Enter an email!';   
           }
           return errors;
          }
  return(
    <>
     <form className='form3' onSubmit={handleSubmitt}>
          <h5 className='fpassd'>Forgot Password</h5>
          <div className='forms'>
          <p className='femail'>Email</p>
          <input type='email' placeholder="example@gmail.com"
          id='emailed' name='emailed'
          value={Forgot.emailed}
          onChange={handleInputt}>
          </input>
          <p id='error19'>{errors.emailed}</p>
        <Link to='/otpreset'><button type='button' className='rese' onClick={submitapi4}>Reset Password</button></Link>
        </div>
        </form>
       <Link to='/signin'><button type='submit' className='back' >Back to Login</button></Link>
      </>
  );
  }
  export default Forgot;
