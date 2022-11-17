import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
// import Nav from "./componrnts/navbar.jsx";
import Landingpg from "./componrnts/landingpg.jsx";
import Signin from "./componrnts/signin.jsx";
import Signup from "./componrnts/signup.jsx";
import Forgot from "./componrnts/forgot.jsx";
import Otp from "./componrnts/otpreset";
import Reset from "./componrnts/reset";
import Interest from "./componrnts/student/interest";
import Otpc from "./componrnts/otpcreate";
import Profile from "./componrnts/student/profile";
import Home from "./componrnts/student/home";
import Loginnav from "./componrnts/student/loginnavbar";
import Allcourses from "./componrnts/student/allcourses";
import Nocourse from "./componrnts/student/nocourse";
import Editeduprofile from "./componrnts/educator/editeduprofile";
import Createprofile from "./componrnts/student/profiledropdwons/createprofile";
import Editstudprofile from "./componrnts/student/profiledropdwons/editstudprofile";
import Courseinfo from "./componrnts/courses/courseinfo";
import Hostcourse from "./componrnts/educator/hostcourse";
import Emptycart from "./componrnts/student/cart/emptycart";
import Fullcart from "./componrnts/student/cart/fullcart";
import Wallet from "./componrnts/educator/wallet/wallet";
import Confirmation from "./componrnts/courses/confirmation";
import Createcourse from "./componrnts/educator/createcourse/createcourse";
import Mycourses from "./componrnts/student/mycourses";
import Eduhome from "./componrnts/educator/eduhome";
import Studprofile from "./componrnts/student/profiledropdwons/studprofile";
import Educatorhome from "./componrnts/educator/educatorhome";
import Hostedcourseinfo from "./componrnts/educator/hostedcourseinfo";
import Mycourseinfo from "./componrnts/student/mycourseinfo";
import Editcourse from "./componrnts/educator/createcourse/editcourse";
import Viewcourse from "./componrnts/courses/viewcourse";

function App() {
  return (
    <div className="App">
    {/* <Reset/> */}
      {
        <Router>
          {/* <Nav /> */}
          <Routes>
            <Route path="/" exact element={<Landingpg />}></Route>
            <Route path="/otpcreate" exact element={<Otpc />}></Route>
            <Route path="/landingpg" exact element={<Landingpg />}></Route>
            <Route path="/reset" exact element={<Reset />}></Route>  
            <Route path="/signup" exact element={<Signup />}></Route>
            <Route path="/signin" exact element={<Signin />}></Route>
            <Route path="/forgot" exact element={<Forgot />}></Route>
            <Route path="/otpreset" exact element={<Otp />}></Route>
            <Route path="/profile" exact element={<Profile />}></Route>
            <Route path="/home" exact element={<Home />}></Route>
            <Route path="/allcourses" exact element={<Allcourses/>}></Route>
            <Route path="/nocourse" exact element={<Nocourse/>}></Route>
            <Route path="/loginnavbar" exact element={<Loginnav/>}></Route>
            <Route path="/interest" exact element={<Interest/>}></Route>
            <Route path="/editeduprofile" exact element={<Editeduprofile/>}></Route>
            <Route path="/createprofile" exact element={<Createprofile/>}></Route>
            <Route path="/editstudprofile" exact element={<Editstudprofile/>}></Route>
            <Route path="/courseinfo" exact element={<Courseinfo/>}></Route>
            <Route path="/hostcourse" exact element={<Hostcourse/>}></Route>
            <Route path="/mycourses" exact element={<Mycourses/>}></Route>
            <Route path="/emptycart" exact element={<Emptycart/>}></Route>
            <Route path="/fullcart" exact element={<Fullcart/>}></Route>
            <Route path="/wallet" exact element={<Wallet/>}></Route>
            <Route path="/confirmation" exact element={<Confirmation/>}></Route>
            <Route path="/createcourse" exact element={<Createcourse/>}></Route>
            <Route path="/studprofile" exact element={<Studprofile/>}></Route>
            <Route path="/eduhome" exact element={<Eduhome/>}></Route>
            <Route path="/educatorhome" exact element={<Educatorhome/>}></Route>
            <Route path="/hostedcourseinfo" exact element={<Hostedcourseinfo/>}></Route>
            <Route path="/mycourseinfo" exact element={<Mycourseinfo/>}></Route>
            <Route path="/editcourse" exact element={<Editcourse/>}></Route>
            <Route path="/viewcourse" exact element={<Viewcourse/>}></Route>

          </Routes>
          {/* <Footer/> */}
        </Router>
      }
    </div>
  );
}

export default App;
