import React from 'react'
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

function Form() {
    const schema = yup.object().shape({
        fullName: yup.string().required("Your full name is required!"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(6).max(10).required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null]).required(),
    });
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Full Name...' {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder='Email...' {...register("email")}/>
        <input type="number" placeholder='Age...' {...register("age")} />
        <input type="password" placeholder='Password...' {...register("password")} />
        <input type="password" placeholder='Confirm Password...' {...register("confirmPassword")} />
        <input type="submit" placeholder='Submit Form'/>
    </form>
  )
}

export default Form