import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const schema = yup.object({
  email: yup.string().required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const loginUser = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/login", formData);
      if (!response.data.token) {
        throw new Error("Invalid credentials");
      }
      // dispatch(setUser(data));
      navigate("/maindashboard");
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("Login Successful");
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  const handleFormSubmit = (data) => {
    setIsLoading(true);
    loginUser(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <Textinput
        name="email"
        label="Email"
        // defaultValue="admin"
        // type="email"
        register={register}
        error={errors.email}
        className="h-[48px]"
      />
      <Textinput
        name="password"
        label="Password"
        type="password"
        // defaultValue="admin"
        register={register}
        error={errors.password}
        className="h-[48px]"
      />
      <div className="flex justify-between">
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Keep me signed in"
        />
        <Link
          to="/forgot-password"
          className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >
          Forgot Password?
        </Link>
      </div>
      <Button
        type="submit"
        text="Sign in"
        className="btn btn-dark block w-full text-center"
        isLoading={isLoading}
      />
    </form>
  );
};

export default LoginForm;
