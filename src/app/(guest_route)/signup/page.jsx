"use client";
import Form from "@/app/components/Form/page";
import Header from "@/app/components/header/page";
import { redirect } from "next/navigation";
import React from "react";

const signUpPage = () => {
  const onSubmit = async (firstName, lastName, email, password) => {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
      }),
    });

    if (res.ok) {
      alert("Signup Succesfully");
      redirect('/login')
    }
  };

  return (
    <div className="w-full">
      <Header value={'Sign Up'}/>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Form signIn={false} onFormSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default signUpPage;
