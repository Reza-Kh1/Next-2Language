"use client"
import React, { useState } from 'react'
import ImageCustom from '../ImageCustom/ImageCustom'
import { Button } from '@heroui/button'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Image from 'next/image'
type ProjectCardsType = {
    image: string
    name: string
    text: string
}
export default function ProjectCards({ image, name, text }: ProjectCardsType) {
    const [showMore, setShowMore] = useState<boolean>(false)
    const ShowMoreBox = () => {
        return <div className='mt-10 flex flex-col gap-6'>
            <div className='border justify-between border-d-60 p-6 rounded-xl flex'>
                <div className='flex flex-col gap-2'>
                    <span className='text-w-50'>Category</span>
                    <span className='text-w-90'>E-commerce</span>
                </div>
                <div className='w-[1px] border border-d-60 h-full bg-d-60 py-7'></div>
                <div className='flex flex-col gap-2'>
                    <span className='text-w-50'>Time Taken</span>
                    <span className='text-w-90'>4 Months</span>
                </div>
                <div className='w-[1px] border border-d-60 h-full bg-d-60 py-7'></div>
                <div className='flex flex-col gap-2'>
                    <span className='text-w-50'>Start Date</span>
                    <span className='text-w-90'>January 15, 2023</span>
                </div>
                <div className='w-[1px] border border-d-60 h-full bg-d-60 py-7'></div>
                <div className='flex flex-col gap-2'>
                    <span className='text-w-50'>Completed Date</span>
                    <span className='text-w-90'>May 15, 2023</span>
                </div>
            </div>
            <div className='flex gap-7 border items-center border-d-60 p-6 rounded-xl'>
                <span className='text-w-100'>Technologies Used</span>
                <ImageCustom figureClass='border border-d-60 p-3 rounded-full bg-gradient-to-b to-d-100 from-gray-700/90' className='w-5' src={"/icons/html.png"} width={40} height={40} alt={"icon"} />
                <ImageCustom figureClass='border border-d-60 p-3 rounded-full bg-gradient-to-b to-d-100 from-gray-700/90' className='w-5' src={"/icons/code.png"} width={25} height={25} alt={"icon"} />
                <ImageCustom figureClass='border border-d-60 p-3 rounded-full bg-gradient-to-b to-d-100 from-gray-700/90' className='w-5' src={"/icons/app.png"} width={25} height={25} alt={"icon"} />
                <ImageCustom figureClass='border border-d-60 p-3 rounded-full bg-gradient-to-b to-d-100 from-gray-700/90' className='w-5' src={"/icons/fast.png"} width={25} height={25} alt={"icon"} />
            </div>
            <div className='border items-center border-d-60 p-6 rounded-xl'>
                <span className='text-w-100 w-full col-span-3'>Team Members</span>
                <div className='flex gap-7 mt-4 justify-between'>
                    <div className='w-1/3 rounded-xl p-3 border-d-60 border'>
                        <span className='block text-w-100 mb-3'>Web Developers</span>
                        <div className='flex'>
                            <div className='relative w-1/3'>
                                <figure className='absolute right-3 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <Image src="/profile/prof.png" alt='profile' width={40} height={40} />
                                </figure>
                                <figure className='absolute -right-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <Image src="/profile/prof2.png" alt='profile' width={40} height={40} />
                                </figure>
                            </div>
                            <div className='text-w-90 text-sm'>John Smith ,
                                Emily Johnson
                            </div>

                        </div>
                    </div>
                    <div className='w-1/3 rounded-xl p-3 border-d-60 border'>
                        <span className='block text-w-100 mb-3'>UI UX Designer</span>
                        <div className='flex'>
                            <div className='relative w-1/3'>
                                <figure className='absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <Image src="/profile/prof3.png" alt='profile' width={40} height={40} />
                                </figure>
                            </div>
                            <span className='text-w-90 text-sm'>Jessica Lee</span>
                        </div>
                    </div>
                    <div className='w-1/3 rounded-xl p-3 border-d-60 border'>
                        <span className='block text-w-100 mb-3'>Project Manager</span>
                        <div className='flex'>
                            <div className='relative w-1/3'>
                                <figure className='absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <Image src="/profile/prof4.png" alt='profile' width={40} height={40} />
                                </figure>

                            </div>
                            <span className='text-w-90 text-sm'>Michael Williams</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border items-center border-d-60 p-6 rounded-xl'>
                <span className='text-w-100'>Methods Used</span>
                <div className='flex mt-4 items-center justify-between p-6 border border-d-60 rounded-xl'>
                    <span className='w-1/5 text-center p-3 rounded-full border text-w-90 text-sm border-d-60'>Agile Development</span>
                    <div className='w-[1px] border border-d-60 h-full bg-d-60 py-7'></div>
                    <span className='w-1/5 text-center p-3 rounded-full border text-w-90 text-sm border-d-60'>User Testing</span>
                    <div className='w-[1px] border border-d-60 h-full bg-d-60 py-7'></div>
                    <span className='w-1/5 text-center p-3 rounded-full border text-w-90 text-sm border-d-60'>A/B Testing</span>
                </div>
            </div>
        </div>
    }
    return (
        <section className='w-3/4 flex flex-col gap-8 mx-auto p-6 border border-d-60 rounded-xl'>
            <ImageCustom src={image} alt={"project"} width={1000} height={600} />
            <div className='flex justify-between'>
                <h3 className='text-w-100 font-semibold text-xl'>{name}</h3>
                <div>
                    <span className='text-w-50'>
                        {showMore ? "Show Less" : "Show More"}

                    </span>
                    <Button onPress={() => setShowMore(prev => !prev)} isIconOnly className='border ml-2 border-d-60 p-3 rounded-full text-w-100 bg-gradient-to-b to-d-100 from-gray-700/90'>
                        {showMore ?
                            <FaChevronUp />
                            :
                            <FaChevronDown />
                        }
                    </Button>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='p-1 border rounded-full pr-3 border-d-60 text-w-100 flex items-center gap-2'>
                    <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/chart.png"} alt={"iamge"} width={15} height={15} />
                    <span className='text-sm'>
                        E-commerce
                    </span>
                </div>
                <div className='p-1 border rounded-full pr-3 border-d-60 text-w-100 flex items-center gap-2'>
                    <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/bags.png"} alt={"iamge"} width={15} height={15} />
                    <span className='text-sm'>
                        Web Design & Development
                    </span>
                </div>
                <div className='p-1 border rounded-full pr-3 border-d-60 text-w-100 flex items-center gap-2'>
                    <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/calender.png"} alt={"iamge"} width={15} height={15} />
                    <span className='text-sm'>
                        Web Design & Development
                    </span>
                </div>
            </div>
            <div className='border border-d-60 p-6 rounded-xl'>
                <span className='text-w-90 block'>Project Description</span>
                <p className='text-w-50'>
                    {text}
                </p>
                {showMore ?
                    <ShowMoreBox />
                    : null}
            </div>
        </section>
    )
}
