import axios from "axios";

export default axios.create({
    baseURL:'https://lm-firstreact.herokuapp.com/employees',
    headers:{
        'content-type':'application/json'
    }
})