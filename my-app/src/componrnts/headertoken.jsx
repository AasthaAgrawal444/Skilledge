import axios from "axios";
const Headertoken= (token) =>{

    if(token){
        console.log(token)
        axios.defaults.headers={
        Authorization: token
        };
    }
    else{
        delete axios.defaults.headers.n;
    }
};

export default Headertoken; 