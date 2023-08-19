'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Nav = () => {

    const {status, data} = useSession();

    return (
        <div className='w-full h-[45px] bg-[--primary-color] text-white'>
            <nav className='w-full h-full flex items-center justify-between px-[60px]'>
                <div className="logo">
                    <Link href={'/'} className='text-lg'>Personal Blogging App</Link>
                </div>
                <div className="menu flex items-center gap-4 cursor-pointer">
                    {
                        (status === "authenticated") ? (
                            <div className='text-white'>
                                <Link href={'/profile'} className='text-[#fafafa] '>{`${data?.user?.firstname} ${data?.user?.lastname}`}</Link>
                            </div>
                        ) : null
                    }
                    {
                        (status === "authenticated") ? (<button onClick={() => {
                            signOut();
                        }}>Logout</button>) : <Link href={'/login'}>Login</Link>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Nav