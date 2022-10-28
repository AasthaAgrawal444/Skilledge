import React from 'react';
import ReactDOM from 'react-dom/client';
 import App from './App';
 import './App.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Forgot from './componrnts/forgot.jsx';
//import Otp from './componrnts/otp';
 //import Signin from './componrnts/signin.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App/>
    {/* <Footer/> */}
  </React.StrictMode>
);


reportWebVitals();
