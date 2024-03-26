import { SubmitHandler, useForm } from "react-hook-form";
import "./CreatePage.scss"

type Inputs = {
    firstName: string
    middleName: string
    lastName: string
    email: string
    mobile: string
    address: string
    permOrContract: string
    startDate: Date
    finishDate: Date
    fullTimeOrPartTime: string
    hoursPerWeek: number
}

const CreatePage = () => {
    const {
        register,
        handleSubmit,

        formState: { errors }
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        
    }


    return (
        <div className="new-emp-page">
            <form className="new-emp-form" onSubmit={handleSubmit(onSubmit)} >
                <h2>Personal Information</h2>

                <label className="input-label">
                    First name
                    <input placeholder="First Name" {...register("firstName", {required: true})} />
                    {errors.firstName && <span className="error">Please Enter First Name</span>}
                </label>

                <label className="input-label">
                    Middle name (if applicable)
                    <input placeholder="Middle Name" {...register("middleName")} />
                </label>

                <label className="input-label">
                    Last name
                    <input placeholder="Last Name" {...register("lastName", {required: true})} />
                    {errors.lastName && <span className="error">Please Enter Last Name</span>}
                </label>


                <h2>Contact Details</h2>
                <label className="input-label">
                    Email address
                    <input placeholder="example@example.com" {...register("email", {
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
                    <input placeholder="0412345678" {...register("mobile", {
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
                    <input placeholder="123 Example St, Sydney NSW 2000" {... register("address", {
                        required: {
                            value: true,
                            message: "Please enter an address"
                        },
                    })} />
                    {errors.address && <span className="error">{errors.address.message}</span>}
                </label>

                <h2>Employee Status</h2>
                <label className="input-label">
                    Which contract type?
                    <label>
                        <input type="radio" value="permanent" id="permanent"
                        {...register("permOrContract", {
                            required: true})}/>
                        Permanent

                    </label>
                    <label>
                    <input type="radio" value="contract" id="contract"
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

                <label className="input-label">
                    Full-time or Part-time?
                    <label>
                    <input type="radio" value="fulltime" id="fulltime"
                        {...register("fullTimeOrPartTime", {
                        required: true})}/>
                    Full-time

                    </label>
                    <label>
                    <input type="radio" value="parttime" id="parttime"
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

                <input type="submit"/>
            </form>
        </div>
    )
}

export default CreatePage;