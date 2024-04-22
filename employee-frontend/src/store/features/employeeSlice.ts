import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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


interface EmployeeState{
    employees:Employee[]
}

const initialState: EmployeeState = {
    employees: [],
}

export const EmployeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers : {
        addEmployee:(state,action:PayloadAction<{employee:Employee}>) => {
            state.employees.push({
                id: action.payload.employee.id,
                firstName: action.payload.employee.firstName,
                middleName: action.payload.employee.middleName,
                lastName: action.payload.employee.lastName,
                email: action.payload.employee.email,
                mobileNumber: action.payload.employee.mobileNumber,
                address: action.payload.employee.address,
                permOrContract: action.payload.employee.permOrContract,
                startDate: action.payload.employee.startDate,
                finishDate: action.payload.employee.finishDate,
                isOngoing: action.payload.employee.isOngoing,
                isFullTime: action.payload.employee.isFullTime,
                hoursPerWeek: action.payload.employee.hoursPerWeek
            })
        }
    }
})

export default EmployeeSlice.reducer;
export const {addEmployee} = EmployeeSlice.actions