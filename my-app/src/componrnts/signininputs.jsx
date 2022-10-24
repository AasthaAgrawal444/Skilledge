import React from "react";
import "./signininputs.css";

const Inputs = (props) => {
const {label, errorMessage, onChange,  id, ...inputprops} = props;
    return (
            <div className="input">
              <label>{label}</label> 
              <input {...inputprops} onChange={onChange}/>
              <span>{errorMessage}</span>
            </div>
    )
}

export default Inputs;