'use client'
import  { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EachBlogs = ({ blogs, edit}) => {
    const [flag, setFlag] = useState(false);
  return (
    <>
       {
        (blogs.length !== 0) ? (
                <div className='w-full flex flex-col gap-8'>
                {blogs.map((blog) => (
                     <Link href={`/blog-detail/${blog.id}`} className='w-full border bg-white rounded-md shadow-md p-6 overflow-hidden' key={blog.id}
                     >
                     <div className='flex flex-col gap-4'>
                         <div className="row1 flex gap-3">
                             <div className="blog-img">
                                 <Image src="/profile.jpg" width={80} height={80} priority alt='blog' className='rounded-md object-contain' />
                             </div>
                             <div className="blog-title">
                                 <div className='title'>
                                     <h1 className='max-w-md text-lg font-semibold text-[#222]' contentEditable={(flag) ? true : false}>{blog.title}</h1>
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
                             <p className='text-[#444] text-justify' contentEditable={(flag) ? true : false}>
                                 {blog.desc}
                             </p>
                         </div>

                         <div className="row3">
                            {
                                (edit) ? (
                                    <span className='text-[--primary-color] cursor-pointer' onClick={(e) => {
                                        e.stopPropagation()
                                        setFlag(!flag)
                                    }}>edit</span>
                                ) : null
                            }
                         </div>
                     </div>
                 </Link>  
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