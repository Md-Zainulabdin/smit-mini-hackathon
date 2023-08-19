'use client'
import Form from "@/app/components/Form/page";
import Header from "@/app/components/header/page";
import { signIn } from "next-auth/react";
import {useRouter} from "next/navigation"

const LoginPage = () => {

  const router = useRouter();

  const onSubmitHandler = async (firstName, lastName, email, password) => {
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
      <Header value={'Login'}/>
      <div className="w-full h-[70vh] flex justify-center flex-col items-center">
        <Form signIn={true} onFormSubmit={onSubmitHandler} />
      </div>
    </div>
  );
};

export default LoginPage;

