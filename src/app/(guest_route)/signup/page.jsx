"use client";
import Form from "@/app/components/Form/page";
import { redirect } from "next/navigation";
import React from "react";

const signUpPage = () => {
  const onSubmit = async (username, email, password) => {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    });

    if (res.ok) {
      alert("User Created");
      console.log(res);
      redirect('/');
    }
  };

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <Form signIn={false} onFormSubmit={onSubmit} />
    </div>
  );
};

export default signUpPage;
