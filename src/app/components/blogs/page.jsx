import { getBlog } from '@/handlers/handlers'
import React from 'react'
import EachBlogs from '../eachBlogs/page';

const Blogs = () => {
  const data = getBlog();
  return (
    <div className='w-full px-[60px] mt-12'>
        <div className="blog-title">
          <h1 className='text-2xl font-semibold'>My Blogs</h1>
        </div>
        <div className="w-[73%] blogs py-8">
          <EachBlogs blogs={data} edit={true}/>
        </div>
    </div>
  )
}

export default Blogs