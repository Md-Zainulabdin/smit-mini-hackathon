import React from 'react'
import Image from 'next/image'

const EachBlog = () => {
  return (
    <div className='w-[70%] border bg-white rounded-md shadow-md p-6 overflow-hidden'>
        <div className="row1 flex gap-3">
            <div className="blog-img">
                <Image src="/profile.jpg" width={70} height={70} priority className='rounded-md object-contain'/>
            </div>
            <div className="blog-title">
                <h1 className='max-w-md text-lg font-semibold text-[#222]'>Starlink provides high-speed, low-latency broadband internet across the globe.</h1>
            </div>
        </div>
    </div>
  )
}

export default EachBlog