"use client";
import Link from "next/link";
import React, { useState } from "react";

const Form = ({ signIn, onFormSubmit }) => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const onSubmitHandler = (e) => {
    e.preventDefault();
     if (password !== repeatPassword) {
        alert("check password!")
        return;
     }
    onFormSubmit(firstName, lastName, email, password);
  };

  return (
    <div className="w-[33%] px-3 py-4 border">

      <div className="form w-full mt-3">
        <form
          className="flex flex-col items-start gap-3"
          onSubmit={onSubmitHandler}
        >
          {!signIn ? (
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="username" className=" text-[#333]">
                First Name :
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
                className="border p-1 outline-none"
              />
            </div>
          ) : null}

          {!signIn ? (
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="username" className=" text-[#333]">
                Last Name :
              </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
                className="border p-1 outline-none"
              />
            </div>
          ) : null}

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className=" text-[#333]">
              Email :
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="border p-1 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className=" text-[#333]">
              Password :
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="border p-1 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className=" text-[#333]">
              Repeat Password :
            </label>
            <input
              type="password"
              name="Repeat Password"
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
              required
              className="border p-1 outline-none"
            />
          </div>

          <div>
            {signIn ? (
              <Link href={"/signup"}>Dont have Account! Sign Up</Link>
            ) : (
              <Link href={"/login"}>Already have Account! SignIn</Link>
            )}
          </div>

          <div className="w-full text-center mt-3">
            <button
              type="submit"
              className="w-full border p-3 bg-[--primary-color] text-white rounded-md"
            >
              {signIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
