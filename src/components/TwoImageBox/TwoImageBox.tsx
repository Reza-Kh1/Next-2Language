import Image from 'next/image'
import React from 'react'
type TwoImageBoxType = {
    img1: string
    img2: string
    name: string
    text: string
}
export default function TwoImageBox({ img1, img2, name, text }: TwoImageBoxType) {
    return (
        <div className="rounded-xl p-6" style={{ backgroundImage: `url(/dot-top.png), linear-gradient(177deg, rgb(45 45 45 / 15%), rgba(0, 0, 0, 0))` }}>
            <div className="flex gap-6 justify-evenly mt-10">
                <div className="bg-contain bg-no-repeat bg-center w-24 flex justify-center items-center h-24" style={{ backgroundImage: `url(/circle-icon.png)` }}>
                    <Image src={img1} width={25} height={25} alt="icon" />
                </div>
                <div className="bg-contain bg-no-repeat bg-center w-24 flex justify-center items-center h-24" style={{ backgroundImage: `url(/circle-icon.png)` }}>
                    <Image src={img2} width={25} height={25} alt="icon" />
                </div>
            </div>
            <span className="text-w-90 mt-4 mb-6 font-semibold text-center block text-xl">{name}</span>
            <p className="text-w-50 text-center">{text}</p>
        </div>
    )
}
