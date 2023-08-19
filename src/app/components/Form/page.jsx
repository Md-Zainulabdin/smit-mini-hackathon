"use client";
import Link from "next/link";
import React, { useState } from "react";

const Form = ({ signIn, onFormSubmit }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onFormSubmit(username, email, password);
  };

  return (
    <div className="w-[33%] px-3 py-4 border">
      <div className="title border-b pb-5 pt-2">
        <h1 className="text-3xl font-medium text-[#222]">
          {signIn ? "Sign In " : "Sign Up"}
        </h1>
      </div>

      <div className="form w-full mt-3">
        <form
          className="flex flex-col items-start gap-3"
          onSubmit={onSubmitHandler}
        >
          {!signIn ? (
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="username" className="text-lg text-[#333]">
                Username :
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
                className="border p-2 outline-none"
              />
            </div>
          ) : null}

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-lg text-[#333]">
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
              className="border p-2 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="text-lg text-[#333]">
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
              className="border p-2 outline-none"
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
              className="w-full border p-3 bg-blue-500 text-white rounded-md"
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
