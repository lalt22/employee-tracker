import { SubmitHandler, useForm } from "react-hook-form";
import { createNewEmployee, editEmployeeById } from "../../services/employeeService";
import { Employee } from "../../store/features/employeeSlice";
import "./Form.scss"
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
export type Inputs = {
    firstName: string
    middleName: string
    lastName: string
    email: string
    mobile: string
    address: string
    permOrContract: string
    startDate: Date
    finishDate: Date
    isOngoing: boolean
    fullTimeOrPartTime: string
    hoursPerWeek: number
}

export interface formProps {
    newEmployee: Employee | null

}

const Form = ({newEmployee}: formProps) => {
    const {
        register,
        handleSubmit,

        formState: { errors }
    } = useForm<Inputs>()
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        if (!newEmployee) {
            createNewEmployee(data).then((res) => navigate(`/trackEmp/employees/${res?.id}`))
        }
        else {
            editEmployeeById(newEmployee.id, data).then((res) => navigate(`/trackEmp/employees/${res?.id}`))
        }

    }

    const firstNamePlaceholder = newEmployee?.firstName || "First Name";
    const middleNamePlaceholder = newEmployee?.middleName || "Middle Name";
    const lastNamePlaceholder = newEmployee?.lastName || "Last Name";

    const emailPlaceholder = newEmployee?.email || "email@example.com"
    const mobilePlaceholder = newEmployee?.mobileNumber || "0412345678";
    const addressPlaceholder = newEmployee?.address|| "123 Example St, Sydney NSW 2000"


    return (
        <div className="new-emp-page">
            <form className="new-emp-form" onSubmit={handleSubmit(onSubmit)} >
                <div className="section-wrapper">
                    <h2>Personal Information</h2>
                    <label className="input-label">
                        First name
                        <input placeholder={firstNamePlaceholder} defaultValue={newEmployee?.firstName||""}  {...register("firstName", {required: true})} />
                        {errors.firstName && <span className="error">Please Enter First Name</span>}
                    </label>

                    <label className="input-label">
                        Middle name (if applicable)
                        <input placeholder={middleNamePlaceholder} defaultValue={newEmployee?.middleName||""}  {...register("middleName")} />
                    </label>

                    <label className="input-label">
                        Last name
                        <input placeholder={lastNamePlaceholder} defaultValue={newEmployee?.lastName||""} {...register("lastName", {required: true})} />
                        {errors.lastName && <span className="error">Please Enter Last Name</span>}
                    </label>
                </div>

                <div className="section-wrapper">
                    <h2>Contact Details</h2>
                    <label className="input-label">
                        Email address
                        <input placeholder={emailPlaceholder} defaultValue={newEmployee?.email||""} {...register("email", {
                        required: {
                            value: true,
                            message: "Please enter an email address"
                        },
                        pattern: {
                            value: /^[A-Za-z0-9.-_]+@[A-Za-z0-9.-_]+\.[A-Za-z0-9.-_]+$/,
                            message: "Invalid email address"
                            },
                        })} />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </label>

                    <label className="input-label">
                        Mobile number<br></br>
                        Must be an Australian mobile number
                        <input placeholder={mobilePlaceholder} defaultValue={newEmployee?.mobileNumber||""}  {...register("mobile", {
                            required: {
                                value: true,
                                message: "Please enter a mobile number"
                            },
                            pattern: {
                                value: /^[04][0-9]{9}$/,
                                message: "Invalid mobile number"
                            }
                        })} />
                        {errors.mobile && <span className="error">{errors.mobile.message}</span>}
                    </label>


                    <label className="input-label">
                        Address<br/>
                        <input placeholder={addressPlaceholder} defaultValue={newEmployee?.address||""}  {... register("address", {
                            required: {
                                value: true,
                                message: "Please enter an address"
                            },
                        })} />
                        {errors.address && <span className="error">{errors.address.message}</span>}
                    </label>
                </div>

                <div className="section-wrapper">
                    <h2>Employee Status</h2>
                    <label className="input-label">
                        Which contract type?
                        <label id="permanent">
                            <input type="radio" value="permanent"
                            {...register("permOrContract", {
                                required: true})}/>
                            Permanent

                        </label>
                        <label id="contract">
                        <input type="radio" value="contract"
                            {...register("permOrContract", {
                                required: true})} />
                            Contract
                        </label>
                    </label>

                    <label className="input-label">
                        Start Date<br/>
                        <input type="date" {...register("startDate", {
                            required: {
                                value: true,
                                message: "Please select a start date"
                            }
                        })}/>
                        {errors.startDate && <span className="error">{errors.startDate.message}</span>}
                    </label>

                    <label className="input-label">
                        Finish Date<br/>
                        <input type="date" {...register("finishDate")}/>
                    </label>

                    <label >
                        <input type="checkbox" {...register("isOngoing")}/>
                        Ongoing?
                    </label>

                    <label className="input-label">
                        Full-time or Part-time?
                        <label id="fulltime">
                        <input type="radio" value="fulltime"
                            {...register("fullTimeOrPartTime", {
                            required: true})}/>
                        Full-time

                        </label>
                        <label id="parttime">
                        <input type="radio" value="parttime"
                            {...register("fullTimeOrPartTime", {
                                required: true})} />
                            Part-time
                        </label>

                    </label>

                    <label className="input-label">
                        Hours per week
                        <input type="number"  {...register("hoursPerWeek", {
                        required: {
                            value: true,
                            message: "Please enter number of hours"
                        },
                        min: {
                            value: 1,
                            message: "Please enter valid number of hours ( >= 1)"
                        }
                    })}/>
                    {errors.hoursPerWeek && <span className="error">{errors.hoursPerWeek.message}</span>}
                    </label>
                </div>
                <input type="submit" className="submit"/>
            </form>
        </div>
    )
}

export default Form;