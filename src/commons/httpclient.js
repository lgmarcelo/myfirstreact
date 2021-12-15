import axios from "axios";

export default axios.create({
    baseURL:'https://lm-firstreact.herokuapp.com/',
    headers:{
        'content-type':'application/json'
    }
})