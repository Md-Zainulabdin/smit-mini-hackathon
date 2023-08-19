'use client'
import React from 'react'
import Image from 'next/image'
import { useBlog } from '@/context/context'

const EachBlogs = ({ blogs}) => {
    const {blog, setBlog} = useBlog();
  return (
    <>
       {
        (blogs.length !== 0) ? (
                <div className='w-full flex flex-col gap-8'>
                {blogs.map((blog) => (
                     <div className='w-[70%] border bg-white rounded-md shadow-md p-6 overflow-hidden'>
                     <div className='flex flex-col gap-4'>
                         <div className="row1 flex gap-3">
                             <div className="blog-img">
                                 <Image src="/profile.jpg" width={80} height={80} priority alt='blog' className='rounded-md object-contain' />
                             </div>
                             <div className="blog-title">
                                 <div className='title'>
                                     <h1 className='max-w-md text-lg font-semibold text-[#222]'>{blog.title}</h1>
                                 </div>
                                 <div className='name-date flex gap-2 text-sm text-[#555]'>
                                     <span className='font-medium'>
                                         {blog.fullName}
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
                                 {blog.desc}
                             </p>
                         </div>

                         <div className="row3">
                            <span className='text-[--primary-color]'>edit</span>
                         </div>
                     </div>
                 </div>  
                ))}
                </div>
        ) : (
            <div>No Blog here...</div>
        )
       }
    </>
  )
}

export default EachBlogs