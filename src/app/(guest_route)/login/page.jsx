'use client'
import Form from "@/app/components/Form/page";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"

const LoginPage = () => {

  const router = useRouter();

  const onSubmitHandler = async (username, email, password) => {
    const data = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (data.ok && data.error === null) {
      alert("Sucessfully Login");
      router.replace("/")

    }
  };

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <Form signIn={true} onFormSubmit={onSubmitHandler} />
    </div>
  );
};

export default LoginPage;
