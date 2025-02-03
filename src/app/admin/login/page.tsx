import ImageCustom from '@/components/ImageCustom/ImageCustom'
import { Input } from '@nextui-org/react'
import React from 'react'

export default function Page() {
    return (
        <div className='w-full items-center flex justify-center h-[500px] bg-slate-400 bg-no-repeat bg-center bg-cover rounded-xl shadow-md before:bg-black/40 before:w-full before:h-full relative before:absolute before:top-0 before:left-0 before:rounded-xl' style={{ backgroundImage: "url(/admin-image/login-admin.jpg)" }}>
            <div className='w-1/2 z-10 text-center'>
                <h1 className='font-semibold text-5xl text-w-100'>Welcome!</h1>
                <span className='text-w-90'>Use these awesome forms to login or create new account in your project for free.</span>
            </div>
            <div className='text-center flex flex-col gap-7 z-10 w-1/3 p-8 bg-slate-50 shadow-md border rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2'>
                <span className='font-semibold text-3xl '>Register</span>
                <Input
                    label="Name"
                    type="text"
                    variant="bordered"
                />
                <Input
                    label="Email"
                    type="email"
                    variant="bordered"
                />
                <Input
                    label="Password"
                    type="password"
                    variant="bordered"
                />
            </div>
        </div>
    )
}

