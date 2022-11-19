import React,{useState} from "react";
import "./signin.css";
import Axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import Lock from './images/lock.png';
import Email from './images/email.png';
import Nav from "./navbar";
import Footer from "./footer";
// import Home from "./student/home";
var er;

function Signin() {
  const [userSignin, setuserSignin] = useState({
    email: "",
    password: "",
  });
  const Navigate=useNavigate();
  const [value, isValue] = useState(false);
  const [resmsg, setMsg] =useState(null);

   function validate(value) {
    const x = {};
    if (!value.email) {
      x.email = "Email is required!";
    }
    if (!value.password) {
      x.password = "Password is required!";
    } else if (value.password.length < 4) {
      x.password = "Password must be more than 8 characters!";
    }
    er=Object.keys(x).length;
    // console.log(x);
    console.log(er);
    (er!==0)?isValue(false):isValue(true);
    return x;
  }
  async function submitt() {
    const object = {
      email: userSignin.email,
      password: userSignin.password,
    };

    // console.log(object);
    console.log(value);
    if(value){
    await Axios.post(
      "https://skilledge.herokuapp.com/api/login/",object)
      .then(response=>{
        localStorage.setItem('jwtToken',response.data.token.access);
        console.log(localStorage);
        if(response.status===200){
          Navigate("/home");}
        setMsg(response.data.msg);
        console.log(response);
    })
    .catch(err => {
      console.log(err);
      console.log(err.response.data.msg);
      setMsg(err.response.data.msg)
    });
  }
}
 

  const [records, setRecords] = useState([]);

  const [error, setError] = useState({});

  const [, setIsSet] = useState(false);
  function handleData(event) {
    const name = event.target.name;
    const value = event.target.value;
    localStorage.setItem('password',userSignin.password);
    setError(validate(userSignin));
    setuserSignin({ ...userSignin, [name]: value });
  }
  function handleSubmitted(e) {
    e.preventDefault();
    const newRecords = { userSignin };
    setRecords([...records, newRecords]);
    console.log(records);
    setError(validate(userSignin));
    setIsSet(true);
  }
  

  return (
    <div className="Signin">
    <Nav/>
      <div className="content">
      <div className="cont">
        <div className="welcome">
          <h1 className="wel">Welcome Back!</h1>
          <p className="continue">Please Log in in to your account with given details to continue</p>
        </div>
        <div className="newacc">
          <h3 className="new">New here?Create an account</h3>
          <Link to="/Signup">
            <button className="but">Sign Up</button>
          </Link>
        </div>
       </div>
      </div>
      <div id="sign">
        <form id="form1" onSubmit={handleSubmitted}>
          <h1 className="Log">Log in account</h1>
          <p className="backendmsg">{resmsg}</p>
          <img src={Email} className="email-icon" alt="mail"/>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            id="email"
            value={userSignin.email}
            onChange={handleData}
          ></input>
          <p id="error1">{error.email}</p>
          <img src={Lock} className="lock-icon" alt="lock"/>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={userSignin.password}
            onChange={handleData}
          ></input>
          <p id="error2">{error.password}</p>
          <Link to="/forgot" id="forgot">
            <p className="forg">Forgot Password?</p>
          </Link>
          <button type="submit" className="loginbutt" onClick={submitt}>
            Login
          </button>
        </form>
      </div>
      <div className="signfooter">
      <Footer/>
      </div>
    </div>
  );
}
export default Signin;
