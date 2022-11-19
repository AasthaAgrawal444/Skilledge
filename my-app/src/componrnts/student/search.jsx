import axios from 'axios';
import React, { useState } from 'react';
import Loginnav from './loginnavbar';
import './search.css'

function Search() {

const [search, setSearch] = useState("");

const [resmsg, setMsg] =useState(null);
  const token = localStorage.getItem("jwtToken");
  console.log("token");
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }

function selsearch(e){
    setSearch(e.target.value);
    axios.get("https://skilledge.herokuapp.com/courses/search_course/?",config).then((response)=>{
        console.log(response);
        setMsg(response.data.msg);
       }).catch(err=>{
           console.log(err);
             console.log(err.response.data.msg);
        //    setMsg(err.response.data.msg);
       })
}

  return (
    <div>
    <input placeholder="Search Course" value={search} onChange={selsearch} id='searched'></input> 

    {resmsg}     
    </div>
  )
}

export default Search;
