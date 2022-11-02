import react ,{useState}from 'react';
import { Link } from 'react-router-dom';
import './forgot.css';
import Axios from 'axios';
import Email from './images/email.png';
import {useNavigate}from "react-router-dom";
var er;

function Forgot(){
    const [Forgot,setForgot] = react.useState({
      emailed:"" })
      const Navigate=useNavigate();
      const [value, isValue] = useState(false);
      const [resmsg, setMsg] =useState(null);
      function validates(values){
        const x={};
        if(!values.emailed){
          x.emailed ='Enter an email!';   
         }
         er=Object.keys(x).length;
         console.log(x);
         console.log(er);
         (er!==0)?isValue(false):isValue(true);
         return x;
        }
     
      async function submitapi4() {
        const obje=
        {
          "email":Forgot.emailed
        };
        console.log(value);
    if(value){
        await Axios.post("https://skilledge.herokuapp.com/api/reset_password/", obje)
        .then(response=>{
          setMsg(response.data.msg);
          console.log(response);
          if(response.status===200){
            Navigate("/otpreset");}
            // setRequest(response.status);
            console.log(response.status);
      })
      .catch(err => {
        console.log(err);
        console.log(err.response.data.msg);
        setMsg(err.response.data.msg)
      });
    }
  
  }  
    
  const [records, setRecords] = react.useState([]);
      const [errors,setErrors]=react.useState({});
      const[ , setIsSubmits]=react.useState(false);

      function handleInputt(e){
        const name=e.target.name;
        const value=e.target.value;
        localStorage.setItem('mail',Forgot.emailed);
        setErrors(validates(Forgot));
        setForgot({...Forgot,[name]:value});  
        }
        
      function handleSubmitt(e){
            e.preventDefault();
            const newRecords = { Forgot };
    setRecords([...records, newRecords]);
    console.log(records);
           setErrors(validates(Forgot));
           setIsSubmits(true);
        }
       
  return(
    <>
     <form className='form3' onSubmit={handleSubmitt}>
     <p className="backendmsg">{resmsg}</p>
          <h5 className='fpassd'>Forgot Password</h5>
          <div className='forms'>
          <p className='femail'>Email</p>
          <img src={Email} className="email-icon2" alt="lock"/>
          <input type='email' placeholder="example@gmail.com"
          id='emailed' name='emailed'
          value={Forgot.emailed}
          onChange={handleInputt}>
          </input>
          <p id='error19'>{errors.emailed}</p>
        <button type='submit' className='rese' onClick={submitapi4}>Reset Password</button>
        </div>
        </form>
       <Link to='/signin'><button type='submit' className='back' >Back to Login</button></Link>
      </>
  );
  
}
  export default Forgot;
