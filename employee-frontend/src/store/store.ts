import { configureStore } from "@reduxjs/toolkit"
import { EmployeeSlice } from "./features/employeeSlice"
import { TypedUseSelectorHook, useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const store = configureStore({
    reducer: {
        employee: EmployeeSlice.reducer
    }
})

export const useAppDispatch:()=> typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector