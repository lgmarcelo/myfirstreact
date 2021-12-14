import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Home from './Home';
import Employee from "./Employee";
import AddEmployee from "../services/AddEmployee";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/myfirstreact" element={<Home />} />
                    <Route exact path="/myfirstreact/employees" element={<Employee />} />
                    <Route exact path="/myfirstreact/add" element={<AddEmployee />} />
                    <Route exact path="/myfirstreact/employees/edit/:employeeID" element={<AddEmployee />} />
                    <Route exact path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router