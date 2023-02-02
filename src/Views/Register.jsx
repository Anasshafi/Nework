import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "../Components/Common/PhoneInput";
import Input from "../Components/Input";
import OnBoarding from "../Components/OnBoarding";
import Svgs from "../Components/Svgs";
import UseUser from "../hooks/UseUser";

const Register = () => {
  const navigte = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
  });

  const { createUser } = UseUser();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <OnBoarding
      left={
        <>
          <p className="text-[#35424B]">
            Have an account?{" "}
            <span
              onClick={() => {
                navigte("/login");
              }}
              className="text-black font-semibold cursor-pointer"
            >
              Sign in
            </span>
          </p>
          <div className="flex flex-1 mt-[4.2rem] flex-col gap-[2.5rem] justify-center">
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex items-center gap-6 w-full lg:flex-row flex-col">
                <Input
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  label="First Name"
                />
                <Input
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  label="Last Name"
                />
              </div>
              <PhoneInput onChange={handleChange} />
              <Input
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="example@email.com"
                label="Email Address"
              />
              <div className="flex items-center gap-6 w-full lg:flex-row flex-col">
                <Input
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="8+ strong character"
                  label="Password"
                />
                <Input
                  name="passwordConfirm"
                  value={user.passwordConfirm}
                  onChange={handleChange}
                  type="password"
                  placeholder="Confirm your password"
                  label="Confirm Password"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="scale-[1.4] accent-[#248489] outline-none"
                  id="terms"
                />
                <label className="text-sm" htmlFor="terms">
                  I agree to all{" "}
                  <span className="font-semibold">terms & conditions</span>
                </label>
              </div>
            </div>
            <button
              className="py-4 text-white bg-[#248489] rounded-md"
              onClick={async () => {
                await createUser(user).then(() => navigte("/home"));
              }}
            >
              Sign Up
            </button>
            <div className="flex items-center gap-4">
              <div className="border border-[#E4EBF3] flex-1"></div>
              <span className="text-[#8D93A1]">Or sign up with</span>
              <div className="border border-[#E4EBF3] flex-1"></div>
            </div>
            <div className="flex items-center gap-8">
              <div className="border rounded-lg py-5 flex-1 flex justify-center items-center cursor-pointer">
                <Svgs.Github />
              </div>
              <div className="border rounded-lg py-5 flex-1 flex justify-center items-center cursor-pointer">
                <Svgs.Github />
              </div>
              <div className="border rounded-lg py-5 flex-1 flex justify-center items-center cursor-pointer">
                <Svgs.Github />
              </div>
            </div>
          </div>
        </>
      }
      right={
        <>
          <h1 className="text-white font-bold text-[3rem]">
            Welcome to <br className="hidden lg:block" />
            Nework
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

export default Register;
