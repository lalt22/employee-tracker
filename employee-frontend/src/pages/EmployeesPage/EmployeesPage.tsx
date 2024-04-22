import { useContext, useEffect, useState } from "react";
import EmployeeList from "../../containers/EmployeeList/EmployeeList";
import { getAllEmployees, sortEmployeesByAttribute } from "../../services/employeeService";
import { RefreshContext } from "../../context/RefreshContextProvider"
import "./EmployeesPage.scss"
import { useNavigate } from "react-router-dom";
import { Employee } from "../../store/features/employeeSlice";

const EmployeesPage = () => {

    return (
        <div>
            <EmployeeList/>
        </div>
    )
}

export default EmployeesPage;