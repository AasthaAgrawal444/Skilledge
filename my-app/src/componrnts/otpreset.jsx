import react from "react";
import "./otpreset.css";
 import { Link } from 'react-router-dom';
 import Axios from 'axios';

function Otp() {
  const [otp, setOtp] = react.useState({
    col1: "",
    col2: "",
    col3: "",
    col4: ""
  });
  async function sub() {
    const obje=
    {
      "email":localStorage.getItem("mail"),
      "otp":otp.col1+otp.col2+otp.col3+otp.col4
      }
  
  const responds = await Axios.post("https://skilledge.herokuapp.com/api/enter_new_password/", obje);
  console.log(responds);
  }
  async function api6() {
    const obj=
    {
      "email":localStorage.getItem("mail")
      }
  
  const response = await Axios.post("https://skilledge.herokuapp.com/api/resend_otp/", obj);
  console.log(response);
  }

  
  const [data, setData] = react.useState([]);

  const [prob, setProb] = react.useState({});

  const [, setVar] = react.useState(false);
  function handleInp(e) {
    const name = e.target.name;
    const value = e.target.value;
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

  function valid(valuee) {
    const prob = {};
    if (!valuee.col1) {
      prob.col1 = "Enter an Otp";
    }
    if (!valuee.col2) {
      prob.col2 = "Enter an Otp";
    }
    if (!valuee.col3) {
      prob.col3 = "Enter an Otp";
    }
    if (!valuee.col4) {
      prob.col4 = "Enter an Otp";
    }
    return prob;
  }

  return (
    <>
      <div>
        <form id="form4" onSubmit={handleSub}>
          <div className="chek">
            <h3 className="check">Check your Email</h3>
            <p className="cheque">
              We have sent an OTP on the email to password reset
              e*****e@g***l.com
            </p>
          </div>
          <div className="cols">
            <input
              type="number"
              placeholder=" "
              name="col1"
              id="col1"
              value={otp.col1}
              onChange={handleInp}
            ></input>
            <p id="error">{prob.col1}</p>
            <input
              type="number"
              placeholder=" "
              name="col2"
              id="col2"
              value={otp.col2}
              onChange={handleInp}
            ></input>
            <p id="error">{prob.col2}</p>
            <input
              type="number"
              placeholder=" "
              name="col3"
              id="col3"
              value={otp.col3}
              onChange={handleInp}
            ></input>
            <p id="error">{prob.col3}</p>
            <input
              type="number"
              placeholder=" "
              name="col4"
              id="col4"
              value={otp.col4}
              onChange={handleInp}
            ></input>
            <p id="error">{prob.col4}</p>
          </div>
          <Link to='/reset'><button className="con" type="submit" onClick={sub}>
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
