'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Nav = () => {

    const { status, session } = useSession();

    return (
        <div className='w-full h-[45px] bg-[--primary-color] text-white'>
            <nav className='w-full h-full flex items-center justify-between px-[60px]'>
                <div className="logo">
                    <h1 className='text-lg'>Personal Blogging App</h1>
                </div>
                <div className="menu">
                    {
                        (status === "authenticated") ? (<button onClick={signOut()}>Logout</button>) : <Link href={'/login'}>Login</Link>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Nav