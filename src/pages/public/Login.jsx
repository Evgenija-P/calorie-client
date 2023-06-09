import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label>
          Email
          <input {...register("email", { required: true })} placeholder="Email" className="px-2" />
        </label>

        <label>
          Password
          <input {...register("password", { required: true })} placeholder="Password" className="px-2" />
          {errors.exampleRequired && <span>This field is required</span>}
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
