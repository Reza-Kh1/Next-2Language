"use client"
import React, { useState } from 'react'
import ImageCustom from '../ImageCustom/ImageCustom'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { BsDot, BsStars } from 'react-icons/bs'
import { IoCardOutline } from 'react-icons/io5'
import { MdOutlineCardTravel } from 'react-icons/md'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Button } from '@heroui/button'
import { HiOutlineChartBar } from 'react-icons/hi'
type CareersBoxtype = {
    title: string
    image: string
    address: string
    skill: string
    price: string
    bags: string
}
export default function CareersBox({ title, image, address, skill, price, bags }: CareersBoxtype) {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <section className='p-8 rounded-xl border border-d-60'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='h-[100px] w-[100px] flex justify-center items-center bg-no-repeat bg-center' style={{ backgroundImage: 'url(/circle2.png)' }}>
                        <ImageCustom alt={"icon"} figureClass='w-auto' src={image} width={30} height={30} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-w-100 text-xl font-semibold'>{title}</h3>
                        <span className='text-w-50'>{address}</span>
                    </div>
                </div>
                <Link href={"#"} className='text-w-100 py-2 px-3 rounded-full border flex items-center gap-2 border-d-60'>Apply Now
                    <i className='bg-d-60 px-3 py-1 rounded-full'><FaArrowRightLong /></i></Link>
            </div>
            <div className='flex flex-col gap-3 mt-6'>
                <p className='flex items-center gap-2 text-w-100'><IoCardOutline />{price}</p>
                <p className='flex items-center gap-2 text-w-100'><MdOutlineCardTravel />{bags}</p>
                <p className='flex items-center gap-2 text-w-100'><BsStars />{skill}</p>
            </div>
            {open ?
                <>
                    <div className='p-8 mt-6 rounded-xl border border-d-60'>
                        <span className='text-w-100 text-xl mb-4 block'>Job Description</span>
                        <p className='text-w-50 mb-5'>As a Web Designer at DigitX, you will be responsible for creating visually stunning and user-friendly website designs. Working closely with our development and marketing teams, you will turn creative concepts into functional web interfaces that deliver exceptional user experiences. This role offers an opportunity to showcase your design expertise and contribute to a wide range of exciting projects for diverse clients.</p>
                        <span className='flex items-center gap-2 border rounded-xl border-d-60 p-2 px-3 text-w-80'><HiOutlineChartBar /> Application Deadline: 30th September 2025</span>
                    </div>
                    <div className='p-8 mt-6 rounded-xl border border-d-60'>
                        <span className='text-w-100 text-xl mb-4 block'>Responsibilities</span>
                        <p className='flex gap-2 items-center text-w-50'><BsDot />Design and create visually appealing website layouts, graphics, and icons.</p>
                        <p className='flex gap-2 items-center text-w-50'><BsDot />Collaborate with UI/UX designers and front-end developers to ensure seamless integration of design elements.</p>
                        <p className='flex gap-2 items-center text-w-50'><BsDot />Conduct user research to understand user behaviors and preferences for optimized design decisions.</p>
                        <p className='flex gap-2 items-center text-w-50'><BsDot />Stay updated with industry trends and emerging design tools and techniques.</p>
                        <p className='flex gap-2 items-center text-w-50'><BsDot />Present design concepts and prototypes to internal teams and clients for feedback and approval.</p>
                    </div>
                </>
                : null}
            <div className='mt-8 flex items-center gap-1 justify-end'>
                <span className='text-w-50'>
                    {open ? "Show Less" : "Show More"}
                </span>
                <Button onPress={() => setOpen(prev => !prev)} isIconOnly className='border border-d-60 min-w-0 rounded-full text-w-100' style={{ background: "linear-gradient(180deg, #7f7d7d29, #000000c4)" }}>
                    {open ?
                        <FaChevronUp className='w-4' />
                        :
                        <FaChevronDown className='w-4' />
                    }
                </Button>
            </div>
        </section>
    )
}
