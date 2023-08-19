"use client";
import Form from "@/app/components/Form/page";
import { useRouter } from "next/navigation";
import React from "react";

const signUpPage = () => {
  const router = useRouter();
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
      router.replace('/login')
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-[80px] flex items-center justify-start border px-[60px]">
        <h1 className="text-2xl text-[#222] font-semibold">Signup</h1>
      </div>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Form signIn={false} onFormSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default signUpPage;
