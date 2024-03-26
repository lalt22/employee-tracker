import { Link } from "react-router-dom";
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
            <Link to={`employee/${employee.id}`} className="data number">{employee.id}</Link>
            <p className="data name">{employee.firstName}</p>
            <p className="data name">{employee.middleName}</p>
            <p className="data name">{employee.lastName}</p>
            <p className="data email">{employee.email}</p>
            <p className="data mobile">{employee.mobileNumber}</p>
            <p className="data">{formatDate(employee.startDate)}</p>
            <p className="data">{employee.permOrContract}</p>
            <p className="data number">{employee.isOngoing ? "true": "false"}</p>
            <p className="data number">{employee.isFullTime}</p>
            <p className="data number">{employee.hoursPerWeek}</p>
        </div>
    )
}

export default EmployeeCard;