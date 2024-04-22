import { Inputs } from "../components/Form/Form";
import { Employee } from "../store/features/employeeSlice";


export const getAllEmployees = async (): Promise<Employee[]> => {
    const res = await fetch("http://localhost:8100/employees");
    if (!res.ok) {
        alert("Could not load the employees");
    }
    const data = await res.json();
    console.log(data);
    return data;
};

export const createNewEmployee = async (data: Inputs): Promise<Employee | null> => {
    console.log(data);
    let isFullTime = data.fullTimeOrPartTime == "fulltime" ? true : false;
    const res = await fetch("http://localhost:8100/employees", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            email: data.email,
            mobileNumber: data.mobile,
            address: data.address,
            startDate: data.startDate,
            finishDate: data.finishDate,
            isOngoing: data.isOngoing,
            permOrContract: data.permOrContract,
            isFullTime: isFullTime,
            hoursPerWeek: data.hoursPerWeek
        })
    });
    if (!res.ok) {
        throw new Error("Could not create employee");
    }

    return res.json();
};

export const editEmployeeById = async (id: number, data: Inputs) => {
    let isFullTime = data.fullTimeOrPartTime == "fulltime" ? true : false;
    const res = await fetch(`http://localhost:8100/employees/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            email: data.email,
            mobileNumber: data.mobile,
            address: data.address,
            startDate: data.startDate,
            finishDate: data.finishDate,
            isOngoing: data.isOngoing,
            permOrContract: data.permOrContract,
            isFullTime: isFullTime,
            hoursPerWeek: data.hoursPerWeek
        })
    });
    if (!res.ok) {
        throw new Error("Could not edit employee");
    }
    return res.json();
};

export const sortEmployeesByAttribute = async (attr: string, employees: Employee[] | null): Promise<Employee[] | null> => {
    if (employees == null) {
        return null;
    }

    switch (attr) {
        case "id": {
            return [...employees].sort((a, b) => a.id - b.id);
        }
        case "firstName": {
            return [...employees].sort((a, b) => a.firstName.localeCompare(b.firstName));
        }
        case "middleName": {
            return [...employees].sort((a, b) => a.middleName.localeCompare(b.middleName));
        }
        case "lastName": {
            return [...employees].sort((a, b) => a.lastName.localeCompare(b.lastName));
        }
        case "email": {
            return [...employees].sort((a, b) => a.email.localeCompare(b.email));;
        }
        case "mobileNumber": {
            return [...employees].sort((a, b) => a.mobileNumber.localeCompare(b.mobileNumber));
        }
        case "startDate": {
            return [...employees].sort((a, b) => a.startDate.localeCompare(b.startDate));
        }
        case "finishDate": {
            return [...employees].sort((a, b) => a.finishDate.localeCompare(b.finishDate));
        }
        case "permOrContract": {
            return [...employees].sort((a, b) => a.permOrContract - b.permOrContract);
        }
        case "isOngoing": {
            return [...employees].sort((a, b) => Number(a.isOngoing) - Number(b.isOngoing));
        }
        case "isFullTime": {
            return [...employees].sort((a, b) => Number(a.isFullTime) - Number(b.isFullTime));
        }
        case "hoursPerWeek": {
            return [...employees].sort((a, b) => a.hoursPerWeek - b.hoursPerWeek);
        }

        default:
            return employees;
    }
};

export const deleteEmployeeById = async (id: number): Promise<Employee | null> => {
    const res = await fetch(`http://localhost:8100/employees/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (!res.ok) {
        throw new Error("Failed to delete Employee");
    }
    return null;
};


export const getEmployeeById = async (id: number): Promise<Employee | null> => {
    const res = await fetch(`http://localhost:8100/employees?id=${id}`, {
        method: "GET"
    });
    if (!res.ok) {
        throw new Error('Could not get Employee');
    }
    const data = await res.json();
    return data[0];
};