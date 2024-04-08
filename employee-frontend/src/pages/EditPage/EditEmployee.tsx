import { useContext, useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import { Employee, getEmployeeById } from "../../services/employeeService";
import { RefreshContext } from "../../context/RefreshContextProvider";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
    const [employee, setEmployee] = useState<Employee | null>(null);
    const {refresh, setRefresh} = useContext(RefreshContext);
    const pathVars = useParams();
    const id = pathVars.id;

    useEffect(() => {
        getEmployeeById(parseInt(id!)).then((res) => setEmployee(res))
    }, [refresh])

    return (
        <Form newEmployee={employee}/>
    )
}

export default EditEmployee;