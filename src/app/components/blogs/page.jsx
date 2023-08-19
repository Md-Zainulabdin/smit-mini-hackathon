import React from 'react'
import EachBlog from '../eachBlog/page'

const Blogs = () => {
  return (
    <div className='w-full px-[60px] mt-12'>
        <div className="blog-title">
          <h1 className='text-2xl font-semibold'>My Blogs</h1>
        </div>
        <div className="blogs py-8">
          <EachBlog/>
        </div>
    </div>
  )
}

export default Blogs