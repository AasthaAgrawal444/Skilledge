import axios from "axios";
const Signuptoken= (token) =>{

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

export default Signuptoken; 