"use client"
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import React from 'react'

export default function Navbar() {
    return (
        <div className='w-full mb-5 flex justify-between items-center bg-white shadow-md p-3 rounded-xl'>
            <div>
                {new Date().toISOString().split('T')[0]}
            </div>
            <div className='flex justify-center items-center gap-2'>
                <span>John Michael</span>
                <ImageCustom figureClass='w-auto' alt={"profile"} src={"/profile/man.png"} width={40} height={30} />
            </div>
        </div>
    )
}
