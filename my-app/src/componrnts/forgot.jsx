// import react from 'react';
// //import { Link } from 'react-router-dom';
// import './forgot.css';
// import {Link} from "react-router-dom";

// function Forgot(){
//     const [Forgot,setForgot] = react.useState({
//       email:"" })
//       const [errors,setErrors]=react.useState({});
//       const[isSubmits , setIsSubmits]=react.useState(false);
//       function handleInputt(e){
//         const name=e.target.name;
//         const value=e.target.value;
//         setForgot({...Forgot,[name]:value});  
//         }
//         function handleSubmitt(e){
//             e.preventDefault();
//            setErrors(validates(Forgot));
//            setIsSubmits(true);
//         }
//         function validates(values){
//           const error={};
//           if(!values.email){
//             error.email ='Enter an email!';   
//            }
//            return error;
//           }
//   return(
//   <form className='form3' onSubmit={handleSubmitt}>
//           <input type='email' placeholder="Enter your email for verification purpose"
//           id='email' name='email'
//           value={Forgot.email}
//           onChange={handleInputt}>
//           </input>
//           <p id='error'>{errors.email}</p>
//         <button type='submit'>Reset Password</button>
//        <Link to='/signin'><button type='submit'>Back to Login</button></Link>
//       </form>
//   );
//   }
//   export default Forgot;