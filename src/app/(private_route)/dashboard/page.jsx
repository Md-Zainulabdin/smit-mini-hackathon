import Header from '@/app/components/header/page'
import React from 'react'
import PublishBlogs from '@/app/components/publish-blog/page'
import Blogs from '@/app/components/blogs/page'

const Dashboard = () => {
    return (
        <div className='w-full aliceblue'>
            <Header value={'Dashboard'} />
            <PublishBlogs />
            <Blogs/>
        </div>
    )
}

export default Dashboard