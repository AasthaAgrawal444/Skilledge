import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './componrnts/navbar';
import Landingpg from './componrnts/landingpg';
import Footer from './componrnts/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Landingpg/>
    <Footer/>
  </React.StrictMode>
);


reportWebVitals();
