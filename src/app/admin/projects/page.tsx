"use client"
import { getProjects } from '@/action/admin';
import ImageCustom from '@/components/ImageCustom/ImageCustom';
import { Pagination } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'
import { FaChevronDown } from 'react-icons/fa6';
import { IoCreateOutline } from 'react-icons/io5';

export default function page() {
    const { data } = useQuery({
        queryKey: ["getProjects"],
        queryFn: getProjects,
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24,
    });
    console.log(data);
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex justify-between items-center p-3 rounded-xl bg-white shadow-md'>
                <span>Create Projects</span>
                <Link href={"/admin/projects/create"} className='flex items-center gap-2'>
                    New Project
                    <i className='border mx-2 border-d-60 p-3 rounded-full text-w-100 bg-gradient-to-b to-d-100 from-gray-700/90'>
                        <IoCreateOutline />
                    </i>
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-3 rounded-xl bg-white shadow-md'>
                {data?.data?.map((row: any, index: number) => (
                    <section key={index} className='w-full shadow-md flex flex-col gap-6 md:gap-8 mx-auto p-3 md:p-6 border border-w-90 rounded-xl'>
                        <ImageCustom src={"/work1.png"} alt={"project"} width={1000} height={600} />
                        <div className='flex justify-between flex-col gap-3 md:flex-row md:gap-0'>
                            <h3 className='text-w-100 order-2 md:order-1 font-semibold text-xl'>name</h3>
                            <div className='order-1 md:order-2 text-center flex justify-start items-center gap-2'>
                                <span className='text-w-50'>
                                    Show More
                                </span>
                                <Link href={"/projects/1"} className='border mx-2 border-d-60 p-3 rounded-full text-w-100 bg-gradient-to-b to-d-100 from-gray-700/90'>
                                    <FaChevronDown />
                                </Link>
                            </div>
                        </div>
                        <div className='flex-col md:flex-row flex gap-3 items-start  md:items-center'>
                            <div className='p-1 border rounded-full px-2 border-w-90 flex items-center gap-2'>
                                <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/chart.png"} alt={"iamge"} width={15} height={15} />
                                <span className='text-sm'>
                                    E-commerce
                                </span>
                            </div>
                            <div className='p-1 border rounded-full px-2 border-w-90 flex items-center gap-2'>
                                <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/bags.png"} alt={"iamge"} width={15} height={15} />
                                <span className='text-sm'>
                                    Web Design
                                </span>
                            </div>
                            <div className='p-1 border rounded-full px-2 border-w-90 flex items-center gap-2'>
                                <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/calender.png"} alt={"iamge"} width={15} height={15} />
                                <span className='text-sm'>
                                    Development
                                </span>
                            </div>
                        </div>
                        <div className='p-3 md:p-6 rounded-xl'>
                            <span className=' block'>Project Description</span>
                            <p className='text-w-50'>
                                text
                            </p>
                            {/* <ShowMoreBox /> */}
                        </div>
                    </section>
                ))}
            </div>
            <div className='bg-white p-3 shadow-md rounded-xl flex items-center justify-center'>
                <Pagination classNames={{ cursor: "bg-o-60" }} onChange={(value) => console.log(value)
                } initialPage={3} boundaries={1} total={1} />
            </div>
        </div>
    )
}
