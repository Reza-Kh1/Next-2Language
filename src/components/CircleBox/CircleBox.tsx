import { Button } from '@heroui/button'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
type CircleBoxType = {
    name: string
    text: string
    image: string
}
export default function CircleBox({ name, text,image }: CircleBoxType) {
    return (
        <section className="p-12 text-center bor-d-60 rounded-xl bg-no-repeat bg-cover" style={{ backgroundImage: `url(/dot-top.png), linear-gradient(177deg, #50505026, #00000000)` }}>
            <div className="bg-contain bg-no-repeat bg-center mt-12 flex justify-center items-center h-40" style={{ backgroundImage: `url(/circle-icon.png)` }}>
                <Image src={image} width={40} height={40} alt="icon" />
            </div>
            <span className="text-w-100 text-2xl font-semibold mt-8 block">{name}</span>
            <p className="text-w-80 mb-6 mt-4">{text}</p>
            <Button className="p-5 mt-6 py-6 rounded-full border bg-d-80 text-w-80 border-w-80">
                Learn More
                <FaArrowRight className="text-w-100" color="#ffff" />
            </Button>
        </section>
    )
}
