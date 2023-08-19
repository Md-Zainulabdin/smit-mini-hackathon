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
    if (!signIn) {
      if (password !== repeatPassword) {
        alert("check password!")
        return;
      }
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
              <label htmlFor="firstname" className=" text-[#333]">
                First Name :
              </label>
              <input
                id="firstname"
                type="text"
                name="firstName"
                value={firstName}
                autocomplete
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
              <label htmlFor="lastname" className=" text-[#333]">
                Last Name :
              </label>
              <input
                id="lastname"
                type="text"
                name="lastName"
                autocomplete
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
              id="email"
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
              id="password"
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

          {
            (!signIn) ? (
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="repeatpassword" className=" text-[#333]">
                  Repeat Password :
                </label>
                <input
                  id="repeatpassword"
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
            ) : null
          }

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
