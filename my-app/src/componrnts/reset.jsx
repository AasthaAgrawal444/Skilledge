import react,{useState} from "react";
import "./reset.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
var er;

function Reset() {
  const [userpass, setuserpass] = react.useState({
    repassword: "",
    rpassword: "",
  });
  const Navigate=useNavigate();
  const [value, isValue] = useState(false);
  const [resmsg, setMsg] =useState(null);
  function validation(value) {
    const z = {};
    if (!value.repassword) {
      z.repassword = "Password is required!";
    } else if (value.repassword.length < 5) {
      z.repassword = "Password must be more than 5 characters!";
    } else if (value.repassword.length > 8) {
      z.repassword = "Password cannot exceed 8 characters!";
    }
    if (!value.rpassword) {
      z.rpassword = "Repeat Password to confirm!";
    }
    er = Object.keys(z).length;
    // console.log(z);
    console.log(er);
    er !== 0 ? isValue(false) : isValue(true);
    return z;
  }

  async function submitapi4() {
    const obje = {
      email: localStorage.getItem("email"),
      otp: localStorage.getItem("otp"),
      password: userpass.repassword,
      confirm_password: userpass.rpassword,
    };

    console.log(value);
    if (value) {
      await Axios.post(
        "https://skilledge.herokuapp.com/api/enter_new_password/",
        obje
      )
        .then((response) => {
          setMsg(response.data.msg);
          console.log(response);
          if(response.status===200){
            Navigate("/otpcreate");}
            console.log(response.status);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data.msg);
          setMsg(err.response.data.msg);
        });
    }
  }

  const [newpass, setNewpass] = react.useState([]);

  const [err, setErr] = react.useState({});

  const [, setIsreset] = react.useState(false);
  function handleDat(eve) {
    const name = eve.target.name;
    const value = eve.target.value;
    setErr(validation(userpass));
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

  return (
    <div>
      <div id="passd">
        <form id="form5" onSubmit={handleSubt}>
        <p className="backendmsg">{resmsg}</p>
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
            <button type="button" className="re" onClick={submitapi4}>
              Reset Password
            </button>
        </form>
      </div>
    </div>
  );
}
export default Reset;
