'use client'
import Header from '@/app/components/header/page'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

const ProfilePage = () => {
  const [password, setPassword] = useState("");
  const { data } = useSession();
  console.log(data);
  return (
    <div>
      <Header value={'Profile'} />
      <div className='w-full px-[60px] flex justify-start items-center'>
        <div className='w-[70%] my-[60px] border p-12  flex flex-col gap-4'>
          <div className='img'>
            <Image src={'/profile.jpg'} width={300} height={300} priority alt='profile' className='rounded-md' />
          </div>
          <div className="name">
            <h1 className='text-xl font-semibold'>{`${data?.user?.firstname} ${data?.user?.lastname}`}</h1>
          </div>
          <div className="password">
            <div className="changePassword">
              <h1 className='text-lg font-semibold'>Password :</h1>
            </div>
            <div className="form flex flex-col gap-4 mt-3">
              <div>
                <input type="password" name='password' className='border px-2 py-1'  placeholder='update password'/>
              </div>
              <div>
                <input type="password" name='password' className='border px-2 py-1' placeholder='confirm password' />
              </div>
              <div>
                <button className='px-6 py-2 bg-[--primary-color] text-white rounded-md' >Update password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage