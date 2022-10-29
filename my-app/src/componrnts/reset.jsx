import react from "react";
import "./reset.css";
 import Axios from 'axios';
import {
    Link
  } from "react-router-dom";

function Reset() {
  const [userpass, setuserpass] = react.useState({
    repassword: "",
    rpassword: "",
  });
  async function submitapi4() {
    const obje=
    {
      "email":localStorage.getItem("email"),
      "otp":localStorage.getItem("otp"),
      "password":userpass.repassword,
      "confirm_password":userpass.rpassword
    }
  
  const resetpass = await Axios.post("https://skilledge.herokuapp.com/api/enter_new_password/", obje);
  console.log(resetpass);
  }


  const [newpass, setNewpass] = react.useState([]);

  const [err, setErr] = react.useState({});

  const [, setIsreset] = react.useState(false);
  function handleDat(eve) {
    const name = eve.target.name;
    const value = eve.target.value;
    setuserpass({ ...userpass, [name]: value });
  }
  function handleSubt(eve) {
    eve.preventDefault();
    const newpassword = { userpass };
    setNewpass([...newpass, newpassword]);
    console.log(newpass);
    setErr(validation(userpass));
    setIsreset(true);
  }
  function validation(value) {
    const err = {};
    if (!value.repassword) {
      err.repassword = "Password is required!";
    } else if (value.repassword.length < 5) {
      err.repassword = "Password must be more than 5 characters!";
    } else if (value.repassword.length > 8) {
      err.repassword = "Password cannot exceed 8 characters!";
    }
    if (!value.rpassword) {
      err.rpassword = "Repeat Password to confirm!";
    }
    return err;
  }

  return (
    <div>
      <div id="passd">
        <form id="form5" onSubmit={handleSubt}>
          <h1 className="rest">Reset Password</h1>
          <p className="newp">New Password</p>
          <input
            type="password"
            placeholder="New Password"
            name="repassword"
            id="repassword"
            value={userpass.repassword}
            onChange={handleDat}
          ></input>
          <p id="err17">{err.repassword}</p>
          <p className="repp">Repeat Password</p>
          <input
            type="password"
            placeholder="Repeat Password"
            name="rpassword"
            id="rpassword"
            value={userpass.rpassword}
            onChange={handleDat}
          ></input>
          <p id="err18">{err.rpassword}</p>
          <Link to='/signin' ><button type="button" className="re" onClick={submitapi4}>
            Reset Password
          </button></Link>
        </form>
      </div>
    </div>
  );
}
export default Reset;
