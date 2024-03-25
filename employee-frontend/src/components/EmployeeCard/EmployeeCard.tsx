import { Employee } from "../../services/employeeService";
import "./EmployeeCard.scss"

interface EmployeeCardInterface {
    employee: Employee
}

const formatDate = (date: string): any => {
    if (date == null) {
        return ""
    }
    else {
        return date
    }
}


const EmployeeCard = ({employee}: EmployeeCardInterface) => {
    return (
        <div className="employee-card">
            <p>{employee.id}</p>
            <p>{employee.firstName}</p>
            <p>{employee.middleName}</p>
            <p>{employee.lastName}</p>
            <p>{employee.email}</p>
            <p>{employee.mobileNumber}</p>
            <p>{employee.address}</p>
            <p>{formatDate(employee.startDate)}</p>
            <p>{formatDate(employee.finishDate)}</p>
            <p>{employee.isOngoing}</p>
            <p>{employee.isFullTime}</p>
            <p>{employee.hoursPerWeek}</p>
        </div>
    )
}

export default EmployeeCard;