import React from "react";
import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { useForm } from "react-hook-form";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    const user = { email: "abc@abc", password: "abcdefgh" };
    const found =
      formData.email === user.email && formData.password === user.password;
    if (!found) {
      setError("root.random", {
        message: `User with email  "${formData.email}"  not found`,
        type: "random",
      });
    }
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
              className={` p-2 box-border  border-2 outline-none  w-[300px] rounded-md ${
                !!errors.email ? "border-red-500" : "border-gray-600"
              }`}
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
              className={` p-2 box-border  border-2 outline-none  w-[300px] rounded-md ${
                !!errors.password ? "border-red-500" : "border-gray-600"
              }`}
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password...."
            />
          </Field>
          {errors?.root?.random?.message && (
            <div className=" text-red-500 text-md ml-2 bg-red-100 p-2 rounded-md font-bold">
              {errors?.root?.random?.message}
            </div>
          )}
        </FieldSet>
        <Field>
          <button
            type="submit"
            className=" text-lg text-white  m-auto px-3 py-1 border rounded-lg cursor-pointer bg-purple-500"
          >
            Login
          </button>
        </Field>
      </form>
    </div>
  );
}
