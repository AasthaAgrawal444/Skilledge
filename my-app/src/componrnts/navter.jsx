 import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Nav from './navbar';
import Footer from './footer';
function Navter() {
  return (
    <div>
          <Router>
                <Routes>
                    <Route path='/' exact element={   <Nav/> }>  
                    </Route> 
             </Routes>
           </Router>
         <Footer/>
    </div>
  
  );
}

export default Navter;
