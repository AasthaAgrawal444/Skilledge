import react from "react";
import "./signin.css";
import Axios from "axios";
import { Link } from "react-router-dom";

function Signin() {
  const [userSignin, setuserSignin] = react.useState({
    email: "",
    password: "",
  });
  async function submitt() {
    const object = {
      email: userSignin.email,
      password: userSignin.password,
    };
    const respon = await Axios.post(
      "https://skilledge.herokuapp.com/api/token/",
      object
    );
    console.log(respon);
  }
  const [records, setRecords] = react.useState([]);

  const [error, setError] = react.useState({});

  const [, setIsSet] = react.useState(false);
  function handleData(event) {
    const name = event.target.name;
    const value = event.target.value;
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
  function validate(value) {
    const error = {};
    if (!value.email) {
      error.email = "Email is required!";
    }
    if (!value.password) {
      error.password = "Password is required!";
    } else if (value.password.length < 4) {
      error.password = "Password must be more than 5 characters!";
    } else if (value.password.length > 8) {
      error.password = "Password cannot exceed 8 characters!";
    }
    return error;
  }

  return (
    <div className="Signin">
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
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            id="email"
            value={userSignin.email}
            onChange={handleData}
          ></input>
          <p id="error">{error.email}</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={userSignin.password}
            onChange={handleData}
          ></input>
          <p id="error">{error.password}</p>
          <Link to="/forgot" id="forgot">
            <p className="forg">Forgot Password?</p>
          </Link>
          <button type="submit" className="logi" onClick={submitt}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signin;
