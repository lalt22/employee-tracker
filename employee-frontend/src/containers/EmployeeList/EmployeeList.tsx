import { useContext, useEffect, useState } from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Employee } from "../../store/features/employeeSlice";
import "./EmployeeList.scss"
import { deleteEmployeeById, getAllEmployees, sortEmployeesByAttribute } from "../../services/employeeService";
import { useNavigate } from "react-router-dom";
import { RefreshContext } from "../../context/RefreshContextProvider";


const EmployeeList = () => {
    const {refresh, setRefresh} = useContext(RefreshContext)
    const navigate = useNavigate();
    const [employees, setEmployees] = useState<Employee[] | null>(null);

    useEffect(() => {
        getAllEmployees().then((res) => setEmployees(res));
    }, [])

    const handleSort = (attr: string) => {
        sortEmployeesByAttribute(attr, employees).then((res) => setEmployees(res)).then(() => setRefresh(refresh + 1))
    }
        
    const handleNew = () => {
        navigate('/trackEmp/new')
    }

    const handleDelete = (employee: Employee) => {
        const index = employees?.indexOf(employee, 0)
        let newList = employees
        if (typeof index !== "undefined" && index > -1){
            const newList = employees?.splice(index, 1)
        }
        deleteEmployeeById(employee.id).then(() => setEmployees(newList)).then(() => setRefresh(refresh + 1))
    }


    return (
        <div className="employee-list">
            <div className="employees">
                <button onClick={handleNew} className="new-emp">Add Employee</button>
                <div className="data-btns">
                    <button className="number" onClick={() => handleSort("id")}>ID</button>
                    <button className="name" onClick={() => handleSort("firstName")}>First</button>
                    <button className="name" onClick={() => handleSort("middleName")}>Middle</button>
                    <button className="name" onClick={() => handleSort("lastName")}>Last</button>
                    <button className="email" onClick={() => handleSort("email")}>Email</button>
                    <button className="mobile" onClick={() => handleSort("mobileNumber")}>Mobile</button>
                    <button onClick={() => handleSort("startDate")}>Start</button>
                </div>
            </div>
            {employees &&
                employees.map((employee) => {
                return (
                    <EmployeeCard key= {employee.id} employee={employee} handleDelete={handleDelete}/>
                )})
            }
        </div>
    )
}
export default EmployeeList;