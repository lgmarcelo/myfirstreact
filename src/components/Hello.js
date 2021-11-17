import { useEffect, useState } from "react";
import helloServices from "../services/helloServices";

const Hello = () =>{

    const[hello, setHello] = useState("sensya lods down server, chat para gumana")

    useEffect(()=>{
        helloServices.getHello()
        .then(response =>{
            setHello(response.data)
        })
        .catch(err =>{
            console.log("something went worng")
        })
    }
    )
    return hello;
}

export default Hello