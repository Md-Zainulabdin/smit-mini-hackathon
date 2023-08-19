import Blog from '@/app/components/blog/page'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='w-full aliceblue'>
            <div className="w-full h-[80px] bg-white flex items-center justify-start border px-[60px]">
                <h1 className="text-2xl text-[#222] font-semibold">Dashboard</h1>
            </div>
            <Blog/>
        </div>
    )
}

export default Dashboard