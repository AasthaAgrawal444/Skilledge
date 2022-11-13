import React,{useState} from "react";
import "./otpreset.css";
import Signuptoken from "./signuptoken";
 import { useNavigate, Link } from 'react-router-dom';
 import Axios from 'axios';
 var err;

function Otp() {
  const [otp, setOtp] = useState({
    col1: "",
    col2: "",
    col3: "",
    col4: ""
  });
  const [resmsg, setMsg]= useState(null);
  const [value, isValue] = useState(false);
  const Navigate=useNavigate();
  function valid(valuee) {
    const y = {};
    if (!valuee.col1) {
      y.col1 = "Enter an Otp";
    }
    if (!valuee.col2) {
      y.col2 = "Enter an Otp";
    }
    if (!valuee.col3) {
      y.col3 = "Enter an Otp";
    }
    if (!valuee.col4) {
      y.col4 = "Enter an Otp";
    }
    err=Object.keys(y).length;
    console.log(y);
    (err!==0)?isValue(false):isValue(true);
    return y;
  }

  // const token = localStorage.getItem("jwtToken");
  // console.log("token");
  // const config = {
  //   headers:{
  //     Authorization: `Bearer ${token}`
  //   }
  // }  

  async function api6() {
    const obj=
    {
      "email":localStorage.getItem("mail")
      }
      if(value){
    await Axios.post("https://skilledge.herokuapp.com/api/reset_password/", obj)
    .then(response=>{
      setMsg(response.data.msg);
      console.log(response);
      if(response.status===200){
      Navigate("/otpreset");}
      // setRequest(response.status);
      console.log(response.status);
  })
  .catch(err1 => {
    console.log(err1);
    console.log(err1.response.data.msg);
    setMsg(err1.response.data.msg);
  });
}
}    
  const [data, setData] = useState([]);

  const [prob, setProb] = useState({});

  const [, setVar] = useState(false);
  
  function handleInp(e) {
    const name = e.target.name;
    const value = e.target.value;
    localStorage.setItem('otp',otp.col1+otp.col2+otp.col3+otp.col4);
    setProb(valid(otp));
    setOtp({ ...otp, [name]: value });
  }

  function handleSub(ev) {
    ev.preventdefault();
    const newData = { otp };
    setData([...data, newData]);
    console.log(data);
    setProb(valid(otp));
    setVar(true);
  }

    return (
    <>
      <div>
        <form id="form4" onSubmit={handleSub}>
          <div className="chek">
          <p className='backmsg'>{resmsg}</p>
            <h3 className="check">Check your Email</h3>
            <p className="cheque">
              We have sent an OTP on your registered mail!
            </p>
          </div>
          <div className="cols">
            <input
              type="number"
              min="0"
              max="9"
              placeholder=" "
              name="col1"
              id="col1"
              value={otp.col1}
              onChange={handleInp}
            ></input>
            <p id="error9">{prob.col1}</p>
            <input
              type="number"
              min="0"
              max="9"
              placeholder=" "
              name="col2"
              id="col2"
              value={otp.col2}
              onChange={handleInp}
            ></input>
            <p id="error10">{prob.col2}</p>
            <input
              type="number"
              min="0"
              max="9"
              placeholder=" "
              name="col3"
              id="col3"
              value={otp.col3}
              onChange={handleInp}
            ></input>
            <p id="error11">{prob.col3}</p>
            <input
              type="number"
              min="0"
              max="9"
              placeholder=" "
              name="col4"
              id="col4"
              value={otp.col4}
              onChange={handleInp}
            ></input>
            <p id="error12">{prob.col4}</p>
          </div>
         <Link to='/reset'> <button className="con" type="submit" >
            Continue
          </button></Link>
          <p className="dont">Don't get OTP? Resend OTP</p>
          <button className="resen" type="submit" onClick={api6}>
            Resend OTP
          </button>
        </form>
      </div>
    </>
  );
}

export default Otp;
