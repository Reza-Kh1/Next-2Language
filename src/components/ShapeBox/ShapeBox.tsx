import React from 'react'
import ImageCustom from '../ImageCustom/ImageCustom'
import { Button } from '@heroui/button'
import { FaArrowRight } from 'react-icons/fa'
type ShapeBoxType = {
    name: string
    image: string
    date: string
    category: string
    text: string
}
export default function ShapeBox({ data }: { data: ShapeBoxType[] }) {
    if (!data.length) return
    return data.map((row, index) => (
        <section key={index} className="p-8 bg-gradient-to-b from-gray-500/15 to-black/0 rounded-xl">
            <div className="h-56 md:h-80 relative border border-d-60 flex justify-center items-center rounded-xl" style={{ backgroundImage: `url(/dot-top.png), linear-gradient(177deg, #50505026, #00000000)` }}>
                <ImageCustom figureClass="flex w-auto" className='w-24 h-24 md:w-36 md:h-36' src={row.image} alt={"shap"} width={150} height={150} />
                <Button className="p-5 text-xs md:text-base mt-6 absolute transform left-1/2 -bottom-5 md:-bottom-6 -translate-x-1/2 py-3 md:py-6 rounded-full border bg-d-80 text-w-80 border-w-80">
                    View Projects Details
                    <FaArrowRight className="text-w-100" color="#ffff" />
                </Button>
            </div>
            <span className="text-w-100 block mt-10 md:mt-16 font-semibold text-base md:text-lg">{row.name}</span>
            <div className="flex text-xs justify-between w-full my-4 text-w-90">
                <span>{row.category}</span>
                <span>{row.date}</span>
            </div>
            <p className="text-w-50 text-sm md:text-base">{row.text}</p>
        </section>
    ))
}
