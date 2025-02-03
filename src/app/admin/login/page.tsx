"use client"
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import { Button } from '@heroui/button'
import { Checkbox, Input } from '@nextui-org/react'
import React, { useState } from 'react'
export default function Page() {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [isRemember, setIsRemember] = useState<boolean>(false)
    const submitHandler = (form: FormData) => {
        const body = {
            name: form.get("name"),
            email: form.get("email"),
            password: form.get("password"),
            save: isRemember
        }
        console.log(body);

    }
    return (
        <div className='w-full items-start mb-80 flex justify-center h-[500px] bg-slate-400 bg-no-repeat bg-center bg-cover rounded-xl shadow-md before:bg-black/40 before:w-full before:h-full relative before:absolute before:top-0 before:left-0 before:rounded-xl' style={{ backgroundImage: "url(/admin-image/login-admin.jpg)" }}>
            <div className='w-1/2 z-10 text-center mt-16'>
                {isLogin ?
                    <>
                        <h1 className='font-semibold text-5xl text-w-100'>Welcome back</h1>
                        <span className='text-w-90'>Enter your email and password to sign in.</span>
                    </> :
                    <>
                        <h1 className='font-semibold text-5xl text-w-100'>Welcome!</h1>
                        <span className='text-w-90'>Use these awesome forms to login or create new account in your project for free.</span>
                    </>
                }
            </div>
            <form action={submitHandler} className='text-center flex flex-col gap-7 z-10 w-1/3 p-8 bg-slate-50 shadow-md border rounded-xl absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2'>
                <span className='font-semibold text-3xl '>
                    {isLogin ? "Register" : "Log in"}
                </span>
                {isLogin ?
                    <Input
                        name='name'
                        label="Name"
                        type="text"
                        variant="bordered"
                        labelPlacement='outside'
                        placeholder='Name'
                    />
                    : null}
                <Input
                    name='email'
                    label="Email"
                    type="email"
                    labelPlacement='outside'
                    placeholder='Email'
                    variant="bordered"
                />
                <Input
                    name='password'
                    label="Password"
                    type="password"
                    labelPlacement='outside'
                    placeholder='password'
                    variant="bordered"
                />
                {isLogin ?
                    <Checkbox onClick={() => setIsRemember(prev => !prev)} color="default" name='save'>
                        Remember me
                    </Checkbox>
                    :
                    <Checkbox onClick={() => setIsRemember(prev => !prev)} color="default" name='save'>
                        I agree the Terms and Conditions
                    </Checkbox>
                }
                {
                    !isLogin ?
                        <>
                            <Button type='submit' className='bg-d-btn text-w-100 w-full rounded-md font-semibold p-5'>
                                Sign in
                            </Button>
                            <span>Don't have an account?
                                <button type='button' className='font-semibold text-b-btn ml-2' onClick={() => setIsLogin(prev => !prev)}>Sign up</button>
                            </span>
                        </>
                        :
                        <>
                            <Button type='submit' className='bg-d-btn text-w-100 w-full rounded-md font-semibold p-5'>
                                Sign up
                            </Button>
                            <span>Already have an account?
                                <button type='button' className='font-semibold text-b-btn ml-2' onClick={() => setIsLogin(prev => !prev)}>Sign in</button>
                            </span>
                        </>
                }
            </form>
        </div>
    )
}

