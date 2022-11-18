import React, { useState,useEffect } from 'react';
import Mycart from './mycart';
import Cartcoursecard from '../../courses/cartcard';
import axios from 'axios';
import Emptycart from './emptycart';
import { Navigate, useNavigate } from 'react-router-dom';
// import Emptycart from './emptycart';
import Loginnav from '../loginnavbar';
import Footer from '../../footer';
import "./mycart.css";

function cart(addcart){

    return(
<Cartcoursecard 
        thumbnail={addcart.thumbnail}
        rating={addcart.rating}
        topic={addcart.topic}
        short_description={addcart.short_description}
        id={addcart.id}
        price={addcart.price}
/>
);
}



function Fullcart() {

    const Navigate= useNavigate();

        const [id,setId] = useState("")
        const [cat, setCat] = useState("")
        const [top, setTop] = useState("")
        const [educator_mail, setEducator_mail] = useState("")
        const [desc, setDesc] = useState("")
        const [img, setImg] = useState("")
        const [price, setPrice] = useState("")
        const [rating, setRating] = useState("")
        const [eduname, setEduname] = useState("")
    
    
        const token = localStorage.getItem("jwtToken");
        console.log("token");
        const config = {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }
      
        useEffect(()=>{
          axios.get("https://skilledge.herokuapp.com/cart/cart/",config).then((response)=>{
           console.log(response);
           setAddcart(response.data);
           setId(response.data.id);
           setCat(response.data.category);
           setTop(response.data.topic);
           setEducator_mail(response.data.educator_mail);
           setDesc(response.data.short_description);
           setImg(response.data.thumbnail);
           setPrice(response.data.price);
           setRating(response.data.rating);
           setEduname(response.data.educator_name);
           if(response.status===400){
             Navigate("/emptycart");
          }
    
          }).catch(err=>{
              console.log(err);
              
          })
        },[])

        function buyapi(){
          // event.preventdefault();
          axios.put(
            `https://skilledge.herokuapp.com/wallet/buy_allcourses/`,{},config)
            .then(response=>{
              console.log(response);
              if(response.status===200){
                Navigate("/confirmation");}
              if(response.status===400){
                  Navigate("/emptycart"); 
                }
            })
            .catch(err => {
              console.log(err);
              // console.log(err.response.data.msg);
            });
        }
    

    const [addcart, setAddcart] = useState([ ]);

  return (
    <div>
    <Loginnav/>
      <Mycart/>
      <div className='cartmap'>
       {addcart.map(cart)}
       </div>
       <button className='checkoutbut' onClick={buyapi}>Checkout</button>
       <div>
        <Footer/>
       </div>
    </div>
  )
}

export default Fullcart;
