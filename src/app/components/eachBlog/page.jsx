'use client'
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useBlog } from '@/context/context'


const EachBlog = () => {
    const blog = useBlog();
    const { data } = useSession();
    return (
        <div className='w-[70%] border bg-white rounded-md shadow-md p-6 overflow-hidden'>
            <div className='flex flex-col gap-4'>
            <div className="row1 flex gap-3">
                <div className="blog-img">
                    <Image src="/profile.jpg" width={80} height={80} priority alt='blog' className='rounded-md object-contain' />
                </div>
                <div className="blog-title">
                    <div className='title'>
                        <h1 className='max-w-md text-lg font-semibold text-[#222]'>Starlink provides high-speed, low-latency broadband internet.</h1>
                    </div>
                    <div className='name-date flex gap-2 text-sm text-[#555]'>
                        <span className='font-medium'>
                            {`${data?.user?.firstname} ${data?.user?.lastname}`}
                        </span>
                        -
                        <span className='font-medium'>
                            {blog.date}
                        </span>
                    </div>
                </div>
            </div>

            <div className="row2 pr-4">
                <p className='text-[#444] text-justify'>
                    Starlink is the world's first and largest satellite constellation using a low Earth orbit to deliver broadband internet capable of supporting streaming, online gaming, video calls and more.
                    Leveraging advanced satellites and user hardware coupled with our deep experience with both spacecraft and on-orbit operations, Starlink delivers high-speed, low-latency internet to users all over the world.
                </p>
            </div>
            </div>
        </div>
    )
}

export default EachBlog