"use client"
import SelectCustom from '@/app/components/SelectCustom/SelectCustom'
import { Button } from '@heroui/button'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
const dataSelect = [
    "service1",
    "service2",
    "service3",
    "service4",
]
type InputCustomType = {
    label: string
    placeholder: string
    name: string
}
export default function FormContact() {
    const [text, setText] = useState<string>("")
    const [text1, setText1] = useState<string>("")
    const InputCustom = ({ label, placeholder, name }: InputCustomType) => {
        return <label htmlFor="" className='flex flex-col gap-2'>
            <span className='font-semibold text-w-100'>{label}</span>
            <input type="text" name={name} placeholder={placeholder} title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
        </label>
    }
    return (
        <form className='w-full p-6 md:p-10 border border-d-60 rounded-xl mt-8 md:mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <InputCustom label='Name' name='name' placeholder='Enter your Name' />
                <InputCustom label='Email' name='email' placeholder='Enter your Email' />
                <InputCustom label='Phone Number' name='phone' placeholder='Enter your Phone Number' />
                <SelectCustom arry={dataSelect} label='Select Service' placeholder='Select your Service' setText={setText} text={text} />
                <InputCustom label='Company / Organization Name' name='desc' placeholder='Enter Name' />
                <SelectCustom arry={dataSelect} label='Select Service' placeholder='Select your Service' setText={setText1} text={text1} />
            </div>
            <label htmlFor="" className='flex flex-col gap-2 mb-8 mt-6'>
                <span className='font-semibold text-w-100'>Message</span>
                <textarea rows={5} placeholder='Enter your Message' title='Name' className='bg-d-100 border resize-none border-d-60 rounded-xl p-3 text-w-80' ></textarea>
            </label>
            <Button type='submit' className='bg-d-60/60 mx-auto rounded-full text-w-100 px-4 py-3 flex items-center justify-between'>
                Send your Inquiry
                <FaArrowRightLong />
            </Button>
        </form >
    )
}