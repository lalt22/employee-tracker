import { Employee } from "../services/employeeService";

const initialState: Employee[] = [];

const employeeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default employeeReducer;