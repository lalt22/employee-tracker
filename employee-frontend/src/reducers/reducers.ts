import { Employee } from "../store/features/employeeSlice";
const initialState: Employee[] = [];

const employeeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default employeeReducer;