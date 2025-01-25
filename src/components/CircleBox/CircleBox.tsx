import { Button } from '@heroui/button'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { FaArrowRight, FaCalendar } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
type CircleBoxType = {
    name: string
    text: string
    image: string
    price?: number
    date?: string
    why?: string
    btnMore?: boolean
    customText?: ReactNode
}
export default function CircleBox({ date, why, price, name, text, image, btnMore, customText }: CircleBoxType) {
    return (
        <section className="p-12 text-center bor-d-60 rounded-xl bg-no-repeat bg-cover" style={{ backgroundImage: `url(/dot-top.png), linear-gradient(177deg, #50505026, #00000000)` }}>
            <div className="bg-contain bg-no-repeat bg-center mt-6 flex justify-center items-center h-40" style={{ backgroundImage: `url(/circle-icon.png)` }}>
                <Image src={image} width={40} height={40} alt="icon" />
            </div>
            {
                date ?
                    <div className='flex justify-center'>
                        <span className='flex gap-2 items-center py-3 px-5 border text-xs rounded-full border-d-60 text-w-80'>
                            <FaCalendar />
                            {date}
                        </span>
                    </div>
                    : null
            }
            <span className="text-w-100 text-2xl font-semibold mt-6 block">{name}</span>
            <p className="text-w-80 mb-6 mt-4">{text}</p>
            {price ?
                < div className='flex w-full justify-between items-center'>
                    <div className='text-w-50'>
                        Starts at Price: <span className='text-w-90 font-medium'>${price.toLocaleString()}</span>
                    </div>
                    <Button className='py-6 pr-2 pl-4 rounded-full text-w-100 bg-d-100 border border-d-60'>
                        Book a Call
                        <i className='px-4 py-2 rounded-full bg-d-80'>
                            <FaArrowRightLong />
                        </i>
                    </Button>
                </div> : null
            }
            {customText ? customText : null}
            {btnMore ?
                < Button className="p-5 mt-6 py-6 rounded-full border bg-d-80 text-w-80 border-d-60">
                    Learn More
                    <FaArrowRight className="text-w-100" color="#ffff" />
                </Button> : null
            }
            {why ?
                <div className='w-full p-8 border flex flex-col gap-3 justify-center items-center border-d-60'>
                    <span className='text-w-90'>why</span>
                    <p className='text-w-50'>{why}</p>
                </div>
                : null}
        </section >
    )
}
