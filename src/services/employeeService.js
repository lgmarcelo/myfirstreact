import httpclient from "../commons/httpclient"

const getEmployees =()=>{
    return httpclient.get('/myfirstreact/employees')
}

const postEmployee =(data) =>{
    return httpclient.post('/myfirstreact/employees', data)
}

const putEmployee =(data) =>{
    return httpclient.put('/myfirstreact/employees', data)
}

const getEmployee =(employeeID)=>{
    return httpclient.get(`/myfirstreact/employees/${employeeID}`)
}

const deleteEmployee =(employeeID)=>{
    return httpclient.delete(`/myfirstreact/employees/${employeeID}`)
}

export default {getEmployees, postEmployee, putEmployee, getEmployee, deleteEmployee}