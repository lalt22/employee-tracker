import { useContext, useEffect, useState } from "react";
import EmployeeList from "../../containers/EmployeeList/EmployeeList";
import { Employee, getAllEmployees } from "../../services/employeeService";
import { RefreshContext } from "../../context/RefreshContextProvider"
import "./EmployeesPage.scss"

const EmployeesPage = () => {
    const [employees, setEmployees] = useState<Employee[] | null>(null);
    const {refresh} = useContext(RefreshContext);

    useEffect(() => {
        getAllEmployees().then((res) => setEmployees(res));
    }, [refresh])


    return (
        <div className="employees">
            <button className="new-emp">Add New</button>
            <div className="data-btns">
                <button>ID</button>
                <button>First Name</button>
                <button>Middle Name</button>
                <button>Last Name</button>
                <button>Email</button>
                <button>Mobile</button>
                <button>Address</button>
                <button>Start Date</button>
                <button>End Date</button>
                <button>Contract Type</button>
                <button>Full/Part Time</button>
                <button>Hours</button>
            </div>
            <EmployeeList employees={employees}/>
        </div>
    )
}

export default EmployeesPage;