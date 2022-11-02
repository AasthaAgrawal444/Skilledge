import React,{useState} from 'react';
import './profile.css';

function Profile() {
    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        Username:"",
        Emails: "",
        passwords:"",
        cpasswords:""
      })
      function validated(values){
        const x={};
        if(!values.firstname){
          x.firstname ='First name is necessary';
        }
        if(!values.lastname){
          x.lastname = 'Last Name is a necessary';
        }
        if(!values.Username){
          x.Username ='Enter an email';
        }
        if(!values.Emails){
          x.Emails = 'Enter country code';
        }
        if(!values.passwords){
          x.passwords = 'Phone no. is necessary';
        }
        else if(values.passwords.length<8){
          x.passwords ='Password must be more than 8 characters!';
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
      <h5 className='profilepg'>Profile</h5>
      <img src='' className='proimg' alt='profile-img'/>
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
               value={data.emails}
               onChange={handleInputs}></input>
               <p id='error6'>{errors.emails}</p>
               <input type='text' placeholder='Username' name='Uname' id='Uname'
               value={data.Uname}
               onChange={handleInputs}></input>               
               <p id='error5'>{errors.Uname}</p>
               <input type='password' placeholder='Password' name='pwd' id='pwd'
               value={data.pwd}
               onChange={handleInputs}></input>
               <p id='error7'>{errors.pwd}</p>
               <input type='password' placeholder='confirm Password' name='cpwd' id='cpwd'
               value={data.cpwd}
               onChange={handleInputs}></input>
               <p id='error8'>{errors.cpwd}</p>
               </form>
    </div>
  )
}

export default Profile;
