import EachBlogs from '@/app/components/eachBlogs/page';
import Header from '@/app/components/header/page'
import { getBlog } from '@/handlers/handlers'
import Link from 'next/link'

const page = ({ params }) => {
  let id = params.blogId;
  const data = getBlog();

  const filterData = data.filter((blog) => blog.id === +id);
  console.log(filterData);

  return (
    <div className='w-full'>
      <Link href={'/dashboard'}><Header value={"< Back to All Blogs"} color={true} /></Link>
      <div className='w-full h-[90vh] '>
        <div className='px-[60px]'>
          <div className="title py-[40px]">
            <span className='text-2xl font-semibold text-[#333]'>All from {filterData[0].fullName}</span>
          </div>
          <div>
            <EachBlogs blogs={filterData}edit={false} /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default page