'use client'
import React, { useState } from 'react'

const Blog = () => {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const onPublishHandler = async () => {
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc
      }),
    });

    console.log(res);
  }

  return (
    <div className='w-full px-[60px] mt-12 '>
      <div className='border p-8 flex flex-col gap-4 rounded shadow-md bg-white'>
        <div className='title w-full rounded-sm'>
          <input type="text" name='title' onChange={(e) => {
            setTitle(e.target.value)
          }} placeholder='title' className='w-full border outline-none px-4 py-2 rounded-md' />
        </div>
        <div className='text-area w-full rounded-sm'>
          <textarea name="desc" id="desc" onChange={(e) => {
            setDesc(e.target.value)
          }} rows="5" className='border rounded-md w-full p-3 outline-none' placeholder='What is in your mind'></textarea>
        </div>
        <div className="button">
          <button onClick={onPublishHandler} type='submit' className='px-4 py-2 bg-[--primary-color] text-white rounded-md'>Publish Blog</button>
        </div>
      </div>
    </div>
  )
}

export default Blog