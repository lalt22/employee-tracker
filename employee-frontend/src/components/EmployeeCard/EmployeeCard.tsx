import { Link } from "react-router-dom";
import "./EmployeeCard.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Employee } from "../../store/features/employeeSlice"

interface EmployeeCardInterface {
    employee: Employee
    handleDelete: any
}

const formatDate = (date: string): any => {
    if (date == null) {
        return ""
    }
    else {
        return date
    }
}


const EmployeeCard = ({employee, handleDelete}: EmployeeCardInterface) => {
    return (
        <div className="employee-card">
            <FontAwesomeIcon className="delete" icon={faTrash} onClick={() => handleDelete(employee)}/>
            <div className="data">
                <Link to={`/trackEmp/employees/${employee.id}`} className="number">{employee.id}</Link>
            </div>
            
            <p className="data name">{employee.firstName}</p>
            <p className="data name">{employee.middleName}</p>
            <p className="data name">{employee.lastName}</p>
            <p className="data email">{employee.email}</p>
            <p className="data mobile">{employee.mobileNumber}</p>
            <p className="data">{formatDate(employee.startDate)}</p>
        </div>
    )
}

export default EmployeeCard;