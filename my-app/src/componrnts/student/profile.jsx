import React,{useState} from 'react';
import './profile.css';
import courseimage from '../images/courseimg.png';
import Dropdown from './profiledropdwons/gender';

function Profile() {
    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        Emails:"",
        Countrycode: "",
        Phoneno:"",
        Gender:""
      })
      function validated(values){
        const x={};
        if(!values.firstname){
          x.firstname ='First name is necessary';
        }
        if(!values.lastname){
          x.lastname = 'Last Name is a necessary';
        }
        if(!values.Emails){
          x.Emails ='Enter an email';
        }
        if(!values.Countrycode){
          x.Countrycode = 'Enter country code';
        }
        if(!values.Phoneno){
          x.Phoneno = 'Phone no. is necessary';
        }
        if(!values.Gender){
          x.Gender = 'Gender is necessary';
        }
        return x;
      }
      const [record , setRecord]= useState([]);
      const [errors, setErrors]= useState({});
      const[ , setIsSigned]= useState(false);
    function handleInputs(e){
      const name=e.target.name;
      const value=e.target.value;
      localStorage.setItem('mymail',setData.Emails);
      setErrors(validated(data));
      setData({...data,[name]:value});
    }

    
   
    function handleSubmits(e){
      e.preventDefault();
      const newRecord ={data};
      setRecord([...record, newRecord]);
      console.log(record);
      setErrors(validated(data));
      setIsSigned(true);
    }


    
  return (
    <div>
      <img src={courseimage} className='proimg' alt='profile-img'/>
      <form id='form2' onSubmit={handleSubmits}>
             <input type='text' placeholder='First Name' name='fname' id='fname'
               value={data.fname}
               onChange={handleInputs}></input>
               <p id='error3'>{errors.fname}</p>
               <input type='text' placeholder='Last Name' name='lname' id='lname'
               value={data.lname}
               onChange={handleInputs}></input>
               <p id='error4'>{errors.lname}</p>
               <input type='email' placeholder='Email' name='emails' id='emails'
               value={data.Emails}
               onChange={handleInputs}></input>
               <p id='error6'>{errors.emails}</p>
               <input type='text' placeholder=' ' name='code' id='code'
               value={data.code}
               onChange={handleInputs}></input>               
               <p id='error5'>{errors.code}</p>
               <input type='text' placeholder='Phone number' name='phno' id='phno'
               value={data.phno}
               onChange={handleInputs}></input>
               <p id='error7'>{errors.phno}</p>
               <input type='gender' placeholder='Gender' name='gender' id='gender'
               value={data.Gender}
               onChange={handleInputs}></input>
               <p id='error8'>{errors.gender}</p>
               </form>
               <button type='submit' className='continuebutton' >Continue</button>
    </div>
  )
}

export default Profile;
