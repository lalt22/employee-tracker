import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Employee } from "../../services/employeeService";

interface EmployeeListInterface {
    employees: Employee[] | null
}

const EmployeeList = ({ employees }:EmployeeListInterface ) => {
    return (
        <div className="employee-list">
            {employees &&
                employees.map((employee) => {
                return (
                    <EmployeeCard key= {employee.id} employee={employee} />
                )})
            }
        </div>
    )
}
export default EmployeeList;