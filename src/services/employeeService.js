import httpclient from "../commons/httpclient"

const getEmployees =()=>{
    return httpclient.get('employees')
}

const postEmployee =(data) =>{
    return httpclient.post('employees', data)
}

const putEmployee =(data) =>{
    return httpclient.put('employees', data)
}

const getEmployee =(employeeID)=>{
    return httpclient.get(`employees/${employeeID}`)
}

const deleteEmployee =(employeeID)=>{
    return httpclient.delete(`employees/${employeeID}`)
}

export default {getEmployees, postEmployee, putEmployee, getEmployee, deleteEmployee}