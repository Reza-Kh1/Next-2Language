"use client"
import { getBlogs } from '@/action/admin';
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import { Pagination } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaCalendar } from 'react-icons/fa6';
import { IoCreateOutline } from 'react-icons/io5';
import { MdOutlineAccessTime } from 'react-icons/md';

export default function page() {
  const { data } = useQuery({
    queryKey: ["getBlogs"],
    queryFn: getBlogs,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
  console.log(data);
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between items-center p-3 rounded-xl bg-white shadow-md'>
        <span>Create Blogs</span>
        <Link href={"/admin/blogs/create-blog"} className='flex items-center gap-2'>
          New Blogs
          <i className='border mx-2 border-d-60 p-3 rounded-full text-w-100 bg-gradient-to-b to-d-100 from-gray-700/90'>
            <IoCreateOutline />
          </i>
        </Link>
      </div>
      {data?.data?.length ?
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-3 rounded-xl bg-white shadow-md'>
            {data?.data?.map((row: any, index: number) => (
              <section key={index} className='flex justify-between flex-col gap-6'>
                <div className='p-4 rounded-xl border border-d-60' style={{ backgroundImage: "url(/dot-top.png)" }}>
                  <ImageCustom className='w-full' alt={"work"} src={"/work1.png"} height={350} width={500} />
                </div>
                <div className='flex flex-col md:flex-row items-start gap-4 md:gap-0 md:items-center justify-between'>
                  <div className='flex gap-2 items-center'>
                    <Image src={"/profile-auth.jpg"} alt='profile' className='rounded-full' width={40} height={40} />
                    <span>name</span>
                  </div>
                  <div className='flex gap-2 text-w-50'>
                    <span className='py-2 px-3 border rounded-full flex items-center gap-1 text-xs border-d-60'><MdOutlineAccessTime /> 6 min read</span>
                    <span className='py-2 px-3 border rounded-full flex items-center gap-1 text-xs border-d-60'><FaCalendar /> March 2019</span>
                  </div>
                </div>
                <div>
                  <h3 className='text-lg'>title</h3>
                  <p className='text-w-50 mt-2'>text</p>
                </div>
                <div className='flex justify-center'>
                  <Link className='text-w-100 bg-d-60 text-xs md:text-base px-5 py-2 rounded-full border border-d-50' href={"/admin/blogs/1"}>
                    Read More
                  </Link>
                </div>
              </section>
            ))}
          </div>
          <div className='bg-white p-3 shadow-md rounded-xl flex items-center justify-center'>
            <Pagination classNames={{ cursor: "bg-o-60" }} onChange={(value) => console.log(value)
            } initialPage={3} boundaries={1} total={1} />
          </div>
        </> : "No data available"}
    </div>
  )
}
