import { Inputs } from "../pages/CreatePage/CreatePage";

export interface Employee {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    address: string;
    permOrContract: number;
    startDate: string;
    finishDate: string;
    isOngoing: boolean;
    isFullTime: boolean;
    hoursPerWeek: number;
}


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

    return null;
};