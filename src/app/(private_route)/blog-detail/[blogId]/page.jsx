import EachBlogs from '@/app/components/eachBlogs/page';
import Header from '@/app/components/header/page'
import { getBlog } from '@/handlers/handlers'
import Link from 'next/link'
import Image from 'next/image'
import { getServerSession } from 'next-auth';

const page = async ({ params }) => {
  let id = params.blogId;
  const data = getBlog();
  const session = await getServerSession();
  const filterData = data.filter((blog) => blog.id === +id);

  return (
    <div className='w-full'>
      <Link href={'/dashboard'}><Header value={"< Back to All Blogs"} color={true} /></Link>
      <div className='w-full h-[90vh] flex gap-12'>
        <div className='w-[70%] px-[60px]'>
          <div className="title py-[40px]">
            <span className='text-2xl font-semibold text-[#333]'>All from {filterData[0].fullName}</span>
          </div>
          <div>
            <EachBlogs blogs={filterData}edit={false} /> 
          </div>
        </div>
        <div className='w-[30%] py-12'>
          <div className="imgBox flex flex-col gap-3">
            <div className="email w-full">
              <h1 className='text-xl'>{session?.user?.email}</h1>
            </div>
            <div className="username w-full">
              <h1 className='text-2xl w-full text-[--priamry-color]'>{filterData[0].fullName}</h1>
            </div>
            <div className='w-full'>
            <Image src={'/profile.jpg'} width={250} height={250} priority alt='profile' className='rounded-md'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page