import './App.css';
import React from 'react';
import './index.css';
//import App from './App';
import Nav from './componrnts/navbar.jsx';
import Landingpg from './componrnts/landingpg.jsx';
import Footer from './componrnts/footer.jsx';
import Signin from './componrnts/signin.jsx';
import Signup from './componrnts/signup.jsx';
import Forgot from './componrnts/forgot.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
                <Routes>
                   <Route path='/navbar' exact element={   <Nav /> }>  
                     </Route>
                     <Route path='/signin' exact element={<Signin />}>
                     </Route>
                     <Route path='/signup' exact element={<Signup />}>
                     </Route>
                     <Route path='/forgot' exact element={<Forgot />}>
                     </Route>
                     {/* <Route path='/otp' exact element={<Otp />}>
                     </Route> */}
                     <Route path='/main' exact element={<Landingpg />}>
                     </Route>
                     <Route path='/footer' exact element={<Footer />}>
                     </Route>
             </Routes>
        </Router>
    </div>
  );
}

export default App;
