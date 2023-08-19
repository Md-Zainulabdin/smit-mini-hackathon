'use client'
import Form from "@/app/components/Form/page";
import { signIn } from "next-auth/react";
import {useRouter} from "next/navigation"

const LoginPage = () => {

  const router = useRouter();

  const onSubmitHandler = async (firstName, lastName, email, password) => {
    console.log(email, password);
   const data = await signIn("credentials", {
    redirect: false,
    email, 
    password,
   })
   if (data.ok && data.error === null) {
    router.replace('/dashboard')
  }
    
  };

  return (
    <div className="w-full ">
      <div className="w-full h-[80px] flex items-center justify-start border px-[60px]">
        <h1 className="text-2xl text-[#222] font-semibold">login</h1>
      </div>
      <div className="w-full h-[70vh] flex justify-center flex-col items-center">
        <Form signIn={true} onFormSubmit={onSubmitHandler} />
      </div>
    </div>
  );
};

export default LoginPage;

