import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import employeeService from "../services/employeeService"
import Button from "./Button"

const Employee = () => {
    const [employees, setEmployees] = useState([])


    useEffect(
        () => {
            refreshEmployeeTable();
        }
    )

    const refreshEmployeeTable =()=>{
        employeeService.getEmployees()
        .then(
            response => (
                setEmployees(response.data)
            )
        )
        .catch(
            () => (
                console.log("sorry </3")
            )
        )
    }

    const deleteEmployee =(employeeID)=>{
            employeeService.deleteEmployee(employeeID)
            .then(
                response =>{
                    console.log("successfully deleted")
                    refreshEmployeeTable();
                }
            )
            .catch(
                error =>{
                    console.error("something went wrong")
                }
            )
    }

    
    return (
        <div className="container">
            <h3>List of employees</h3>
            <div>
                <table className="table table-light table-hover table-striped">
                    <thead>
                        <tr class="table-danger">
                            <td>Name</td>
                            <td>Location</td>
                            <td>Department</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee => (
                                    <tr>
                                        <td>{employee.name}</td>
                                        <td>{employee.location}</td>
                                        <td>{employee.department}</td>
                                        <td>
                                            <div class="d-grid gap-2 d-md-flex">
                                                <Link className="btn btn-primary" to={`/myfirstreact/employees/edit/${employee.employeeID}`}>Update</Link>
                                                <button className="btn btn-danger" onClick={(e)=>deleteEmployee(employee.employeeID)}>Delete</button>
                                            </div>

                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee