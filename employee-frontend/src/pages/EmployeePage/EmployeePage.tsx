import { useNavigate, useParams } from "react-router-dom";
import { Employee, getEmployeeById } from "../../services/employeeService";
import { useContext, useEffect, useState } from "react";
import { RefreshContext } from "../../context/RefreshContextProvider";
import "./EmployeePage.scss"


interface EmployeePageInterface {
    id: number
}

const EmployeePage = () => {
    const pathVars = useParams();
    const id = pathVars.id;
    const [employee, setEmployee] = useState<Employee | null>(null);
    const {refresh, setRefresh} = useContext(RefreshContext);
    const navigate = useNavigate();

    useEffect(() => {

        getEmployeeById(parseInt(id!)).then((res) => setEmployee(res))
    }, [refresh])


    const handleEdit = () => {
        navigate(`/trackEmp/employees/${id}/edit`)
    }


    return (
        <div className="employee-page">

            {employee && <div className="info-wrapper">
                <h1>{employee.firstName} {employee.middleName}  {employee.lastName}</h1>
                <h3 style={{display: "inline"}}>Email: </h3>
                <p style={{display: "inline"}}>{employee.email}</p>
                <br />
                <h3 style={{display: "inline"}}>Mobile: </h3>
                <p style={{display: "inline"}}>{employee.mobileNumber}</p>
                <br />
                <h3 style={{display: "inline"}}>Address: </h3>
                <p style={{display: "inline"}}>{employee.address}</p>
                <br />
                <h3 style={{display: "inline"}}>Start Date: </h3>
                <p style={{display: "inline"}}>{employee.startDate}</p>
                <br />
                <h3 style={{display: "inline"}}>Finish Date: </h3>
                <p style={{display: "inline"}}>{employee.finishDate}</p>
                <br />
                <h3 style={{display: "inline"}}>Hours: </h3>
                <p style={{display: "inline"}}>{employee.hoursPerWeek}</p>
            </div>}
            <button onClick={handleEdit}>Edit Profile</button>

        </div>
    )
}

export default EmployeePage;