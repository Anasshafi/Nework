import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import OnBoarding from "../Components/OnBoarding";
import UseUser from "../hooks/UseUser";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigte = useNavigate();
  const { loginUser } = UseUser();
  return (
    <OnBoarding
      left={
        <>
          <p className="text-[#35424B]">
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigte("/register");
              }}
              className="text-black font-semibold cursor-pointer"
            >
              Sign Up
            </span>
          </p>
          <div className="flex flex-1 mt-[4.2rem] justify-center flex-col gap-[2.5rem]">
            <h2 className="text-3xl font-bold">Login</h2>
            <div className="flex flex-col gap-6 w-full">
              <Input
                name="email"
                onChange={handleChange}
                placeholder="example@email.com"
                label="Email Address"
              />
              <Input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="8+ strong character"
                label="Password"
              />
            </div>
            <button
              className="py-3 text-white bg-[#248489] rounded-md"
              onClick={async () =>
                await loginUser(user).then(() => navigte("/home"))
              }
            >
              Login
            </button>
          </div>
        </>
      }
      right={
        <>
          <h1 className="text-white font-bold text-[3rem]">
            Welcome Back <br className="hidden lg:block" />
            to Nework
          </h1>
          <p className="text-white">
            Let's get you all set up so you can verify your personal
            <br className="hidden lg:block" />
            account and begin setting up your profile
          </p>
        </>
      }
    />
  );
};

export default Login;
