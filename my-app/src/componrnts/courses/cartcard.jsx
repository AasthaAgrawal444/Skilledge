import React from 'react';
import './cartcard.css';
import Starimg from '../images/star.png';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


function Cartcoursecard(props) {

  const token = localStorage.getItem("jwtToken");
  console.log("token");
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }

  function removecourse(){
    // event.preventdefault();
    axios.delete(
      `https://skilledge.herokuapp.com/cart/cart/${props.id}/`,config)
      .then(response=>{
        console.log(response);
        // if(response.status===200){
        //   Navigate("/confirmation");}
      })
      .catch(err => {
        console.log(err);
        // console.log(err.response.data.msg);
      });

      axios.get("https://skilledge.herokuapp.com/cart/cart/",config).then((response)=>{
           console.log(response);
           if(response.status===400){
            Navigate("/emptycart");
         }
   
         }).catch(err=>{
             console.log(err);
             
         })
       
  }


  return (
    <>
    <div className='coursedatas'>
      <div className='course'>
        <img 
            src={props.thumbnail}
            className='courseimag'
            alt='courseimg'
        />
      </div>
            {/* <img 
                src={Starimg}
                className='stars'
                alt='stars'
            /> */}
            {/* <p className='rating'>{props.rating}</p> */}

        <div className='coursescontent'>
            <h2 className='coursesnames'>{props.topic}</h2>
            <p className='coursesdescript'>{props.short_description}</p>
            <p className='paise'>${props.price}</p>

      </div>
      <div className='buyremovebuttons'>
        <button className='butbutton1'>Buy Now</button>
        <button className='remove' onClick={removecourse}>Remove</button>
      </div>
    </div>
    </>
  )
}

export default Cartcoursecard;
