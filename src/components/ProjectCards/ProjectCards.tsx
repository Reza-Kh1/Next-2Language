"use client"
import React, { ReactNode, useState } from 'react'
import ImageCustom from '../ImageCustom/ImageCustom'
import { Button } from '@heroui/button'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useLocale } from 'next-intl'
type ProjectCardsType = {
    image: string
    name: string
    text: string
    category: string
    children: ReactNode
}
export default function ProjectCards({ image, name, text, children, category }: ProjectCardsType) {
    const [showMore, setShowMore] = useState<boolean>(false)
    const local = useLocale()
    return (
        <section className='w-full md:w-3/4 flex flex-col gap-6 md:gap-8 mx-auto p-3 md:p-6 border border-d-60 rounded-xl'>
            <ImageCustom src={image} alt={name} width={1000} height={600} />
            <div className='flex justify-between flex-col gap-3 md:flex-row md:gap-0'>
                <h3 className='text-w-100 order-2 md:order-1 font-semibold text-xl'>{name}</h3>
                <div className='order-1 md:order-2 text-center'>
                    <span className='text-w-50'>
                        {showMore ? local === "fa" ? "بستن جزئیات" : "Show Less" : local === "fa" ? "نمایش جزئیات" : "Show More"}
                    </span>
                    <Button title='button more' aria-label='button more' onPress={() => setShowMore(prev => !prev)} isIconOnly className='border mx-2 border-d-60 p-3 rounded-full text-w-100 bg-gradient-to-b to-d-100 from-gray-700/90'>
                        {showMore ?
                            <FaChevronUp />
                            :
                            <FaChevronDown />
                        }
                    </Button>
                </div>
            </div>
            <div className='flex-col md:flex-row flex gap-3 items-start  md:items-center'>
                <div className='p-1 border rounded-full px-2 border-d-60 text-w-100 flex items-center gap-2'>
                    {/* <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/chart.png"} alt={"iamge"} width={15} height={15} /> */}
                    <span className='text-sm'>
                        {category}
                    </span>
                </div>
            </div>
            <div className='border border-d-60 p-3 md:p-6 rounded-xl'>
                <span className='text-w-90 block'>{local === "fa" ? "توضیحات پروژه" : "Project Description"}</span>
                <p className='text-w-50'>
                    {text}
                </p>
                {showMore ?
                    children
                    : null}
            </div>
        </section>
    )
}
