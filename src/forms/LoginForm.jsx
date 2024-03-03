import React from "react";
import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { useForm } from "react-hook-form";

export default function LoginForm() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const submitForm = (formData) => {
    console.log(formData);
  };


  return (
    <div className=" flex flex-col justify-center items-center mt-6">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label={"Login Details"}>
          <Field label={"Email : "} error={errors.email}>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              className=" p-2 box-border  border-2 border-gray-600 w-[300px] rounded-md"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email...."
            />
          </Field>
          <Field label={"Password : "} error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be atleast 8 charecter...",
                },
              })}
              className=" p-2 box-border border-2 border-gray-900 w-[300px] rounded-md"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password...."
            />
          </Field>
        </FieldSet>
        <Field>
          <button
            type="submit"
            className=" text-lg text-white ml-2 px-3 py-1 border rounded-lg cursor-pointer bg-purple-500"
          >
            Login
          </button>
        </Field>
      </form>
    </div>
  );
}
