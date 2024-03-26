import { Link } from "react-router-dom";
import { Employee, deleteEmployeeById } from "../../services/employeeService";
import "./EmployeeCard.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCancel, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { RefreshContext } from "../../context/RefreshContextProvider";


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
    const {refresh, setRefresh} = useContext(RefreshContext)

    const handleDelete = () => {
        deleteEmployeeById(employee.id).then(() => setRefresh(refresh+1))
    }

    return (
        <div className="employee-card">
            <FontAwesomeIcon className="delete" icon={faTrash} onClick={handleDelete}/>
            <Link to={`/trackEmp/employees/${employee.id}`} className="data number">{employee.id}</Link>
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