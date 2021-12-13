import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "./employeeService";

const AddEmployee = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const { employeeID } = useParams();

    useEffect(
        () => {
            if (employeeID) {
                employeeService.getEmployee(employeeID)
                    .then(
                        response => {
                            setName(response.data.name);
                            setLocation(response.data.location);
                            setDepartment(response.data.department);
                        }
                    )
                    .catch(
                        error => {
                            console.error("error", error);
                        }
                    )
            }

        }
        , [])

    const saveEmployee = (e) => {

        e.preventDefault();

            if (employeeID) {
                const employee = { employeeID, name, location, department };
                employeeService.putEmployee(employee)
                    .then(
                        response => {
                            console.log("updated employee", response.data)
                            navigate("/employees");
                        }
                    )

                    .catch(
                        error => {
                            console.error("something went wrong")
                        }
                    )
            }
            else {
                const employee = { name, location, department };
                employeeService.postEmployee(employee)
                    .then(
                        response => {
                            console.log("added new employee", response.data)
                            navigate("/employees");
                        }
                    )

                    .catch(
                        error => {
                            console.error("something went wrong")
                        }
                    )
            }
        }


    return (
        <div className="container">
            <h3>Add employee</h3>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        placeholder="Add employee name"
                        value={name}
                        required
                        onChange={
                            (e) => {
                                setName(e.target.value);
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label for="location" className="form-label">Location</label>
                    <input type="text"
                        className="form-control"
                        id="location"
                        placeholder="Add employee location"
                        value={location}
                        required
                        onChange={
                            (e) => {
                                setLocation(e.target.value);
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label for="department" className="form-label">Department</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        placeholder="Add employee department"
                        value={department}
                        required
                        onChange={
                            (e) => {
                                setDepartment(e.target.value);
                            }
                        }
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
            </form>
        </div>
    )
}

export default AddEmployee