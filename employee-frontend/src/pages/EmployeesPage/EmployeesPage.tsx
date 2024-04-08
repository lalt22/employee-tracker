import { useContext, useEffect, useState } from "react";
import EmployeeList from "../../containers/EmployeeList/EmployeeList";
import { Employee, getAllEmployees, sortEmployeesByAttribute } from "../../services/employeeService";
import { RefreshContext } from "../../context/RefreshContextProvider"
import "./EmployeesPage.scss"
import { useNavigate } from "react-router-dom";

const EmployeesPage = () => {
    const [employees, setEmployees] = useState<Employee[] | null>(null);
    const {refresh, setRefresh} = useContext(RefreshContext);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees().then((res) => setEmployees(res));
    }, [])

    const handleNew = () => {
        navigate('/trackEmp/new')
    }

    const handleSort = (attr: string) => {
        sortEmployeesByAttribute(attr, employees).then((res) => setEmployees(res)).then(() => setRefresh(refresh + 1))
    }

    return (
        <div className="employees">
            <button onClick={handleNew} className="new-emp">Add Employee</button>
            <div className="data-btns">
                <button className="number" onClick={() => handleSort("id")}>ID</button>
                <button className="name" onClick={() => handleSort("firstName")}>First Name</button>
                <button className="name" onClick={() => handleSort("middleName")}>Middle Name</button>
                <button className="name" onClick={() => handleSort("lastName")}>Last Name</button>
                <button className="email" onClick={() => handleSort("email")}>Email</button>
                <button className="mobile" onClick={() => handleSort("mobileNumber")}>Mobile</button>
                <button onClick={() => handleSort("startDate")}>Start Date</button>
                <button onClick={() => handleSort("permOrContract")}>Contract Type</button>
                <button className="number" onClick={() => handleSort("isOngoing")}>On going?</button>
                <button className="number" onClick={() => handleSort("isFullTime")}>Full-Time?</button>
                <button className="number" onClick={() => handleSort("hoursPerWeek")}>Hours</button>
            </div>
            <EmployeeList employees={employees}/>
        </div>
    )
}

export default EmployeesPage;