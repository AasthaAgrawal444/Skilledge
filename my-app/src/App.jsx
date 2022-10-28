import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Nav from "./componrnts/navbar.jsx";
import Landingpg from "./componrnts/landingpg.jsx";
import Signin from "./componrnts/signin.jsx";
import Signup from "./componrnts/signup.jsx";
import Forgot from "./componrnts/forgot.jsx";
import Otp from "./componrnts/otpreset";
import Reset from "./componrnts/reset";
import Footer from "./componrnts/footer";
import Otpc from "./componrnts/otpcreate";


function App() {
  return (
    <div className="App">
    {/* <Reset/> */}
      {
        <Router>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Landingpg />}></Route>
            <Route path="/otpcreate" exact element={<Otpc />}></Route>
            <Route path="/landingpg" exact element={<Landingpg />}></Route>
            <Route path="/reset" exact element={<Reset />}></Route>  
            <Route path="/signup" exact element={<Signup />}></Route>
            <Route path="/signin" exact element={<Signin />}></Route>
            <Route path="/forgot" exact element={<Forgot />}></Route>
            <Route path="/otpreset" exact element={<Otp />}></Route>
          </Routes>
          <Footer/>
        </Router>
      }
    </div>
  );
}

export default App;
