export interface Employee {
    id: number
    firstName: string
    middleName: string
    lastName: string
    email: string
    mobileNumber: string
    address: string
    permOrContract: number
    startDate: string
    finishDate: string
    isOngoing: boolean
    isFullTime: boolean
    hoursPerWeek: number
}

export const getAllEmployees = async ():Promise<Employee[]> => {
    const res = await fetch("http://localhost:8100/employees");
    if (!res.ok) {
        alert("Could not load the employees");
    }
    const data = await res.json();
    console.log(data);
    return data;
}