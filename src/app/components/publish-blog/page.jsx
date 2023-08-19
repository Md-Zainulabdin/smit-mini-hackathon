'use client'
import { useSession } from 'next-auth/react';
import React, { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'


const PublishBlogs = () => {
  const router = useRouter()

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return ` ${date} ${month} ${year}`;
  };
  const date = dateBuilder(new Date());


  const titleRef = useRef(null);
  const descRef = useRef(null);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const { data } = useSession();
  const fullName = `${data?.user?.firstname} ${data?.user?.lastname}`;

  const onPublishHandler = async () => {
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc,
        fullName,
        date
      }),
    });

    if (res.ok) {
      titleRef.current.value = "";
      descRef.current.value = "";
      window.location.reload()
    }
  }

  return (
    <>
      {
        (data?.user) ? (
          <div className='w-[70%] px-[60px] mt-12 '>
            <div className='border p-8 flex flex-col gap-4 rounded shadow-md bg-white'>
              <div className='title w-full rounded-sm'>
                <input type="text"
                  ref={titleRef} name='title' onChange={(e) => {
                    setTitle(e.target.value)
                  }} placeholder='title' className='w-full border outline-none px-4 py-2 rounded-md' />
              </div>
              <div className='text-area w-full rounded-sm'>
                <textarea name="desc" id="desc" onChange={(e) => {
                  setDesc(e.target.value)
                }} rows="5" ref={descRef} className='border rounded-md w-full p-3 outline-none' placeholder='What is in your mind'></textarea>
              </div>
              <div className="button">
                <button onClick={() => {
                  onPublishHandler();
                }} type='submit' className='px-4 py-2 bg-[--primary-color] text-white rounded-md'>Publish Blog</button>
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  )
}

export default PublishBlogs