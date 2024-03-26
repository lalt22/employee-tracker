import { useContext, useEffect, useState } from "react";
import EmployeeList from "../../containers/EmployeeList/EmployeeList";
import { Employee, getAllEmployees } from "../../services/employeeService";
import { RefreshContext } from "../../context/RefreshContextProvider"
import "./EmployeesPage.scss"
import { useNavigate } from "react-router-dom";

const EmployeesPage = () => {
    const [employees, setEmployees] = useState<Employee[] | null>(null);
    const {refresh} = useContext(RefreshContext);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees().then((res) => setEmployees(res));
    }, [refresh])

    const handleNew = () => {
        navigate('/trackEmp/new')
    }

    return (
        <div className="employees">
            <button onClick={handleNew} className="new-emp">Add Employee</button>
            <div className="data-btns">
                <button className="number">ID</button>
                <button className="name">First Name</button>
                <button className="name">Middle Name</button>
                <button className="name">Last Name</button>
                <button className="email">Email</button>
                <button className="mobile">Mobile</button>
                <button>Start Date</button>
                <button>Contract Type</button>
                <button className="number" >On going?</button>
                <button className="number">Full-Time?</button>
                <button className="number">Hours</button>
            </div>
            <EmployeeList employees={employees}/>
        </div>
    )
}

export default EmployeesPage;