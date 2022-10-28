import react from "react";
import "./otpreset.css";
import Axios from 'axios';
//  import { Link } from 'react-router-dom';

function Otpc() {
  const [otp, setOtp] = react.useState({
    col1: "",
    col2: "",
    col3: "",
    col4: "",
  });
  async function submits() {
   // console.log("here")
    const obje=
    {
      "email":localStorage.getItem("mymail"),
      "otp":otp.col1+otp.col2+otp.col3+otp.col4
      }
      console.log(obje);
  
  const responds = await Axios.post("https://skilledge.herokuapp.com/api/otp_verify/", obje).then((responds)=> {console.log(responds)});
  console.log(responds);
   }
  const [data, setData] = react.useState([]);

  const [prob, setProb] = react.useState({});

  const [ , setVar] = react.useState(false);
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
              We have sent an OTP on your registered mail
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
            <p id="error13">{prob.col1}</p>
            <input
              type="number"
              placeholder=" "
              name="col2"
              id="col2"
              value={otp.col2}
              onChange={handleInp}
            ></input>
            <p id="error14">{prob.col2}</p>
            <input
              type="number"
              placeholder=" "
              name="col3"
              id="col3"
              value={otp.col3}
              onChange={handleInp}
            ></input>
            <p id="error15">{prob.col3}</p>
            <input
              type="number"
              placeholder=" "
              name="col4"
              id="col4"
              value={otp.col4}
              onChange={handleInp}
            ></input>
            <p id="error16">{prob.col4}</p>
          </div>
          <button className="con" type="button" onClick={submits}>
            Continue
          </button>
          <p className="dont">Don't get OTP? Resend OTP</p>
          <button className="resen" type="submit">
            Resend OTP
          </button>
        </form>
      </div>
    </>
  );
}

export default Otpc;
